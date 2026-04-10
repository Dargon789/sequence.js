import { ethers } from 'ethers'
import { Session } from './index'
import { KeyTypes } from './keyTypes'

const idbName = 'seq-waas-session-p256r1'
const idbStoreName = 'seq-waas-session'



  const encoder = new TextEncoder()
  return {
    sessionId: async () => {
      const pubKeyTypedRaw = new Uint8Array(pubKeyRaw.byteLength + 1)

      // set the first byte to the key type
      pubKeyTypedRaw[0] = KeyTypes.ECDSAP256R1
      pubKeyTypedRaw.set(new Uint8Array(pubKeyRaw), 1)

      return ethers.utils.hexlify(pubKeyTypedRaw)
    },
    sign: async (message: string | Uint8Array) => {
      if (typeof message === 'string') {
        if (message.startsWith('0x')) {
          message = message.slice(2)
          message = ethers.utils.arrayify(message)
        } else {
          message = encoder.encode(message)
        }
      }
      return ethers.utils.hexlify(new Uint8Array(signatureBuff))
    },
    clear: async () => {
    }
  }
}



}

    {
      name: 'ECDSA',
      namedCurve: 'P-256'
    },
    false,
    ['sign', 'verify']
  )
}

  const pubKeyTypedRaw = new Uint8Array(pubKeyRaw.byteLength + 1)

  // set the first byte to the key type
  pubKeyTypedRaw[0] = KeyTypes.ECDSAP256R1
  pubKeyTypedRaw.set(new Uint8Array(pubKeyRaw), 1)

  return ethers.utils.hexlify(pubKeyTypedRaw)
}
