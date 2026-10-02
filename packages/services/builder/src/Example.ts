import { sequence } from '@0xsequence/provider'
import { ethers } from 'ethers'
import { SequenceBatchBuilder } from './services/sequence/SequenceBatchBuilder'

async function runExample() {
  const wallet = await sequence.initWallet('mainnet')
  const signer = wallet.getSigner(56) // BSC Chain ID: 56

  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const dexRouter = '0x1111111254fb6c44bac0bed2854e76f90643097d'
  const recipient = '0x9a72807e1BC8A5e1E178f51E26239d58F511EB3D'

  // Initialize Helper
  const batchBuilder = new SequenceBatchBuilder(signer)

  // batchBuilder (Chainable)
  batchBuilder
    .addERC20Approve({
      tokenAddress: busdAddress,
      spender: dexRouter,
      amount: ethers.utils.parseUnits('100.0', 18)
    })
    .addERC20Transfer({
      tokenAddress: busdAddress,
      recipient: recipient,
      amount: ethers.utils.parseUnits('50.0', 18)
    })

  //  (Optional) pull Payload out Simulate on Tenderly 
  const payloadForSimulation = batchBuilder.getBatchQueue()
  console.log('Payload for Simulation:', JSON.stringify(payloadForSimulation, null, 2))

  // 3. sent Execute 
  try {
    const tx = await batchBuilder.execute()
    console.log('Batch Transaction Submitted! Tx Hash:', tx.hash)

    const receipt = await tx.wait()
    console.log('✅ Success in Block:', receipt.blockNumber)
  } catch (error) {
    console.error('❌ Batch Execution Failed:', error)
  }
}
