import { SequenceUtils } from '@0xsequence/all'
import { ethers } from 'ethers'

//  Address USDT BSC and EOA 
const usdtAddress = "0x55d398326f99059fF775485246999027B3197955"
const recipientEOA = "0x9a72807e1BC8A5e1E178f51E26239d58F511EB3D" // EOA
const amount = ethers.utils.parseUnits("100", 18)  // USDT amount

// Encode transfer 
const erc20Interface = new ethers.utils.Interface([
  'function transfer(address to, uint256 value) returns (bool)'
])
const callData = erc20Interface.encodeFunctionData('transfer', [recipientEOA, amount])

// Sequence Relayer (Bundle & Broadcast BSC)
const tx = await sequenceWallet.sendTransaction({
  to: usdtAddress,
  data: callData,
  value: 0
})

console.log('Broadcast Success! Tx Hash:', tx.hash)
