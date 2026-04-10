import { newSECP256K1SessionFromSessionId, newSECP256K1Session } from './secp256k1'
import { newSECP256R1SessionFromSessionId, newSECP256R1Session } from './secp256r1'

export type Session = {
  sessionId(): Promise<string>
  sign(message: string | Uint8Array): Promise<string>
  clear(): void
}

  } else {
  }
}

  } else {
  }
}

export * from './secp256r1'
export * from './secp256k1'
