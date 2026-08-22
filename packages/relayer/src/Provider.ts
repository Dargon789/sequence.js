// use Sequence SDK Context Signer Smart Account
import { SequenceUtils } from '@0xsequence/all'
import { ethers } from 'ethers'

const recipientEOA = "0x9a72807e1BC8A5e1E178f51E26239d58F511EB3D" // Address EOA 
const usdtAddress = "0x55d398326f99059fF775485246999027B3197955" // USDT BSC
const amount = ethers.utils.parseUnits("100", 18) // amout

//  Encode transfer 
const usdtInterface = new ethers.utils.Interface([
  'function transfer(address to, uint256 amount) returns (bool)'
])
const calldata = usdtInterface.encodeFunctionData('transfer', [recipientEOA, amount])

// sent to Sequence Wallet Session 
// Session Signer sent Execute 
const tx = await sequenceWallet.sendTransaction({
  to: usdtAddress,
  data: calldata,
  value: 0
})

console.log('Transaction Hash:', tx.hash)
