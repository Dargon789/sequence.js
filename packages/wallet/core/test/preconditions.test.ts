import { describe, expect, it, vi } from 'vitest'
import {
  Erc1155ApprovalPrecondition,
  Erc1155BalancePrecondition,
  Erc20ApprovalPrecondition,
  Erc20BalancePrecondition,
  Erc721ApprovalPrecondition,
  Erc721OwnershipPrecondition,
  NativeBalancePrecondition,
import { Network } from '@0xsequence/wallet-primitives'

const ERC20_IMPLICIT_MINT_CONTRACT = '0x041E0CDC028050519C8e6485B2d9840caf63773F'

function randomAddress(): Address.Address {
  return Address.fromPublicKey(Secp256k1.getPublicKey({ privateKey: Secp256k1.randomPrivateKey() }))
}

        sendTransaction: vi.fn(),
        getBalance: vi.fn(),
    }

  }

  const testWalletAddress = randomAddress()

    }
  }

  it('should create and check native balance precondition', async () => {
    const { provider, chainId } = await getProvider()

    const precondition = new NativeBalancePrecondition(
      testWalletAddress,
      1000000000000000000n, // 1 ETH min
      2000000000000000000n, // 2 ETH max
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })

  it('should create and check ERC20 balance precondition', async () => {
    const { provider, chainId } = await getProvider()

    const precondition = new Erc20BalancePrecondition(
      testWalletAddress,
      1000000n, // 1 token min
      2000000n, // 2 tokens max
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })

  it('should create and check ERC20 approval precondition', async () => {
    const { provider, chainId } = await getProvider()

    const operator = randomAddress()
    const precondition = new Erc20ApprovalPrecondition(
      testWalletAddress,
      operator,
      1000000n, // 1 token min approval
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })

  it('should create and check ERC721 ownership precondition', async () => {
    const { provider, chainId } = await getProvider()

    const precondition = new Erc721OwnershipPrecondition(
      testWalletAddress,
      1n, // tokenId
      true, // must own
    )

      type: precondition.type(),
    }

      )

    expect(isValid).toBe(true)
  })

  it('should create and check ERC721 approval precondition', async () => {
    const { provider, chainId } = await getProvider()

    const operator = randomAddress()
    const precondition = new Erc721ApprovalPrecondition(
      testWalletAddress,
      1n, // tokenId
      operator,
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })

  it('should create and check ERC1155 balance precondition', async () => {
    const { provider, chainId } = await getProvider()

    const precondition = new Erc1155BalancePrecondition(
      testWalletAddress,
      1n, // tokenId
      1000000n, // 1 token min
      2000000n, // 2 tokens max
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })

  it('should create and check ERC1155 approval precondition', async () => {
    const { provider, chainId } = await getProvider()

    const operator = randomAddress()
    const precondition = new Erc1155ApprovalPrecondition(
      testWalletAddress,
      1n, // tokenId
      operator,
      1000000n, // 1 token min approval
    )

      type: precondition.type(),
    }


    expect(isValid).toBe(true)
  })
})
