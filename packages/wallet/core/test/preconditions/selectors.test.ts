import { Address } from 'ox'
import { describe, expect, it } from 'vitest'

import {
  extractChainID,
  extractSupportedPreconditions,
  extractNativeBalancePreconditions,
  extractERC20BalancePreconditions,
} from '../../src/preconditions/selectors.js'
import {
  NativeBalancePrecondition,
  Erc20BalancePrecondition,
  Erc721OwnershipPrecondition,
} from '../../src/preconditions/types.js'
import { Network } from '@0xsequence/wallet-primitives'


describe('Preconditions Selectors', () => {
  describe('extractChainID', () => {
    it('should extract chainID from valid precondition data', () => {
      const chainId = extractChainID(precondition)
      expect(chainId).toBe(Network.ChainId.MAINNET)
    })

    it('should extract large chainID values', () => {
      const chainId = extractChainID(precondition)
      expect(chainId).toBe(Network.ChainId.ARBITRUM)
    })

    it('should return undefined when chainID is not present', () => {
      const chainId = extractChainID(precondition)
      expect(chainId).toBeUndefined()
    })

    it('should return undefined for null/undefined precondition', () => {
    })

    it('should handle chainID with value 0', () => {
      const chainId = extractChainID(precondition)
      expect(chainId).toBe(0)
    })
  })

  describe('extractSupportedPreconditions', () => {
    it('should extract valid preconditions', () => {
      ]

      const results = extractSupportedPreconditions(intents)
      expect(results).toHaveLength(2)
      expect(results[0]).toBeInstanceOf(NativeBalancePrecondition)
      expect(results[1]).toBeInstanceOf(Erc20BalancePrecondition)
    })

    it('should filter out invalid preconditions', () => {
      ]

      const results = extractSupportedPreconditions(intents)
      expect(results).toHaveLength(1)
      expect(results[0]).toBeInstanceOf(NativeBalancePrecondition)
    })

    it('should return empty array for null/undefined input', () => {
    })

    it('should return empty array for empty input', () => {
      const results = extractSupportedPreconditions([])
      expect(results).toEqual([])
    })

    it('should handle mixed valid and invalid preconditions', () => {
      ]

      const results = extractSupportedPreconditions(intents)
      expect(results).toHaveLength(2)
      expect(results[0]).toBeInstanceOf(NativeBalancePrecondition)
      expect(results[1]).toBeInstanceOf(Erc721OwnershipPrecondition)
    })
  })

  describe('extractNativeBalancePreconditions', () => {
    it('should extract only native balance preconditions', () => {
      ]

      const results = extractNativeBalancePreconditions(intents)
      expect(results).toHaveLength(2)
      expect(results[0]).toBeInstanceOf(NativeBalancePrecondition)
      expect(results[1]).toBeInstanceOf(NativeBalancePrecondition)
      expect(results[0].min).toBe(1000000000000000000n)
    })

    it('should return empty array when no native balance preconditions exist', () => {
      ]

      const results = extractNativeBalancePreconditions(intents)
      expect(results).toEqual([])
    })

    it('should return empty array for null/undefined input', () => {
    })

    it('should return empty array for empty input', () => {
      const results = extractNativeBalancePreconditions([])
      expect(results).toEqual([])
    })

    it('should filter out invalid native balance preconditions', () => {
      ]

      const results = extractNativeBalancePreconditions(intents)
      expect(results).toHaveLength(1)
      expect(results[0]).toBeInstanceOf(NativeBalancePrecondition)
      expect(results[0].min).toBe(1000000000000000000n)
    })
  })

  describe('extractERC20BalancePreconditions', () => {
    it('should extract only ERC20 balance preconditions', () => {
      ]

      const results = extractERC20BalancePreconditions(intents)
      expect(results).toHaveLength(2)
      expect(results[0]).toBeInstanceOf(Erc20BalancePrecondition)
      expect(results[1]).toBeInstanceOf(Erc20BalancePrecondition)
      expect(results[0].min).toBe(1000000n)
    })

    it('should return empty array when no ERC20 balance preconditions exist', () => {
      ]

      const results = extractERC20BalancePreconditions(intents)
      expect(results).toEqual([])
    })

    it('should return empty array for null/undefined input', () => {
    })

    it('should return empty array for empty input', () => {
      const results = extractERC20BalancePreconditions([])
      expect(results).toEqual([])
    })

    it('should filter out invalid ERC20 balance preconditions', () => {
      ]

      const results = extractERC20BalancePreconditions(intents)
      expect(results).toHaveLength(1)
      expect(results[0]).toBeInstanceOf(Erc20BalancePrecondition)
      expect(results[0].min).toBe(1000000n)
    })
  })
})
