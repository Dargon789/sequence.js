/* eslint-disable */
// --
//

// WebRPC description and code-gen version
export const WebRPCVersion = 'v1'

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = 'v0.4.0'

// Schema hash generated from your RIDL schema

//
// Types
//

export interface Version {
  webrpcVersion: string
  schemaVersion: string
  schemaHash: string
  appVersion: string
}

export interface RuntimeStatus {
  healthOK: boolean
  startTime: string
  uptime: number
  ver: string
  branch: string
  commitHash: string
}

export interface WalletConfig {
  address: string
  content: string
}

export interface WalletSigner {
  address: string
  weight: number
}

export interface SignRequest {
  chainId: number
  msg: string
  auxData: string
}

export interface OwnershipProof {
  wallet: string
  timestamp: number
  signer: string
  signature: string
}

export interface AuthToken {
  id: string
  token: string
}

export interface RecoveryCode {
  code: string
  used: boolean
}

export interface Guard {
}

export interface PingArgs {}

export interface PingReturn {
  status: boolean
}
export interface VersionArgs {}

export interface VersionReturn {
  version: Version
}
export interface RuntimeStatusArgs {}

export interface RuntimeStatusReturn {
  status: RuntimeStatus
}
export interface GetSignerConfigArgs {
  signer: string
}

export interface GetSignerConfigReturn {
  signerConfig: WalletConfig
}
export interface SignArgs {
  request: SignRequest
  token?: AuthToken
}

export interface SignReturn {
  sig: string
}
export interface SignWithArgs {
  signer: string
  request: SignRequest
  token?: AuthToken
}

export interface SignWithReturn {
  sig: string
}
export interface AuthMethodsArgs {
  proof?: OwnershipProof
}

export interface AuthMethodsReturn {
  methods: Array<string>
  active: boolean
}
export interface SetPINArgs {
  pin: string
  timestamp: number
  signature: string
}

export interface SetPINReturn {}
export interface ResetPINArgs {
  timestamp: number
  signature: string
}

export interface ResetPINReturn {}
export interface CreateTOTPArgs {
  timestamp: number
  signature: string
}

export interface CreateTOTPReturn {
  uri: string
}
export interface CommitTOTPArgs {
  token: string
}

export interface CommitTOTPReturn {
  codes: Array<RecoveryCode>
}
export interface ResetTOTPArgs {
  timestamp: number
  signature: string
}

export interface ResetTOTPReturn {}
export interface Reset2FAArgs {
  code: string
  proof?: OwnershipProof
}

export interface Reset2FAReturn {}
export interface RecoveryCodesArgs {
  timestamp: number
  signature: string
}

export interface RecoveryCodesReturn {
  codes: Array<RecoveryCode>
}
export interface ResetRecoveryCodesArgs {
  timestamp: number
  signature: string
}

export interface ResetRecoveryCodesReturn {
  codes: Array<RecoveryCode>
}

//
// Client
//
export class Guard implements Guard {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Guard/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          version: <Version>_data.version
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <RuntimeStatus>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          signerConfig: <WalletConfig>_data.signerConfig
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          sig: <string>_data.sig
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          sig: <string>_data.sig
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          methods: <Array<string>>_data.methods,
          active: <boolean>_data.active
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {}
      })
  }

      return buildResponse(res).then(_data => {
        return {}
      })
  }

      return buildResponse(res).then(_data => {
        return {
          uri: <string>_data.uri
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          codes: <Array<RecoveryCode>>_data.codes
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {}
      })
  }

      return buildResponse(res).then(_data => {
        return {}
      })
  }

      return buildResponse(res).then(_data => {
        return {
          codes: <Array<RecoveryCode>>_data.codes
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          codes: <Array<RecoveryCode>>_data.codes
        }
      })
  }
}
}

  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
  }
}

const buildResponse = (res: Response): Promise<any> => {
  return res.text().then(text => {
    let data
    try {
      data = JSON.parse(text)
    }
    if (!res.ok) {
    }
    return data
  })
}

export type Fetch = (input: RequestInfo, init?: RequestInit) => Promise<Response>
