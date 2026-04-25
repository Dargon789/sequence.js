import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { Address } from 'ox'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import { Arweave, Reader, Sequence } from '../../../src/state/index'

const TEST_TIMEOUT_MS = 20_000
const RECORDING_FILE = new URL('./recording', import.meta.url)

type RecordedRequest = {
  method: string
  url: string
  headers: Record<string, string>
  body: string
}

type RecordedResponse = {
  status: number
  statusText: string
  headers: Record<string, string>
  body: string
}

type RecordingEntry = {
  request: RecordedRequest
  response: RecordedResponse
}

const tests: { [method in keyof Reader]: { [description: string]: Parameters<Reader[method]> } } = {
  getConfiguration: {
    'image hash: 0xfd32e01d7e814292f49f57e79722ca66423833acf8f25eba770faf3483ff3e78': [
      '0xfd32e01d7e814292f49f57e79722ca66423833acf8f25eba770faf3483ff3e78',
    ],
  },
  getDeploy: {
    'wallet: 0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE': ['0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE'],
  },
  getWallets: {
    'signer: 0x94835215CaA1aD3E304F9A7E2148623fe661dEB7': ['0x94835215CaA1aD3E304F9A7E2148623fe661dEB7'],
  },
  getWalletsForSapient: {
    'signer: 0x000000000000AB36D17eB1150116371520565205, image hash: 0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3':
      [
        '0x000000000000AB36D17eB1150116371520565205',
        '0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3',
      ],
  },
  getWitnessFor: {
    'wallet: 0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE, signer: 0x94835215CaA1aD3E304F9A7E2148623fe661dEB7': [
      '0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE',
      '0x94835215CaA1aD3E304F9A7E2148623fe661dEB7',
    ],
  },
  getWitnessForSapient: {
    'wallet: 0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE, signer: 0x000000000000AB36D17eB1150116371520565205, image hash: 0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3':
      [
        '0x47E0e44DE649B35Cf7863998Be6C5a7D5d8c63bE',
        '0x000000000000AB36D17eB1150116371520565205',
        '0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3',
      ],
  },
  getConfigurationUpdates: {
    'wallet: 0x135769a58639b4Fa7d779a9df9B57A706FBCa816, from: 0xaa14aff91091e94d7521625ab1c713273e86a8c21a0afb6cee35be28af47738a':
      [
        '0x135769a58639b4Fa7d779a9df9B57A706FBCa816',
        '0xaa14aff91091e94d7521625ab1c713273e86a8c21a0afb6cee35be28af47738a',
      ],
  },
  getTree: {
    'image hash: 0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3': [
      '0xeef69774e1cb488a71f6d235c858fa564134ee7c3acda9ff116b6c9d42b3cee3',
    ],
  },
  getPayload: {
    'calls payload: 0xc78f3951686b7f16f39e25aea1fd5acc0e2177083c170b4c962be6cd45630576': [
      '0xc78f3951686b7f16f39e25aea1fd5acc0e2177083c170b4c962be6cd45630576',
    ],
    'message payload: 0x3a841ba3163a7a19cd168373df1144d38130b2f46b8d6eac956127f06fffe4f4': [
      '0x3a841ba3163a7a19cd168373df1144d38130b2f46b8d6eac956127f06fffe4f4',
    ],
    'config update payload: 0xcae631660ffa90bddc5e9b4fa9c11692a53062a61640fb958f3f2959d22fe54b': [
      '0xcae631660ffa90bddc5e9b4fa9c11692a53062a61640fb958f3f2959d22fe54b',
    ],
    'digest payload: 0xcd3c291e0939f029aaa4b4f292d5d2b2ce43baf98046d9abc2a3e8284b253432': [
      '0xcd3c291e0939f029aaa4b4f292d5d2b2ce43baf98046d9abc2a3e8284b253432',
    ],
  },
}

function normalize(value: any): any {
  switch (typeof value) {
    case 'string':
      if (Address.validate(value)) {
        return Address.checksum(value)
      }

      break

    case 'object':
      if (value === null) {
        return value
      }

      if (Array.isArray(value)) {
        return value.map(normalize)
      }

      return Object.fromEntries(
        Object.entries(value)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => [Address.validate(key) ? Address.checksum(key) : key, normalize(value)]),
      )
  }

  return value
}

function normalizeHeaders(headers: Headers): Record<string, string> {
  return Object.fromEntries([...headers.entries()].sort(([left], [right]) => left.localeCompare(right)))
}

async function serializeRequest(input: RequestInfo | URL, init?: RequestInit): Promise<RecordedRequest> {
  const request = new Request(input, init)

  return {
    method: request.method.toUpperCase(),
    url: request.url,
    headers: normalizeHeaders(request.headers),
    body: request.method === 'GET' || request.method === 'HEAD' ? '' : await request.clone().text(),
  }
}

function serializeResponse(response: Response, body: string): RecordedResponse {
  return {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeHeaders(response.headers),
    body,
  }
}

function requestKey(request: RecordedRequest): string {
  return JSON.stringify(request)
}

describe('Arweave state reader', () => {
  let arweave: Arweave.Reader
  let sequence: Sequence.Provider
  let originalFetch: typeof globalThis.fetch | undefined

  beforeAll(() => {
    originalFetch = globalThis.fetch
    if (!originalFetch) {
      throw new Error('fetch is not available')
    }

    if (existsSync(RECORDING_FILE)) {
      const entries = JSON.parse(readFileSync(RECORDING_FILE, 'utf8')) as RecordingEntry[]
      const responsesByRequest = new Map<string, RecordedResponse[]>()

      for (const entry of entries) {
        const key = requestKey(entry.request)
        const responses = responsesByRequest.get(key)

        if (responses) {
          responses.push(entry.response)
        } else {
          responsesByRequest.set(key, [entry.response])
        }
      }

      globalThis.fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = await serializeRequest(input, init)
        const response = responsesByRequest.get(requestKey(request))?.shift()

        if (!response) {
          throw new Error(`no recorded response for request ${JSON.stringify(request, null, 2)}`)
        }

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        })
      }) as typeof fetch
    } else {
      const entries: RecordingEntry[] = []

      globalThis.fetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
        const request = await serializeRequest(input, init)
        const response = await originalFetch!(input, init)
        const body = await response.clone().text()

        entries.push({ request, response: serializeResponse(response, body) })
        writeFileSync(RECORDING_FILE, JSON.stringify(entries, null, 2))

        return response
      }) as typeof fetch
    }

    arweave = new Arweave.Reader()
    sequence = new Sequence.Provider()
  })

  afterAll(() => {
    if (originalFetch) {
      globalThis.fetch = originalFetch
    }
  })

  const methods = Object.entries(tests).filter(([, methodTests]) => Object.keys(methodTests).length > 0)
  if (methods.length === 0) {
    it.skip('no configured test cases', () => {})
  }

  for (const [method, methodTests] of methods) {
    describe(method, () => {
      for (const [description, args] of Object.entries(methodTests)) {
        it(
          description,
          async () => {
            const [actual, expected] = await Promise.all([arweave[method](...args), sequence[method](...args)])
            expect(normalize(actual)).toEqual(normalize(expected))
          },
          TEST_TIMEOUT_MS,
        )
      }
    })
  }
})
