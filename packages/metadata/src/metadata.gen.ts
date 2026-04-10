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

export enum ContractType {
  UNKNOWN = 'UNKNOWN',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155'
}
export enum PropertyType {
  INT = 'INT',
  STRING = 'STRING',
  ARRAY = 'ARRAY',
  GENERIC = 'GENERIC'
}
export enum SwapType {
  UNKNOWN = 'UNKNOWN',
  BUY = 'BUY',
  SELL = 'SELL'
}
export enum TaskStatus {
  PENDING = 'PENDING',
  PAUSED = 'PAUSED',
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
  DISABLED = 'DISABLED'
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
}

export interface RuntimeChecks {}

export interface ContractIndex {
  collectionId?: number
  chainId: number
  address: string
  type: ContractType
  metadata: { [key: string]: any }
  contentHash: number
  deployed: boolean
  bytecodeHash: string
  notFound: boolean
  updatedAt: string
}

export interface TokenIndex {
  key: string
  chainId: number
  contractAddress: string
  tokenId: string
  metadata: { [key: string]: any }
  notFound?: boolean
  lastFetched?: string
  fetchCount?: number
  updatedAt: string
}

export interface ContractInfo {
  chainId: number
  address: string
  name: string
  type: string
  symbol: string
  decimals?: number
  logoURI: string
  deployed: boolean
  bytecodeHash: string
  extensions: ContractInfoExtensions
  updatedAt: string
}

export interface ContractInfoExtensions {
  link: string
  description: string
  ogImage: string
  originChainId: number
  originAddress: string
  blacklist: boolean
  verified: boolean
  verifiedBy: string
}

export interface TokenMetadata {
  tokenId: string
  name: string
  description?: string
  image?: string
  video?: string
  audio?: string
  properties?: { [key: string]: any }
  attributes: Array<{ [key: string]: any }>
  image_data?: string
  external_url?: string
  background_color?: string
  animation_url?: string
  decimals?: number
  updatedAt?: string
  assets?: Array<Asset>
}

export interface PropertyFilter {
  name: string
  type: PropertyType
  min?: number
  max?: number
  values?: Array<any>
}

export interface Filter {
  text?: string
  properties?: Array<PropertyFilter>
}

export interface Collection {
  id: number
  projectId: number
  metadata: CollectionMetadata
  private: boolean
  revealKey?: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
  baseURIs?: CollectionBaseURIs
}

export interface CollectionMetadata {
  name: string
  description?: string
  image?: string
  external_link?: string
  properties?: { [key: string]: any }
  attributes?: Array<{ [key: string]: any }>
}

export interface CollectionBaseURIs {
  contractMetadataURI: string
  tokenMetadataURI: string
}

export interface Asset {
  id: number
  collectionId: number
  url?: string
  metadataField: string
  name?: string
  filesize?: number
  mimeType?: string
  width?: number
  height?: number
  updatedAt?: string
}

export interface Token {
  collectionId: number
  tokenId: string
  metadata: TokenMetadata
  private: boolean
  updatedAt?: string
}

export interface GetNiftyswapUnitPricesRequest {
  swapType: SwapType
  ids: Array<string>
  amounts: Array<string>
}

export interface GetNiftyswapUnitPricesResponse {
  unitPrice: string
  unitAmount: string
  availableAmount: string
}

export interface Page {
  page?: number
  column?: string
  before?: any
  after?: any
  pageSize?: number
  more?: boolean
}

export interface TaskRunner {
  id: number
  workGroup: string
  runAt: string
}

export interface Task {
  id: number
  queue: string
  try: number
  runAt?: string
  lastRanAt?: string
  createdAt?: string
  payload: Array<string>
  hash?: string
}

export interface Metadata {
  getNiftyswapUnitPricesWithQuantities(
    args: GetNiftyswapUnitPricesWithQuantitiesArgs,
  ): Promise<GetNiftyswapUnitPricesWithQuantitiesReturn>
  removeContractFromMintMonitor(
    args: RemoveContractFromMintMonitorArgs,
  ): Promise<RemoveContractFromMintMonitorReturn>
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
export interface GetTokenMetadataArgs {
  chainID: string
  contractAddress: string
  tokenIDs: Array<string>
}

export interface GetTokenMetadataReturn {
  tokenMetadata: Array<TokenMetadata>
}
export interface RefreshTokenMetadataArgs {
  chainID: string
  contractAddress: string
  tokenIDs?: Array<string>
  refreshAll?: boolean
}

export interface RefreshTokenMetadataReturn {
  taskId: number
}
export interface EnqueueTokensForRefreshArgs {
  chainID: string
  contractAddress: string
  tokenIDs?: Array<string>
  refreshAll?: boolean
}

export interface EnqueueTokensForRefreshReturn {
  taskId: number
}
export interface GetTokenRefreshStatusArgs {
  taskId: number
}

export interface GetTokenRefreshStatusReturn {
}
export interface GetTokenRefreshResultArgs {
  taskId: number
}

export interface GetTokenRefreshResultReturn {
  tokens: { [key: string]: boolean }
  failureReasons: { [key: string]: string }
}
export interface CancelRefreshJobArgs {
  taskId: number
}

export interface CancelRefreshJobReturn {
  ok: boolean
}
export interface GetTokenMetadataBatchArgs {
  chainID: string
  contractTokenMap: { [key: string]: Array<string> }
}

export interface GetTokenMetadataBatchReturn {
  contractTokenMetadata: { [key: string]: Array<TokenMetadata> }
}
export interface SearchTokenMetadataArgs {
  chainID: string
  contractAddress: string
  filter: Filter
  page?: Page
}

export interface SearchTokenMetadataReturn {
  page: Page
  tokenMetadata: Array<TokenMetadata>
}
export interface SearchTokenIDsArgs {
  chainID: string
  contractAddress: string
  filter: Filter
  page?: Page
}

export interface SearchTokenIDsReturn {
  page: Page
  tokenIds: Array<string>
}
export interface TokenCollectionFiltersArgs {
  chainID: string
  contractAddress: string
}

export interface TokenCollectionFiltersReturn {
  filters: Array<PropertyFilter>
}
export interface GetContractInfoArgs {
  chainID: string
  contractAddress: string
}

export interface GetContractInfoReturn {
  contractInfo: ContractInfo
}
export interface GetContractInfoBatchArgs {
  chainID: string
  contractAddresses: Array<string>
}

export interface GetContractInfoBatchReturn {
  contractInfoMap: { [key: string]: ContractInfo }
}
export interface SearchContractInfoArgs {
  contractAddress: string
}

export interface SearchContractInfoReturn {
  contractInfoList: Array<ContractInfo>
}
export interface SearchContractInfoBatchArgs {
  contractAddresses: Array<string>
}

export interface SearchContractInfoBatchReturn {
  contractInfoByChain: { [key: string]: Array<ContractInfo> }
}
export interface SearchMetadataArgs {
  filter: string
  chainID?: string
  types?: Array<ContractType>
  excludeTokenMetadata?: boolean
}

export interface SearchMetadataReturn {
  tokenMetadata: Array<TokenMetadata>
  contractInfo: Array<ContractInfo>
}
export interface GetNiftyswapTokenQuantityArgs {
  chainID: string
  contractAddress: string
  tokenIDs: Array<string>
}

export interface GetNiftyswapTokenQuantityReturn {
  quantity: { [key: string]: string }
}
export interface GetNiftyswapUnitPricesArgs {
  chainID: string
  contractAddress: string
  req: GetNiftyswapUnitPricesRequest
  fresh: boolean
}

export interface GetNiftyswapUnitPricesReturn {
  prices: { [key: string]: string }
}
export interface GetNiftyswapUnitPricesWithQuantitiesArgs {
  chainID: string
  contractAddress: string
  req: GetNiftyswapUnitPricesRequest
  fresh: boolean
}

export interface GetNiftyswapUnitPricesWithQuantitiesReturn {
  prices: { [key: string]: GetNiftyswapUnitPricesResponse }
}
export interface AddContractToMintMonitorArgs {
  chainID: string
  contractAddress: string
}

export interface AddContractToMintMonitorReturn {
  ok: boolean
}
export interface RemoveContractFromMintMonitorArgs {
  chainID: string
  contractAddress: string
}

export interface RemoveContractFromMintMonitorReturn {
  ok: boolean
}
export interface MintMonitorJobStatusArgs {
  chainID: string
  contractAddress: string
}

export interface MintMonitorJobStatusReturn {
  task: Task
}
export interface MintMonitorTriggerJobArgs {
  chainID: string
  contractAddress: string
}

export interface MintMonitorTriggerJobReturn {
  ok: boolean
}

export interface Collections {
}

export interface CreateCollectionArgs {
  projectId?: number
  collection: Collection
}

export interface CreateCollectionReturn {
  collection: Collection
}
export interface GetCollectionArgs {
  projectId?: number
  collectionId: number
}

export interface GetCollectionReturn {
  collection: Collection
}
export interface ListCollectionsArgs {
  projectId?: number
  page?: Page
}

export interface ListCollectionsReturn {
  page: Page
  collections: Array<Collection>
}
export interface UpdateCollectionArgs {
  projectId?: number
  collection: Collection
}

export interface UpdateCollectionReturn {
  collection: Collection
}
export interface DeleteCollectionArgs {
  projectId?: number
  collectionId: number
}

export interface DeleteCollectionReturn {
  status: boolean
}
export interface PublishCollectionArgs {
  projectId?: number
  collectionId: number
}

export interface PublishCollectionReturn {
  collection: Collection
}
export interface UnpublishCollectionArgs {
  projectId?: number
  collectionId: number
}

export interface UnpublishCollectionReturn {
  collection: Collection
}
export interface CreateTokenArgs {
  projectId?: number
  collectionId: number
  token: TokenMetadata
  private?: boolean
}

export interface CreateTokenReturn {
  token: TokenMetadata
  assets: Array<Asset>
}
export interface GetTokenArgs {
  projectId?: number
  collectionId: number
  tokenId: string
}

export interface GetTokenReturn {
  token: TokenMetadata
  assets: Array<Asset>
}
export interface ListTokensArgs {
  projectId?: number
  collectionId: number
  page?: Page
}

export interface ListTokensReturn {
  page: Page
  tokens: Array<TokenMetadata>
}
export interface UpdateTokenArgs {
  projectId?: number
  collectionId: number
  tokenId: string
  token: TokenMetadata
  private?: boolean
}

export interface UpdateTokenReturn {
  token: TokenMetadata
}
export interface DeleteTokenArgs {
  projectId?: number
  collectionId: number
  tokenId: string
}

export interface DeleteTokenReturn {
  status: boolean
}
export interface CreateAssetArgs {
  projectId?: number
  asset: Asset
}

export interface CreateAssetReturn {
  asset: Asset
}
export interface GetAssetArgs {
  projectId?: number
  assetId: number
}

export interface GetAssetReturn {
  asset: Asset
}
export interface UpdateAssetArgs {
  projectId?: number
  asset: Asset
}

export interface UpdateAssetReturn {
  asset: Asset
}
export interface DeleteAssetArgs {
  projectId?: number
  assetId: number
}

export interface DeleteAssetReturn {
  status: boolean
}

//
// Client
//
export class Metadata implements Metadata {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Metadata/'

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
          tokenMetadata: <Array<TokenMetadata>>_data.tokenMetadata
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          taskId: <number>_data.taskId
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          taskId: <number>_data.taskId
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <TaskStatus>_data.status
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <TaskStatus>_data.status,
          tokens: <{ [key: string]: boolean }>_data.tokens,
          failureReasons: <{ [key: string]: string }>_data.failureReasons
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
          contractTokenMetadata: <{ [key: string]: Array<TokenMetadata> }>_data.contractTokenMetadata
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          tokenMetadata: <Array<TokenMetadata>>_data.tokenMetadata
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          tokenIds: <Array<string>>_data.tokenIds
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          filters: <Array<PropertyFilter>>_data.filters
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          contractInfo: <ContractInfo>_data.contractInfo
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          contractInfoMap: <{ [key: string]: ContractInfo }>_data.contractInfoMap
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          contractInfoList: <Array<ContractInfo>>_data.contractInfoList
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          contractInfoByChain: <{ [key: string]: Array<ContractInfo> }>_data.contractInfoByChain
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          tokenMetadata: <Array<TokenMetadata>>_data.tokenMetadata,
          contractInfo: <Array<ContractInfo>>_data.contractInfo
        }
      })
    })
  }

  getNiftyswapTokenQuantity = (
    args: GetNiftyswapTokenQuantityArgs,
  ): Promise<GetNiftyswapTokenQuantityReturn> => {
      return buildResponse(res).then(_data => {
        return {
          quantity: <{ [key: string]: string }>_data.quantity
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          prices: <{ [key: string]: string }>_data.prices
        }
      })
  }

  getNiftyswapUnitPricesWithQuantities = (
    args: GetNiftyswapUnitPricesWithQuantitiesArgs,
  ): Promise<GetNiftyswapUnitPricesWithQuantitiesReturn> => {
      return buildResponse(res).then(_data => {
        return {
          prices: <{ [key: string]: GetNiftyswapUnitPricesResponse }>_data.prices
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
  }

  removeContractFromMintMonitor = (
    args: RemoveContractFromMintMonitorArgs,
  ): Promise<RemoveContractFromMintMonitorReturn> => {
      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          task: <Task>_data.task
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          ok: <boolean>_data.ok
        }
      })
    })
  }
}

export class Collections implements Collections {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Collections/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

      return buildResponse(res).then(_data => {
        return {
          collection: <Collection>_data.collection
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          collection: <Collection>_data.collection
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          collections: <Array<Collection>>_data.collections
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          collection: <Collection>_data.collection
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
          collection: <Collection>_data.collection
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          collection: <Collection>_data.collection
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          token: <TokenMetadata>_data.token,
          assets: <Array<Asset>>_data.assets
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          token: <TokenMetadata>_data.token,
          assets: <Array<Asset>>_data.assets
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          tokens: <Array<TokenMetadata>>_data.tokens
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          token: <TokenMetadata>_data.token
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
          asset: <Asset>_data.asset
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          asset: <Asset>_data.asset
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          asset: <Asset>_data.asset
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status
        }
      })
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
