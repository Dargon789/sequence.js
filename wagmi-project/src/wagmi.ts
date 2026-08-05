import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

const walletConnectProjectId = import.meta.env.VITE_WC_PROJECT_ID

if (!walletConnectProjectId) {
  throw new Error(
    'VITE_WC_PROJECT_ID is required for WalletConnect. ' +
      'Set this environment variable (e.g. in a .env file) to enable the WalletConnect connector.',
  )
}

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: walletConnectProjectId }),
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
