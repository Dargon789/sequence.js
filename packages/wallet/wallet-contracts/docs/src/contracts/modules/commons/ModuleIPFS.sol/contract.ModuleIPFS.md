# ModuleIPFS
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleIPFS.sol)

**Inherits:**
[ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md)


## State Variables
### IPFS_ROOT_KEY

```solidity
bytes32 private constant IPFS_ROOT_KEY =
    bytes32(0x0eecac93ced8722d209199364cda3bc33da3bc3a23daef6be49ebd780511d033)
```


## Functions
### ipfsRootBytes32


```solidity
function ipfsRootBytes32() public view returns (bytes32);
```

### ipfsRoot


```solidity
function ipfsRoot() public view returns (string memory);
```

### updateIPFSRoot


```solidity
function updateIPFSRoot(bytes32 _hash) external onlySelf;
```

### _updateIPFSRoot


```solidity
function _updateIPFSRoot(bytes32 _hash) internal;
```

## Events
### IPFSRootUpdated

```solidity
event IPFSRootUpdated(bytes32 _hash);
```

