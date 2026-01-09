const size = 256
let index = size
let buffer: string

function getRandomBytes(count: number): Uint8Array {
  if (typeof globalThis !== 'undefined' && (globalThis as any).crypto?.getRandomValues) {
    const array = new Uint8Array(count)
    ;(globalThis as any).crypto.getRandomValues(array)
    return array
  }
  // Fallback for environments without globalThis.crypto (e.g. older Node.js)
  // `require` is used here to avoid adding a hard ESM import that might not be available in all targets.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nodeCrypto = require('crypto') as typeof import('crypto')
  return nodeCrypto.randomBytes(count)
}

export function uid(length = 11) {
  if (!buffer || index + length > size * 2) {
    const bytes = getRandomBytes(size)
    let result = ''
    for (let i = 0; i < bytes.length; i++) {
      const hex = bytes[i].toString(16).padStart(2, '0')
      result += hex
    }
    buffer = result
    index = 0
  }
  return buffer.substring(index, index++ + length)
}
