# LibBytesPointerImpl
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/LibBytesPointerImpl.sol)


## Functions
### readFirstUint16


```solidity
function readFirstUint16(bytes calldata data) external pure returns (uint16 a, uint256 newPointer);
```

### readUint16


```solidity
function readUint16(bytes calldata data, uint256 index) external pure returns (uint16 a, uint256 newPointer);
```

### readUint24


```solidity
function readUint24(bytes calldata data, uint256 index) external pure returns (uint24 a, uint256 newPointer);
```

### readUint64


```solidity
function readUint64(bytes calldata data, uint256 index) external pure returns (uint64 a, uint256 newPointer);
```

