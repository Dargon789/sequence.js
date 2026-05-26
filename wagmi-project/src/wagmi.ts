import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

const wcProjectId = import.meta.env.VITE_WC_PROJECT_ID

if (!wcProjectId) {
  // Fail fast with a clear error instead of an opaque runtime failure inside walletConnect
  throw new Error(
    'VITE_WC_PROJECT_ID is not set. Please define it in your environment to enable WalletConnect.',
  )
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: wcProjectId }),
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
