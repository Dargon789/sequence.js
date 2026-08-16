import { BigNumberish, BytesLike } from 'ethers'

export interface BatchCall {
  to: string
  data: BytesLike
  value?: BigNumberish
}

export interface ERC20ApproveParams {
  tokenAddress: string
  spender: string
  amount: BigNumberish
}

export interface ERC20TransferParams {
  tokenAddress: string
  recipient: string
  amount: BigNumberish
}
