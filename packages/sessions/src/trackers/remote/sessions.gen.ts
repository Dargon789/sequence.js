/* eslint-disable */
// --
//
// webrpc-gen -schema=sessions.ridl -target=typescript -client -out=./sessions.gen.ts

// WebRPC description and code-gen version
export const WebRPCVersion = 'v1'

// Schema version of your RIDL schema
export const WebRPCSchemaVersion = 'v0.0.1'

// Schema hash generated from your RIDL schema

//
// Types
//

export enum SignatureType {
  EIP712 = 'EIP712',
  EthSign = 'EthSign',
  EIP1271 = 'EIP1271'
}

export interface Context {
  version: number
  factory: string
  mainModule: string
  mainModuleUpgradable: string
  guestModule: string
  walletCreationCode: string
}

export interface Signature {
  digest: string
  toImageHash?: string
  chainID: string
  type: SignatureType
  signature: string
}

export interface ConfigUpdate {
  toImageHash: string
  signature: string
}

export interface Transaction {
  to: string
  value?: string
  data?: string
  gasLimit?: string
  delegateCall?: boolean
  revertOnError?: boolean
}

export interface TransactionBundle {
  executor: string
  transactions: Array<Transaction>
  nonce: string
  signature: string
}

export interface Sessions {
}

export interface PingArgs {}

export interface PingReturn {}
export interface ConfigArgs {
  imageHash: string
}

export interface ConfigReturn {
  version: number
  config: any
}
export interface WalletsArgs {
  signer: string
}

export interface WalletsReturn {
  wallets: { [key: string]: Signature }
}
export interface DeployHashArgs {
  wallet: string
}

export interface DeployHashReturn {
  deployHash: string
  context: Context
}
export interface ConfigUpdatesArgs {
  wallet: string
  fromImageHash: string
  allUpdates?: boolean
}

export interface ConfigUpdatesReturn {
  updates: Array<ConfigUpdate>
}
export interface MigrationsArgs {
  wallet: string
  fromVersion: number
  fromImageHash: string
  chainID?: string
}

export interface MigrationsReturn {
  migrations: { [key: string]: { [key: number]: { [key: string]: TransactionBundle } } }
}
export interface SaveConfigArgs {
  version: number
  config: any
}

export interface SaveConfigReturn {}
export interface SaveWalletArgs {
  version: number
  deployConfig: any
}

export interface SaveWalletReturn {}
export interface SaveSignatureArgs {
  wallet: string
  digest: string
  chainID: string
  signature: string
  toConfig?: any
}

export interface SaveSignatureReturn {}
export interface SaveSignerSignaturesArgs {
  wallet: string
  digest: string
  chainID: string
  signatures: Array<string>
  toConfig?: any
}

export interface SaveSignerSignaturesReturn {}
export interface SaveMigrationArgs {
  wallet: string
  fromVersion: number
  toVersion: number
  toConfig: any
  executor: string
  transactions: Array<Transaction>
  nonce: string
  signature: string
  chainID?: string
}

export interface SaveMigrationReturn {}

//
// Client
//
export class Sessions implements Sessions {
  protected hostname: string
  protected fetch: Fetch
  protected path = '/rpc/Sessions/'

  constructor(hostname: string, fetch: Fetch) {
    this.hostname = hostname
    this.fetch = (input: RequestInfo, init?: RequestInit) => fetch(input, init)
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

      return buildResponse(res).then(_data => {
        return {}
      })
  }

      return buildResponse(res).then(_data => {
        return {
          version: <number>_data.version,
          config: <any>_data.config
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          wallets: <{ [key: string]: Signature }>_data.wallets
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          deployHash: <string>_data.deployHash,
          context: <Context>_data.context
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          updates: <Array<ConfigUpdate>>_data.updates
        }
      })
  }

      return buildResponse(res).then(_data => {
        return {
          migrations: <{ [key: string]: { [key: number]: { [key: string]: TransactionBundle } } }>_data.migrations
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
        return {}
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
