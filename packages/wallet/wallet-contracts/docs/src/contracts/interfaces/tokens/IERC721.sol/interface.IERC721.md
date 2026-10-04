# IERC721
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/interfaces/tokens/IERC721.sol)


## Functions
### balanceOf


```solidity
function balanceOf(address owner) external view returns (uint256 balance);
```

### ownerOf


```solidity
function ownerOf(uint256 tokenId) external view returns (address owner);
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external;
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 tokenId) external;
```

### approve


```solidity
function approve(address to, uint256 tokenId) external;
```

### getApproved


```solidity
function getApproved(uint256 tokenId) external view returns (address operator);
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) external;
```

### isApprovedForAll


```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool);
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external;
```

## Events
### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
```

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
```

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
```

