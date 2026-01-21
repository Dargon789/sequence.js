# Trust
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/trust/Trust.sol)

**Inherits:**
[IERC1271Wallet](/home/dargon789/wallet-contracts/docs/src/contracts/interfaces/IERC1271Wallet.sol/interface.IERC1271Wallet.md)


## State Variables
### owner

```solidity
address public immutable owner
```


### beneficiary

```solidity
address public immutable beneficiary
```


### duration

```solidity
uint256 public immutable duration
```


### unlocksAt

```solidity
uint256 public unlocksAt = type(uint256).max
```


### SELECTOR_ERC1271_BYTES_BYTES

```solidity
bytes4 internal constant SELECTOR_ERC1271_BYTES_BYTES = 0x20c13b0b
```


### SELECTOR_ERC1271_BYTES32_BYTES

```solidity
bytes4 internal constant SELECTOR_ERC1271_BYTES32_BYTES = 0x1626ba7e
```


## Functions
### constructor


```solidity
constructor(address _owner, address _beneficiary, uint256 _duration) ;
```

### onlyAllowed


```solidity
modifier onlyAllowed() ;
```

### onlyMember


```solidity
modifier onlyMember() ;
```

### isLocked


```solidity
function isLocked() public view returns (bool);
```

### setUnlocksAt


```solidity
function setUnlocksAt(uint256 _unlocksAt) external onlyMember;
```

### sendTransaction


```solidity
function sendTransaction(address payable _to, uint256 _value, bytes calldata _data)
    external
    onlyAllowed
    returns (bytes memory);
```

### isValidSignature


```solidity
function isValidSignature(bytes calldata _data, bytes calldata _signature) external view returns (bytes4);
```

### isValidSignature


```solidity
function isValidSignature(bytes32 _hash, bytes calldata _signature) external view returns (bytes4);
```

### receive


```solidity
receive() external payable;
```

### fallback


```solidity
fallback() external payable;
```

## Events
### SetUnlocksAt

```solidity
event SetUnlocksAt(uint256 _unlocksAt);
```

### SentTransaction

```solidity
event SentTransaction(address payable _to, uint256 _value, bytes _data, bytes _result);
```

## Errors
### UnlockInThePast

```solidity
error UnlockInThePast(uint256 _unlocksAt, uint256 _elapsed);
```

### UnlockTooEarly

```solidity
error UnlockTooEarly(uint256 _unlocksAt, uint256 _diff);
```

### NotOwner

```solidity
error NotOwner(address _sender);
```

### NotUnlocked

```solidity
error NotUnlocked(uint256 _unlocksAt);
```

### FailedTransaction

```solidity
error FailedTransaction(address payable _to, uint256 _value, bytes _data, bytes _result);
```

### EmptySignature

```solidity
error EmptySignature();
```

### InvalidSignatureFlag

```solidity
error InvalidSignatureFlag(bytes _signature, bytes1 _flag);
```

### InvalidSignature

```solidity
error InvalidSignature(bytes32 _hash, bytes32 _rehash, address _signer, bytes _signature);
```

