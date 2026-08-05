# ModuleStorage
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleStorage.sol)


## Functions
### writeBytes32


```solidity
function writeBytes32(bytes32 _key, bytes32 _val) internal;
```

### readBytes32


```solidity
function readBytes32(bytes32 _key) internal view returns (bytes32 val);
```

### writeBytes32Map


```solidity
function writeBytes32Map(bytes32 _key, bytes32 _subKey, bytes32 _val) internal;
```

### readBytes32Map


```solidity
function readBytes32Map(bytes32 _key, bytes32 _subKey) internal view returns (bytes32 val);
```

