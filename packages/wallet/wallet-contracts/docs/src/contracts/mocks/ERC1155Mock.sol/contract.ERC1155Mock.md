# ERC1155Mock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/ERC1155Mock.sol)


## State Variables
### name

```solidity
string public name = "Mock ERC1155 Token"
```


### symbol

```solidity
string public symbol = "MERC1155"
```


### owner

```solidity
address public owner
```


### balances

```solidity
mapping(uint256 => mapping(address => uint256)) public balances
```


### operatorApprovals

```solidity
mapping(address => mapping(address => bool)) public operatorApprovals
```


## Functions
### constructor


```solidity
constructor() ;
```

### onlyOwner


```solidity
modifier onlyOwner() ;
```

### balanceOf


```solidity
function balanceOf(address account, uint256 id) public view returns (uint256);
```

### balanceOfBatch


```solidity
function balanceOfBatch(address[] memory accounts, uint256[] memory ids) public view returns (uint256[] memory);
```

### mint


```solidity
function mint(address to, uint256 id, uint256 amount) public onlyOwner;
```

### safeTransferFrom


```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount) public;
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) public;
```

### isApprovedForAll


```solidity
function isApprovedForAll(address account, address operator) public view returns (bool);
```

## Events
### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
```

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed account, address indexed operator, bool approved);
```

