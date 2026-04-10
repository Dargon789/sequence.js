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

export enum SortOrder {
  DESC = 'DESC',
  ASC = 'ASC'
}

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
  checks: RuntimeChecks
  numTxnsRelayed: { [key: string]: NumTxnsRelayed }
}

export interface NumTxnsRelayed {
  chainID: number
  prev: number
  current: number
  period: number
}

export interface RuntimeChecks {}

export interface SequenceContext {
  factory: string
  mainModule: string
  mainModuleUpgradable: string
  guestModule: string
  utils: string
}

export interface User {
  address: string
  username: string
  avatar: string
  bio: string
  location: string
  locale: string
  backup?: boolean
  backupConfirmed?: boolean
  maxInvites?: number
  updatedAt?: string
  createdAt?: string
}

export interface WalletBackup {
  accountAddress: string
  secretHash: string
  encryptedWallet: string
  userConfirmed: boolean
  updatedAt?: string
  createdAt?: string
}

export interface Friend {
  id: number
  userAddress: string
  friendAddress: string
  nickname: string
  user?: User
  createdAt?: string
}

export interface InviteCode {
  usesLeft: number
  ownerAccount: string
  email?: string
  url: string
  createdAt?: string
  expiresAt?: string
}

export interface InviteCodeAccount {
  claimedByUserAddress: string
  claimedAt?: string
}

export interface InviteInfo {
  expiryInHours: number
  max: number
  invites: Array<InviteCode>
}

export interface ContractCall {
  signature: string
  function: string
  args: Array<TupleComponent>
}

export interface TupleComponent {
  name?: string
  type: string
  value: any
}

export interface Transaction {
  delegateCall: boolean
  revertOnError: boolean
  gasLimit: string
  target: string
  value: string
  data: string
  call?: ContractCall
}

export interface UserStorage {
  userAddress: string
  key: string
  value: any
}

export interface Token {
  chainId: number
  contractAddress: string
  tokenId?: string
}

export interface Price {
  value: number
  currency: string
}

export interface TokenPrice {
  token: Token
  price?: Price
  price24hChange?: Price
  floorPrice: Price
  buyPrice: Price
  sellPrice: Price
  updatedAt: string
}

export interface ExchangeRate {
  name: string
  symbol: string
  value: number
  vsCurrency: string
  currencyType: string
}

export interface LinkedWallet {
  id: number
  walletAddress: string
  linkedWalletAddress: string
  createdAt?: string
}

export interface Page {
  pageSize?: number
  page?: number
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
  more?: boolean
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface API {
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
export interface ClockArgs {}

export interface ClockReturn {
  serverTime: string
}
export interface GetSequenceContextArgs {}

export interface GetSequenceContextReturn {
  data: SequenceContext
}
export interface GetAuthTokenArgs {
  ewtString: string
  testnetMode?: boolean
}

export interface GetAuthTokenReturn {
  status: boolean
  jwtToken: string
  address: string
  user?: User
}
export interface GetAuthToken2Args {
  ewtString: string
  chainID: string
}

export interface GetAuthToken2Return {
  status: boolean
  jwtToken: string
  address: string
  user?: User
}
export interface SendPasswordlessLinkArgs {
  email: string
  redirectUri: string
  intent: string
}

export interface SendPasswordlessLinkReturn {
  status: boolean
}
export interface FriendListArgs {
  nickname?: string
  page?: Page
}

export interface FriendListReturn {
  page: Page
  friends: Array<Friend>
}
export interface GetFriendByAddressArgs {
  friendAddress: string
}

export interface GetFriendByAddressReturn {
  status: boolean
  friend: Friend
}
export interface SearchFriendsArgs {
  filterUsername: string
  page?: Page
}

export interface SearchFriendsReturn {
  friends: Array<Friend>
}
export interface AddFriendArgs {
  friendAddress: string
  optionalNickname?: string
}

export interface AddFriendReturn {
  status: boolean
  friend?: Friend
}
export interface UpdateFriendNicknameArgs {
  friendAddress: string
  nickname: string
}

export interface UpdateFriendNicknameReturn {
  status: boolean
  friend?: Friend
}
export interface RemoveFriendArgs {
  friendAddress: string
}

export interface RemoveFriendReturn {
  status: boolean
}
export interface ContractCallArgs {
  chainID: string
  contract: string
  inputExpr: string
  outputExpr: string
  args: Array<string>
}

export interface ContractCallReturn {
  returns: Array<string>
}
export interface DecodeContractCallArgs {
  callData: string
}

export interface DecodeContractCallReturn {
  call: ContractCall
}
export interface LookupContractCallSelectorsArgs {
  selectors: Array<string>
}

export interface LookupContractCallSelectorsReturn {
  signatures: Array<Array<string>>
}
export interface UserStorageFetchArgs {
  key: string
}

export interface UserStorageFetchReturn {
  object: any
}
export interface UserStorageSaveArgs {
  key: string
  object: any
}

export interface UserStorageSaveReturn {
  ok: boolean
}
export interface UserStorageDeleteArgs {
  key: string
}

export interface UserStorageDeleteReturn {
  ok: boolean
}
export interface UserStorageFetchAllArgs {
  keys?: Array<string>
}

export interface UserStorageFetchAllReturn {
  objects: { [key: string]: any }
}
export interface GetMoonpayLinkArgs {
  url: string
}

export interface GetMoonpayLinkReturn {
  signedUrl: string
}
export interface GetSardineClientTokenArgs {}

export interface GetSardineClientTokenReturn {
  token: string
}
export interface ResolveENSAddressArgs {
  ens: string
}

export interface ResolveENSAddressReturn {
  address: string
  ok: boolean
}
export interface IsValidSignatureArgs {
  chainId: string
  walletAddress: string
  digest: string
  signature: string
}

export interface IsValidSignatureReturn {
  isValid: boolean
}
export interface IsValidMessageSignatureArgs {
  chainId: string
  walletAddress: string
  message: string
  signature: string
}

export interface IsValidMessageSignatureReturn {
  isValid: boolean
}
export interface IsValidTypedDataSignatureArgs {
  chainId: string
  walletAddress: string
  typedData: any
  signature: string
}

export interface IsValidTypedDataSignatureReturn {
  isValid: boolean
}
export interface IsValidETHAuthProofArgs {
  chainId: string
  walletAddress: string
  ethAuthProofString: string
}

export interface IsValidETHAuthProofReturn {
  isValid: boolean
}
export interface GetCoinPricesArgs {
  tokens: Array<Token>
}

export interface GetCoinPricesReturn {
  tokenPrices: Array<TokenPrice>
}
export interface GetCollectiblePricesArgs {
  tokens: Array<Token>
}

export interface GetCollectiblePricesReturn {
  tokenPrices: Array<TokenPrice>
}
export interface GetExchangeRateArgs {
  toCurrency: string
}

export interface GetExchangeRateReturn {
  exchangeRate: ExchangeRate
}
export interface MemoryStoreArgs {
  key: string
  value: string
}

export interface MemoryStoreReturn {
  ok: boolean
}
export interface MemoryLoadArgs {
  key: string
}

export interface MemoryLoadReturn {
  value: string
}
export interface GetInviteInfoArgs {}

export interface GetInviteInfoReturn {
  inviteInfo: InviteInfo
}
export interface IsValidAccessCodeArgs {
  accessCode: string
}

export interface IsValidAccessCodeReturn {
  status: boolean
}
export interface InternalClaimAccessCodeArgs {
  address: string
  accessCode: string
}

export interface InternalClaimAccessCodeReturn {
  status: boolean
}
export interface BlockNumberAtTimeArgs {
  chainId: number
  timestamps: Array<number>
}

export interface BlockNumberAtTimeReturn {
  blocks: Array<number>
}
export interface PaperSessionSecretArgs {
  chainName: string
  contractAddress: string
  paramsJson: string
  contractType: string
}

export interface PaperSessionSecretReturn {
  secret: string
}
export interface PaperSessionSecret2Args {
  chainName: string
  contractAddress: string
  paramsJson: string
  abi: string
}

export interface PaperSessionSecret2Return {
  secret: string
}
export interface LinkWalletArgs {
  chainId: string
  walletAddress: string
  ethAuthProofString: string
  linkedWalletMessage: string
  linkedWalletSignature: string
}

export interface LinkWalletReturn {
  status: boolean
  linkedWalletAddress: string
}
export interface GetLinkedWalletsArgs {
  walletAddress: string
}

export interface GetLinkedWalletsReturn {
  linkedWallets: Array<string>
}

//
// Client
//
export class API implements API {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/API/'

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
          serverTime: <string>_data.serverTime
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          data: <SequenceContext>_data.data
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          jwtToken: <string>_data.jwtToken,
          address: <string>_data.address,
          user: <User>_data.user
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          jwtToken: <string>_data.jwtToken,
          address: <string>_data.address,
          user: <User>_data.user
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          friends: <Array<Friend>>_data.friends
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          friends: <Array<Friend>>_data.friends
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          friend: <Friend>_data.friend
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          returns: <Array<string>>_data.returns
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          call: <ContractCall>_data.call
        }
      })
  }

  lookupContractCallSelectors = (
    args: LookupContractCallSelectorsArgs,
  ): Promise<LookupContractCallSelectorsReturn> => {
      return buildResponse(res).then(_data => {
        return {
          signatures: <Array<Array<string>>>_data.signatures
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          object: <any>_data.object
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          objects: <{ [key: string]: any }>_data.objects
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          signedUrl: <string>_data.signedUrl
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          token: <string>_data.token
        }
      })
    })
  }

      return buildResponse(res).then(_data => {
        return {
          address: <string>_data.address,
          ok: <boolean>_data.ok
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
  }

  isValidTypedDataSignature = (
    args: IsValidTypedDataSignatureArgs,
  ): Promise<IsValidTypedDataSignatureReturn> => {
      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          isValid: <boolean>_data.isValid
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>_data.tokenPrices
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          tokenPrices: <Array<TokenPrice>>_data.tokenPrices
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          exchangeRate: <ExchangeRate>_data.exchangeRate
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          value: <string>_data.value
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          inviteInfo: <InviteInfo>_data.inviteInfo
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          blocks: <Array<number>>_data.blocks
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          secret: <string>_data.secret
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          secret: <string>_data.secret
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          linkedWalletAddress: <string>_data.linkedWalletAddress
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          linkedWallets: <Array<string>>_data.linkedWallets
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
