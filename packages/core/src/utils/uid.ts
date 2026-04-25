const size = 256
let index = size
let buffer: string

function getRandomBytes(byteLength: number): Uint8Array {
  if (
    typeof globalThis !== 'undefined' &&
    globalThis.crypto &&
    typeof globalThis.crypto.getRandomValues === 'function'
  ) {
    const array = new Uint8Array(byteLength)
    globalThis.crypto.getRandomValues(array)
    return array
  }

  // Fallback for Node.js environments that expose `require('crypto')`.
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodeCrypto = require('crypto') as {
      randomBytes: (size: number) => { readonly [n: number]: number; length: number }
    }
    const buf = nodeCrypto.randomBytes(byteLength)
    const array = new Uint8Array(byteLength)
    for (let i = 0; i < byteLength; i++) array[i] = buf[i]
    return array
  } catch {
    // ignore and fall through to non-cryptographic fallback
  }

  // Last-resort, non-cryptographic fallback (used only if no crypto APIs are available).
  const array = new Uint8Array(byteLength)
  for (let i = 0; i < byteLength; i++) {
    array[i] = (Math.random() * 256) | 0
  }
  return array
}

export function uid(length = 11) {
  if (!buffer || index + length > size * 2) {
    buffer = ''
    index = 0
    const randomBytes = getRandomBytes(size)
    for (let i = 0; i < size; i++) {
      const byte = randomBytes[i]
      buffer += byte.toString(16).padStart(2, '0')
    }
  }
  return buffer.substring(index, index++ + length)
}
