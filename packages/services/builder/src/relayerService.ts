// src/services/relayerService.ts
import { SequenceUtils } from '@0xsequence/all'
import { sequenceConfig } from '../config'

export async function initSequenceRelayerWallet() {
  // Key GitHub Secrets / Environment Variables 
  const sequenceWallet = await SequenceUtils.getWallet({
    projectAccessKey: sequenceConfig.projectAccessKey,
    waasConfigKey: sequenceConfig.waasConfigKey,
    network: sequenceConfig.network
  })

  return sequenceWallet
}
