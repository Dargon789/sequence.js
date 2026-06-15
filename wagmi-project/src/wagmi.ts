import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

const wcProjectId = import.meta.env.VITE_WC_PROJECT_ID

if (!wcProjectId) {
  // eslint-disable-next-line no-console
  console.warn(
    '[wagmi] VITE_WC_PROJECT_ID is not set; WalletConnect connector will not be registered.'
  )
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    ...(wcProjectId ? [walletConnect({ projectId: wcProjectId })] : []),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
