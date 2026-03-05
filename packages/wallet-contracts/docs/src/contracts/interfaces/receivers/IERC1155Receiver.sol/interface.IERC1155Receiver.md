# IERC1155Receiver
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/interfaces/receivers/IERC1155Receiver.sol)


## Functions
### onERC1155Received


```solidity
function onERC1155Received(address, address, uint256, uint256, bytes calldata) external returns (bytes4);
```

### onERC1155BatchReceived


```solidity
function onERC1155BatchReceived(address, address, uint256[] calldata, uint256[] calldata, bytes calldata)
    external
    returns (bytes4);
```

