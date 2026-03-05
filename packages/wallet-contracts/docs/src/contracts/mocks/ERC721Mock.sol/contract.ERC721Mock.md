# ERC721Mock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/ERC721Mock.sol)


## State Variables
### name

```solidity
string public name = "Mock ERC721 Token"
```


### symbol

```solidity
string public symbol = "MERC721"
```


### totalSupply

```solidity
uint256 public totalSupply
```


### owner

```solidity
address public owner
```


### balances

```solidity
mapping(address => uint256) public balances
```


### owners

```solidity
mapping(uint256 => address) public owners
```


### operatorApprovals

```solidity
mapping(address => mapping(address => bool)) public operatorApprovals
```


### tokenApprovals

```solidity
mapping(uint256 => address) public tokenApprovals
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
function balanceOf(address _owner) public view returns (uint256);
```

### ownerOf


```solidity
function ownerOf(uint256 tokenId) public view returns (address);
```

### mint


```solidity
function mint(address to, uint256 tokenId) public onlyOwner;
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 tokenId) public;
```

### approve


```solidity
function approve(address to, uint256 tokenId) public;
```

### getApproved


```solidity
function getApproved(uint256 tokenId) public view returns (address);
```

### setApprovalForAll


```solidity
function setApprovalForAll(address operator, bool approved) public;
```

### isApprovedForAll


```solidity
function isApprovedForAll(address _owner, address operator) public view returns (bool);
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

