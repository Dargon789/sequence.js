const size = 256
let index = size
let buffer: string

export function uid(length = 11) {
  if (!buffer || index + length > size * 2) {
    buffer = ''
    index = 0
    const bytes = new Uint8Array(size)
    globalThis.crypto.getRandomValues(bytes)
    for (let i = 0; i < size; i++) {
      buffer += bytes[i]!.toString(16).padStart(2, '0')
    }
  }
  return buffer.substring(index, index++ + length)
}
