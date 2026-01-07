const size = 256
let index = size
let buffer: string

function fillBuffer() {
  // Generate `size` bytes of cryptographically secure random data,
  // then convert them to a hex string and assign to `buffer`.
  let bytes: Uint8Array

  if (
    typeof window !== 'undefined' &&
    window.crypto &&
    typeof window.crypto.getRandomValues === 'function'
  ) {
    // Browser environment
    bytes = new Uint8Array(size)
    window.crypto.getRandomValues(bytes)
  } else {
    // Node.js or other environments with `crypto` module
    // Use dynamic require to avoid issues in non-Node bundles.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const crypto = require('crypto') as typeof import('crypto')
    const buf = crypto.randomBytes(size)
    bytes = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength)
  }

  let result = ''
  for (let i = 0; i < bytes.length; i++) {
    const hex = bytes[i].toString(16).padStart(2, '0')
    result += hex
  }

  buffer = result
  index = 0
}

export function uid(length = 11) {
  if (!buffer || index + length > size * 2) {
    fillBuffer()
  }
  return buffer.substring(index, index++ + length)
}
