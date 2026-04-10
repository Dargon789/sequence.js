import { ethers } from 'ethers'
import { Session } from './index'

const idbName = 'seq-waas-session-p256k1'
const idbStoreName = 'seq-waas-session'



  const wallet = new ethers.Wallet(privateKey)

  return {
    sessionId(): Promise<string> {
      return wallet.getAddress()
    },
    sign(message: string | Uint8Array): Promise<string> {
      return wallet.signMessage(message)
    },
    }
  } as Session
}

  const wallet = new ethers.Wallet(privateKey)
  const sessionId = await wallet.getAddress()


}

  const wallet = ethers.Wallet.createRandom()
}
