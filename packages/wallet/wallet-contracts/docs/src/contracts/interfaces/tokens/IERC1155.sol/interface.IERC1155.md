# IERC1155
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/interfaces/tokens/IERC1155.sol)


## Functions
### balanceOf


```solidity
function balanceOf(address account, uint256 id) external view returns (uint256);
```

### balanceOfBatch


```solidity
function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
    external
    view
    returns (uint256[] memory);
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) external;
```

### isApprovedForAll


```solidity
function isApprovedForAll(address account, address operator) external view returns (bool);
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
```

### safeBatchTransferFrom


```solidity
function safeBatchTransferFrom(
    address from,
    address to,
    uint256[] calldata ids,
    uint256[] calldata amounts,
    bytes calldata data
) external;
```

## Events
### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
```

### TransferBatch

```solidity
event TransferBatch(
    address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values
);
```

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed account, address indexed operator, bool approved);
```

### URI

```solidity
event URI(string value, uint256 indexed id);
```

