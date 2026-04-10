import { BigNumberish, ethers, providers } from 'ethers'
import { Indexer } from '@0xsequence/indexer'
import { Relayer, RpcRelayerOptions } from '@0xsequence/relayer'
import { findNetworkConfig, stringTemplate, validateAndSortNetworks } from './utils'
import { isBigNumberish } from '@0xsequence/utils'
import { ChainId, NetworkMetadata, networks } from './constants'

export type NetworkConfig = NetworkMetadata & {
  rpcUrl: string
  provider?: providers.Provider
  indexerUrl?: string
  indexer?: Indexer
  relayer?: Relayer | RpcRelayerOptions

  // isDefaultChain identifies the default network. For example, a dapp may run on the Polygon
  // network and may configure the wallet to use it as its main/default chain.
  isDefaultChain?: boolean

  // Disabled / deprecated chain
  disabled?: boolean
}

type LegacyNetworkConfig = NetworkConfig & { isAuthChain?: boolean }

export const indexerURL = (network: string) => stringTemplate('https://${network}-indexer.sequence.app', { network })
export const relayerURL = (network: string) => stringTemplate('https://${network}-relayer.sequence.app', { network })
export const nodesURL = (network: string) => stringTemplate('https://nodes.sequence.app/${network}', { network })

export function findSupportedNetwork(chainIdOrName: string | ChainIdLike): NetworkConfig | undefined {
  return findNetworkConfig(allNetworks, chainIdOrName)
}

export type ChainIdLike = NetworkConfig | BigNumberish

export function toChainIdNumber(chainIdLike: ChainIdLike): ethers.BigNumber {
  if (ethers.BigNumber.isBigNumber(chainIdLike)) {
    return chainIdLike
  }

  if (isBigNumberish(chainIdLike)) {
    return ethers.BigNumber.from(chainIdLike)
  }

  return ethers.BigNumber.from(chainIdLike.chainId)
}

  return {
    rpcUrl,
    relayer: {
      provider: {
        url: rpcUrl
      }
    },
  }
}

  {
    ...networks[ChainId.HARDHAT],
    rpcUrl: 'http://localhost:8545',
    relayer: {
      url: 'http://localhost:3000',
      provider: {
        url: 'http://localhost:8545'
      }
    }
  },
  {
    ...networks[ChainId.HARDHAT_2],
    rpcUrl: 'http://localhost:9545',
    relayer: {
      url: 'http://localhost:3000',
      provider: {
        url: 'http://localhost:9545'
      }
    }
  }
])
