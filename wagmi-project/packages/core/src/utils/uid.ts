import { randomBytes } from 'node:crypto'

export function uid(length = 11) {
  const byteLength = Math.ceil(length / 2)
  return randomBytes(byteLength).toString('hex').slice(0, length)
}
