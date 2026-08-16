import React, { useState } from 'react'
import { ethers } from 'ethers'
import { SequenceBatchBuilder } from './services/sequence/SequenceBatchBuilder'

export const BatchWalletUI = ({ signer }: { signer: any }) => {
  const [builder] = useState(() => new SequenceBatchBuilder(signer))
  const [queue, setQueue] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  // Input Form States
  const [tokenAddress, setTokenAddress] = useState('')
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  // 1. add Queue (update Builder and UI)
  const handleAddTransfer = () => {
    if (!tokenAddress || !recipient || !amount) return

    builder.addERC20Transfer({
      tokenAddress,
      recipient,
      amount: ethers.utils.parseUnits(amount, 18)
    })

    // pull list queue update UI
    setQueue(builder.getBatchQueue())
    setRecipient('')
    setAmount('')
  }

  // 2. sent Execute sign Batch 
  const handleExecute = async () => {
    try {
      setLoading(true)
      const tx = await builder.execute()
      alert(`Tx Submitted: ${tx.hash}`)
      setQueue([]) // clean UI 
    } catch (err: any) {
      alert(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>🚀 Sequence Multi-Action Batch Sender</h3>
      
      {/* Form data */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input 
          placeholder="Token Address" 
          value={tokenAddress} 
          onChange={(e) => setTokenAddress(e.target.value)} 
        />
        <input 
          placeholder="Recipient Address" 
          value={recipient} 
          onChange={(e) => setRecipient(e.target.value)} 
        />
        <input 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
        <button onClick={handleAddTransfer}>+ Add to Batch</button>
      </div>

      {/* list data Queue */}
      <h4>Pending Batch Items ({queue.length})</h4>
      <ul>
        {queue.map((item, index) => (
          <li key={index}>
            Target: {item.to} | Value: {item.value.toString()} | Data: {item.data.slice(0, 10)}...
          </li>
        ))}
      </ul>

      {/* sent Action */}
      {queue.length > 0 && (
        <button onClick={handleExecute} disabled={loading}>
          {loading ? 'Processing...' : `Execute ${queue.length} Actions in 1 Tx`}
        </button>
      )}
    </div>
  )
}
