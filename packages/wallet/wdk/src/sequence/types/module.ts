import { Config } from '@0xsequence/wallet-primitives'

export type Module = {
  weight: bigint
  sapientLeaf: Config.SapientSignerLeaf
<<<<<<< Updated upstream
  guardLeaf?: Config.Topology
=======
  guardLeaf?: Config.NestedLeaf
>>>>>>> Stashed changes
}
