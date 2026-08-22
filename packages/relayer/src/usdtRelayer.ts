import { SequenceUtils } from '@0xsequence/all'
import { ethers } from 'ethers'

// Address USDT on BSC Mainnet
const USDT_BSC_ADDRESS = '0x55d398326f99059fF775485246999027B3197955'

const usdtAbi = [
  'function transfer(address to, uint256 value) returns (bool)'
]

/**
 * Helper Sequence Smart Account  transfer  Relayer
 */
export async function executeUsdtTransferViaRelayer(
  sequenceWallet: any,
  recipientEOA: string,
  amountInUnits: string //  "100" USDT
) {
  try {
    const amount = ethers.utils.parseUnits(amountInUnits, 18)
    const usdtInterface = new ethers.utils.Interface(usdtAbi)
    
    // Encode  transfer
    const calldata = usdtInterface.encodeFunctionData('transfer', [
      recipientEOA,
      amount
    ])

    // Relayer / Wallet Session
    const tx = await sequenceWallet.sendTransaction({
      to: USDT_BSC_ADDRESS,
      data: calldata,
      value: 0
    })

    console.log('[Relayer Success] Tx Hash:', tx.hash)
    return tx.hash
  } catch (error) {
    console.error('[Relayer Error] Failed to execute USDT transfer:', error)
    throw error
  }
}
