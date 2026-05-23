import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

const wcProjectId = import.meta.env.VITE_WC_PROJECT_ID

if (!wcProjectId) {
  // Prefer failing fast with a clear error over opaque runtime connector failures.
  // If you would rather not throw, replace this with a console.warn and keep the
  // conditional connector initialization below.
  console.warn(
    '[wagmi] WalletConnect projectId (VITE_WC_PROJECT_ID) is missing. ' +
      'WalletConnect connector will not be initialized.'
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
