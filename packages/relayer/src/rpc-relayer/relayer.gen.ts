/* eslint-disable */
// --
//

// WebRPC description and code-gen version
export const WebRPCVersion = 'v1'

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = 'v0.4.1'

// Schema hash generated from your RIDL schema

//
// Types
//

export enum ETHTxnStatus {
  UNKNOWN = 'UNKNOWN',
  DROPPED = 'DROPPED',
  QUEUED = 'QUEUED',
  SENT = 'SENT',
  SUCCEEDED = 'SUCCEEDED',
  PARTIALLY_FAILED = 'PARTIALLY_FAILED',
  FAILED = 'FAILED'
}
export enum TransferType {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
  BRIDGE_DEPOSIT = 'BRIDGE_DEPOSIT',
  BRIDGE_WITHDRAW = 'BRIDGE_WITHDRAW',
  BURN = 'BURN',
  UNKNOWN = 'UNKNOWN'
}
export enum FeeTokenType {
  UNKNOWN = 'UNKNOWN',
  ERC20_TOKEN = 'ERC20_TOKEN',
  ERC1155_TOKEN = 'ERC1155_TOKEN'
}
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
  senders: Array<SenderStatus>
  checks: RuntimeChecks
  numTxnsRelayed: NumTxnsRelayed
}

export interface SenderStatus {
  index: number
  address: string
  etherBalance: number
  active: boolean
}

export interface RuntimeChecks {}

export interface NumTxnsRelayed {
  prev: number
  current: number
  period: number
}

export interface SequenceContext {
  factory: string
  mainModule: string
  mainModuleUpgradable: string
  guestModule: string
  utils: string
}

export interface GasTank {
  id: number
  name: string
  currentBalance: number
  unlimited: boolean
  feeMarkupFactor: number
  updatedAt: string
  createdAt: string
}

export interface GasTankBalanceAdjustment {
  gasTankId: number
  nonce: number
  amount: number
  totalBalance: number
  balanceTimestamp: string
  createdAt: string
}

export interface GasSponsor {
  id: number
  gasTankId: number
  projectId: number
  address: string
  name: string
  active: boolean
  updatedAt: string
  createdAt: string
  deletedAt: string
}

export interface GasSponsorUsage {
  name: string
  id: number
  totalGasUsed: number
  totalTxnFees: number
  totalTxnFeesUsd: number
  avgGasPrice: number
  totalTxns: number
  startTime: string
  endTime: string
}

export interface MetaTxn {
  walletAddress: string
  contract: string
  input: string
}

export interface MetaTxnLog {
  id: number
  projectId: number
  txnHash: string
  txnNonce: string
  metaTxnID?: string
  txnStatus: ETHTxnStatus
  txnRevertReason: string
  requeues: number
  queuedAt: string
  sentAt: string
  minedAt: string
  target: string
  input: string
  txnArgs: { [key: string]: any }
  txnReceipt?: { [key: string]: any }
  walletAddress: string
  metaTxnNonce: string
  gasLimit: number
  gasPrice: string
  gasUsed: number
  gasEstimated: number
  gasFeeMarkup?: number
  usdRate: string
  creditsUsed: number
  isWhitelisted: boolean
  gasSponsor?: number
  gasTank?: number
  updatedAt: string
  createdAt: string
}

export interface MetaTxnEntry {
  id: number
  metaTxnID: string
  txnStatus: ETHTxnStatus
  txnRevertReason: string
  index: number
  logs?: Array<any>
  updatedAt: string
  createdAt: string
}

export interface MetaTxnReceipt {
  id: string
  status: string
  revertReason?: string
  index: number
  logs: Array<MetaTxnReceiptLog>
  receipts: Array<MetaTxnReceipt>
  txnReceipt: string
}

export interface MetaTxnReceiptLog {
  address: string
  topics: Array<string>
  data: string
}

export interface Transaction {
  txnHash?: string
  blockNumber: number
  chainId: number
  metaTxnID?: string
  transfers?: Array<TxnLogTransfer>
  users?: { [key: string]: TxnLogUser }
  timestamp: string
}

export interface TxnLogUser {
  username: string
}

export interface TxnLogTransfer {
  transferType: TransferType
  contractAddress: string
  from: string
  to: string
  ids: Array<string>
  amounts: Array<string>
}

export interface SentTransactionsFilter {
  pending?: boolean
  failed?: boolean
}

export interface SimulateResult {
  executed: boolean
  succeeded: boolean
  result?: string
  reason?: string
  gasUsed: number
  gasLimit: number
}

export interface FeeOption {
  token: FeeToken
  to: string
  value: string
  gasLimit: number
}

export interface FeeToken {
  chainId: number
  name: string
  symbol: string
  type: FeeTokenType
  decimals?: number
  logoURL: string
  contractAddress?: string
  tokenID?: string
}

export interface Page {
  pageSize?: number
  page?: number
  more?: boolean
  totalRecords?: number
  column?: string
  before?: any
  after?: any
  sort?: Array<SortBy>
}

export interface SortBy {
  column: string
  order: SortOrder
}

export interface Relayer {
  nextGasTankBalanceAdjustmentNonce(
    args: NextGasTankBalanceAdjustmentNonceArgs,
  ): Promise<NextGasTankBalanceAdjustmentNonceReturn>
  listGasTankBalanceAdjustments(
    args: ListGasTankBalanceAdjustmentsArgs,
  ): Promise<ListGasTankBalanceAdjustmentsReturn>
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
export interface GetSequenceContextArgs {}

export interface GetSequenceContextReturn {
  data: SequenceContext
}
export interface GetChainIDArgs {}

export interface GetChainIDReturn {
  chainID: number
}
export interface SendMetaTxnArgs {
  call: MetaTxn
  quote?: string
}

export interface SendMetaTxnReturn {
  status: boolean
  txnHash: string
}
export interface GetMetaTxnNonceArgs {
  walletContractAddress: string
  space?: string
}

export interface GetMetaTxnNonceReturn {
  nonce: string
}
export interface GetMetaTxnReceiptArgs {
  metaTxID: string
}

export interface GetMetaTxnReceiptReturn {
  receipt: MetaTxnReceipt
}
export interface SimulateArgs {
  wallet: string
  transactions: string
}

export interface SimulateReturn {
  results: Array<SimulateResult>
}
export interface UpdateMetaTxnGasLimitsArgs {
  walletAddress: string
  walletConfig: any
  payload: string
}

export interface UpdateMetaTxnGasLimitsReturn {
  payload: string
}
export interface FeeTokensArgs {}

export interface FeeTokensReturn {
  isFeeRequired: boolean
  tokens: Array<FeeToken>
}
export interface FeeOptionsArgs {
  wallet: string
  to: string
  data: string
  simulate?: boolean
}

export interface FeeOptionsReturn {
  options: Array<FeeOption>
  sponsored: boolean
  quote?: string
}
export interface GetMetaTxnNetworkFeeOptionsArgs {
  walletConfig: any
  payload: string
}

export interface GetMetaTxnNetworkFeeOptionsReturn {
  options: Array<FeeOption>
}
export interface GetMetaTransactionsArgs {
  projectId: number
  gasTankId: number
  page?: Page
}

export interface GetMetaTransactionsReturn {
  page: Page
  transactions: Array<MetaTxnLog>
}
export interface SentTransactionsArgs {
  filter?: SentTransactionsFilter
  page?: Page
}

export interface SentTransactionsReturn {
  page: Page
  transactions: Array<Transaction>
}
export interface PendingTransactionsArgs {
  page?: Page
}

export interface PendingTransactionsReturn {
  page: Page
  transactions: Array<Transaction>
}
export interface GetGasTankArgs {
  id: number
}

export interface GetGasTankReturn {
  gasTank: GasTank
}
export interface AddGasTankArgs {
  name: string
  feeMarkupFactor: number
  unlimited?: boolean
}

export interface AddGasTankReturn {
  status: boolean
  gasTank: GasTank
}
export interface UpdateGasTankArgs {
  id: number
  name?: string
  feeMarkupFactor?: number
  unlimited?: boolean
}

export interface UpdateGasTankReturn {
  status: boolean
  gasTank: GasTank
}
export interface GetGasSponsorArgs {
  id: number
}

export interface GetGasSponsorReturn {
  gasSponsor: GasSponsor
}
export interface ListGasSponsorsArgs {
  projectId: number
  gasTankId: number
  page?: Page
}

export interface ListGasSponsorsReturn {
  page: Page
  gasSponsors: Array<GasSponsor>
}
export interface AddGasSponsorArgs {
  projectId: number
  gasTankId: number
  address: string
  name?: string
  active?: boolean
}

export interface AddGasSponsorReturn {
  status: boolean
  gasSponsor: GasSponsor
}
export interface UpdateGasSponsorArgs {
  id: number
  name?: string
  active?: boolean
}

export interface UpdateGasSponsorReturn {
  status: boolean
  gasSponsor: GasSponsor
}
export interface RemoveGasSponsorArgs {
  id: number
}

export interface RemoveGasSponsorReturn {
  status: boolean
}
export interface ReportGasSponsorUsageArgs {
  projectId: number
  gasTankId: number
  startTime?: string
  endTime?: string
}

export interface ReportGasSponsorUsageReturn {
  gasSponsorUsage: Array<GasSponsorUsage>
}
export interface NextGasTankBalanceAdjustmentNonceArgs {
  id: number
}

export interface NextGasTankBalanceAdjustmentNonceReturn {
  nonce: number
}
export interface AdjustGasTankBalanceArgs {
  id: number
  nonce: number
  amount: number
}

export interface AdjustGasTankBalanceReturn {
  status: boolean
  adjustment: GasTankBalanceAdjustment
}
export interface GetGasTankBalanceAdjustmentArgs {
  id: number
  nonce: number
}

export interface GetGasTankBalanceAdjustmentReturn {
  adjustment: GasTankBalanceAdjustment
}
export interface ListGasTankBalanceAdjustmentsArgs {
  id: number
  page?: Page
}

export interface ListGasTankBalanceAdjustmentsReturn {
  page: Page
  adjustments: Array<GasTankBalanceAdjustment>
}

//
// Client
//
export class Relayer implements Relayer {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Relayer/'

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
          data: <SequenceContext>_data.data
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          chainID: <number>_data.chainID
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          txnHash: <string>_data.txnHash
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          nonce: <string>_data.nonce
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          receipt: <MetaTxnReceipt>_data.receipt
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          results: <Array<SimulateResult>>_data.results
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          payload: <string>_data.payload
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          isFeeRequired: <boolean>_data.isFeeRequired,
          tokens: <Array<FeeToken>>_data.tokens
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          options: <Array<FeeOption>>_data.options,
          sponsored: <boolean>_data.sponsored,
          quote: <string>_data.quote
        }
      })
  }

  getMetaTxnNetworkFeeOptions = (
    args: GetMetaTxnNetworkFeeOptionsArgs,
  ): Promise<GetMetaTxnNetworkFeeOptionsReturn> => {
      return buildResponse(res).then(_data => {
        return {
          options: <Array<FeeOption>>_data.options
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          transactions: <Array<MetaTxnLog>>_data.transactions
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          transactions: <Array<Transaction>>_data.transactions
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          transactions: <Array<Transaction>>_data.transactions
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          gasTank: <GasTank>_data.gasTank
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          gasTank: <GasTank>_data.gasTank
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          gasTank: <GasTank>_data.gasTank
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          gasSponsor: <GasSponsor>_data.gasSponsor
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          gasSponsors: <Array<GasSponsor>>_data.gasSponsors
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          gasSponsor: <GasSponsor>_data.gasSponsor
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          gasSponsor: <GasSponsor>_data.gasSponsor
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
          gasSponsorUsage: <Array<GasSponsorUsage>>_data.gasSponsorUsage
        }
      })
  }

  nextGasTankBalanceAdjustmentNonce = (
    args: NextGasTankBalanceAdjustmentNonceArgs,
  ): Promise<NextGasTankBalanceAdjustmentNonceReturn> => {
      return buildResponse(res).then(_data => {
        return {
          nonce: <number>_data.nonce
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          status: <boolean>_data.status,
          adjustment: <GasTankBalanceAdjustment>_data.adjustment
        }
      })
  }

  getGasTankBalanceAdjustment = (
    args: GetGasTankBalanceAdjustmentArgs,
  ): Promise<GetGasTankBalanceAdjustmentReturn> => {
      return buildResponse(res).then(_data => {
        return {
          adjustment: <GasTankBalanceAdjustment>_data.adjustment
        }
      })
  }

  listGasTankBalanceAdjustments = (
    args: ListGasTankBalanceAdjustmentsArgs,
  ): Promise<ListGasTankBalanceAdjustmentsReturn> => {
      return buildResponse(res).then(_data => {
        return {
          page: <Page>_data.page,
          adjustments: <Array<GasTankBalanceAdjustment>>_data.adjustments
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
