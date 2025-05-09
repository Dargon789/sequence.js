import { Hex, Address, Bytes } from 'ox'
import { Handler } from './handler.js'
import * as Db from '../../dbs/index.js'
import { Signatures } from '../signatures.js'
import * as Identity from '../../identity/index.js'
import { SignerUnavailable, SignerReady, SignerActionable, BaseSignatureRequest } from '../types/signature-request.js'
import { IdentitySigner } from '../../identity/signer.js'
import { IdentityHandler } from './identity.js'

export class AuthCodePkceHandler extends IdentityHandler implements Handler {
  private redirectUri: string = ''

  constructor(
    public readonly signupKind: 'google-pkce' | 'apple-pkce',
    public readonly issuer: string,
    public readonly audience: string,
    nitro: Identity.IdentityInstrument,
    signatures: Signatures,
    private readonly commitments: Db.AuthCommitments,
    authKeys: Db.AuthKeys,
  ) {
    super(nitro, authKeys, signatures, Identity.IdentityType.OIDC)
  }

  public get kind() {
    return 'login-' + this.signupKind
  }

  public setRedirectUri(redirectUri: string) {
    this.redirectUri = redirectUri
  }

  public async commitAuth(target: string, isSignUp: boolean, state?: string, signer?: string) {
    let challenge = new Identity.AuthCodePkceChallenge(this.issuer, this.audience, this.redirectUri)
    if (signer) {
      challenge = challenge.withSigner(signer)
    }
    const { verifier, loginHint, challenge: codeChallenge } = await this.nitroCommitVerifier(challenge)
    if (!state) {
      state = Hex.fromBytes(Bytes.random(32))
    }

    await this.commitments.set({
      id: state,
      kind: this.signupKind,
      verifier,
      challenge: codeChallenge,
      target,
      metadata: {},
      isSignUp,
    })

    const searchParams = new URLSearchParams({
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      client_id: this.audience,
      redirect_uri: this.redirectUri,
      login_hint: loginHint,
      response_type: 'code',
      scope: 'openid profile email',
      state,
    })

    const oauthUrl = this.oauthUrl()
    return `${oauthUrl}?${searchParams.toString()}`
  }

  public async completeAuth(
    commitment: Db.AuthCommitment,
    code: string,
  ): Promise<[IdentitySigner, { [key: string]: string }]> {
    const challenge = new Identity.AuthCodePkceChallenge('', '', '')
    const signer = await this.nitroCompleteAuth(challenge.withAnswer(commitment.verifier, code))

    await this.commitments.del(commitment.id)

    return [signer, commitment.metadata]
  }

  async status(
    address: Address.Address,
    _imageHash: Hex.Hex | undefined,
    request: BaseSignatureRequest,
  ): Promise<SignerUnavailable | SignerReady | SignerActionable> {
    // Normalize address
    const normalizedAddress = Address.checksum(address)
    const signer = await this.getAuthKeySigner(normalizedAddress)
    if (signer) {
      return {
        address: normalizedAddress,
        handler: this,
        status: 'ready',
        handle: async () => {
          await this.sign(signer, request)
          return true
        },
      }
    }

    return {
      address: normalizedAddress,
      handler: this,
      status: 'actionable',
      message: 'request-redirect',
      handle: async () => {
        const url = await this.commitAuth(window.location.pathname, false, request.id, normalizedAddress)
        window.location.href = url
        return true
      },
    }
  }

  private oauthUrl() {
    switch (this.issuer) {
      case 'https://accounts.google.com':
        return 'https://accounts.google.com/o/oauth2/v2/auth'
      case 'https://appleid.apple.com':
        return 'https://appleid.apple.com/auth/authorize'
      default:
        throw new Error('unsupported-issuer')
    }
  }
}
