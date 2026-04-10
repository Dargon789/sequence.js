import { ethers } from 'ethers'
import { Intent, makeIntent } from './base'

interface BaseArgs {
  lifespan: number
  wallet: string
  chainId: number
}

export type SignMessageArgs = {
  message: string
}

export function signMessage({ wallet, chainId, message, lifespan }: SignMessageArgs & BaseArgs): Intent<IntentDataSignMessage> {
    wallet,
    network: chainId.toString(),
    message: message.startsWith('0x') ? message : ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
  })
}
