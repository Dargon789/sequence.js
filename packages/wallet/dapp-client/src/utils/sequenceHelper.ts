// src/utils/sequenceHelper.ts
import { sequence } from '@0xsequence/provider'
import { ethers } from 'ethers'

export class SequenceBatchService {
  private signer: sequence.WalletSigner

  constructor(signer: sequence.WalletSigner) {
    this.signer = signer
  }

  /**
   * Helper function Approve + Action Atomic Batch
   */
  async executeApproveAndCall(
    tokenAddress: string,
    spender: string,
    approveAmount: ethers.BigNumberish,
    targetContract: string,
    callData: string
  ) {
    const tokenInterface = new ethers.utils.Interface([
      'function approve(address spender, uint256 amount) returns (bool)'
    ])
    
    const dataApprove = tokenInterface.encodeFunctionData('approve', [spender, approveAmount])

    // Call Payload Batch Array
    const txBatch = [
      { to: tokenAddress, data: dataApprove, value: 0 },
      { to: targetContract, data: callData, value: 0 }
    ]

    return await this.signer.sendTransaction(txBatch)
  }
}
