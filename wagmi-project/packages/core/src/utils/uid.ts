import { randomBytes } from 'crypto'

export function uid(length = 11) {
  if (length <= 0) return ''

  // Each byte yields two hex characters.
  const byteLength = Math.ceil(length / 2)
  let bytes: Uint8Array

  if (typeof globalThis !== 'undefined' && globalThis.crypto && 'getRandomValues' in globalThis.crypto) {
    bytes = globalThis.crypto.getRandomValues(new Uint8Array(byteLength))
  } else {
    // Fallback for Node.js environments without Web Crypto.
    bytes = randomBytes(byteLength)
  }

  let hex = ''
  for (let i = 0; i < bytes.length; i++) {
    const byteHex = bytes[i].toString(16).padStart(2, '0')
    hex += byteHex
  }

  return hex.substring(0, length)
}
