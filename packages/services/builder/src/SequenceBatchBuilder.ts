import { sequence } from '@0xsequence/provider'
import { ethers } from 'ethers'
import { BatchCall, ERC20ApproveParams, ERC20TransferParams } from './types'

export class SequenceBatchBuilder {
  private signer: sequence.WalletSigner
  private queue: BatchCall[] = []

  private static erc20Interface = new ethers.utils.Interface([
    'function approve(address spender, uint256 amount) returns (bool)',
    'function transfer(address to, uint256 amount) returns (bool)'
  ])

  constructor(signer: sequence.WalletSigner) {
    this.signer = signer
  }

  /**
   * clean Queue 
   */
  public clear(): this {
    this.queue = []
    return this
  }

  /**
   * add Custom Contract Call in Batch Queue
   */
  public addCall(call: BatchCall): this {
    this.queue.push({
      to: call.to,
      data: call.data || '0x',
      value: call.value || 0
    })
    return this
  }

  /**
   * add Approve token ERC-20/BEP-20
   */
  public addERC20Approve(params: ERC20ApproveParams): this {
    const data = SequenceBatchBuilder.erc20Interface.encodeFunctionData('approve', [
      params.spender,
      params.amount
    ])
    return this.addCall({ to: params.tokenAddress, data, value: 0 })
  }

  /**
   * add Transfer token ERC-20/BEP-20
   */
  public addERC20Transfer(params: ERC20TransferParams): this {
    const data = SequenceBatchBuilder.erc20Interface.encodeFunctionData('transfer', [
      params.recipient,
      params.amount
    ])
    return this.addCall({ to: params.tokenAddress, data, value: 0 })
  }

  /**
   * pull list Calldata Queue all (Simulate on Tenderly/Phalcon)
   */
  public getBatchQueue(): BatchCall[] {
    return [...this.queue]
  }

  /**
   * sent Execute Batch Sequence Relayer
   */
  public async execute(): Promise<ethers.providers.TransactionResponse> {
    if (this.queue.length === 0) {
      throw new Error('Batch Queue is empty. Add at least one transaction before executing.')
    }

    console.log(`Executing batch of ${this.queue.length} transactions...`)
    
    // Sequence Signer  Array on Transaction Payload 
    const tx = await this.signer.sendTransaction(this.queue)
    
    // Clear queue 
    this.clear()
    return tx
  }
}
