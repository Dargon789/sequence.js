# HookCallerMock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/HookCallerMock.sol)


## Functions
### callERC1155Received


```solidity
function callERC1155Received(address _addr) external;
```

### callERC1155BatchReceived


```solidity
function callERC1155BatchReceived(address _addr) external;
```

### callERC721Received


```solidity
function callERC721Received(address _addr) external;
```

### callERC223Received


```solidity
function callERC223Received(address _addr) external;
```

### callERC1271isValidSignatureData


```solidity
function callERC1271isValidSignatureData(address _addr, bytes calldata _data, bytes calldata _signature)
    external
    view;
```

### callERC1271isValidSignatureHash


```solidity
function callERC1271isValidSignatureHash(address _addr, bytes32 _hash, bytes calldata _signature) external view;
```

