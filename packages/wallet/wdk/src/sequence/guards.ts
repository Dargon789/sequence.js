<<<<<<< Updated upstream
import { Address, Bytes } from 'ox'
import { Shared } from './manager.js'
import * as Guard from '@0xsequence/guard'
import { Signers } from '@0xsequence/wallet-core'
import { Config, Constants } from '@0xsequence/wallet-primitives'
=======
import { Address, Secp256k1 } from 'ox'
import { Shared } from './manager.js'
import * as Guard from '@0xsequence/guard'
import { Signers } from '@0xsequence/wallet-core'
import { Config } from '@0xsequence/wallet-primitives'
>>>>>>> Stashed changes

export type GuardRole = 'wallet' | 'sessions'

export class Guards {
  constructor(private readonly shared: Shared) {}

  getByRole(role: GuardRole): Signers.Guard {
    const guardAddress = this.shared.sequence.guardAddresses[role]
    if (!guardAddress) {
      throw new Error(`Guard address for role ${role} not found`)
    }

    return new Signers.Guard(new Guard.Sequence.Guard(this.shared.sequence.guardUrl, guardAddress))
  }

  getByAddress(address: Address.Address): [GuardRole, Signers.Guard] | undefined {
    const roles = Object.entries(this.shared.sequence.guardAddresses) as [GuardRole, Address.Address][]
    for (const [role, guardAddress] of roles) {
      if (Address.isEqual(guardAddress, address)) {
        return [role, this.getByRole(role)]
      }
    }
    return undefined
  }

<<<<<<< Updated upstream
  topology(role: GuardRole): Config.Topology | undefined {
=======
  topology(role: GuardRole): Config.NestedLeaf | undefined {
>>>>>>> Stashed changes
    const guardAddress = this.shared.sequence.guardAddresses[role]
    if (!guardAddress) {
      return undefined
    }

<<<<<<< Updated upstream
    const topology = Config.replaceAddress(
      this.shared.sequence.defaultGuardTopology,
      Constants.PlaceholderAddress,
      guardAddress,
    )

    // If the imageHash did not change it means the replacement failed
    if (
      Bytes.isEqual(
        Config.hashConfiguration(topology),
        Config.hashConfiguration(this.shared.sequence.defaultGuardTopology),
      )
    ) {
      throw new Error(`Guard address replacement failed for role ${role}`)
    }

    return topology
=======
    return {
      type: 'nested',
      weight: 1n,
      threshold: 1n,
      tree: { ...this.shared.sequence.defaultGuardTopology, address: guardAddress },
    }
>>>>>>> Stashed changes
  }
}
