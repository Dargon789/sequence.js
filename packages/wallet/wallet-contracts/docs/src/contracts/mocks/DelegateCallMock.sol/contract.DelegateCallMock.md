# DelegateCallMock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/DelegateCallMock.sol)


## State Variables
### REVERT_SLOT

```solidity
uint256 private constant REVERT_SLOT = uint256(keccak256("revert-flag"))
```


### store

```solidity
mapping(uint256 => uint256) private store
```


## Functions
### setRevertFlag


```solidity
function setRevertFlag(bool _revertFlag) external;
```

### write


```solidity
function write(uint256 _key, uint256 _val) external;
```

### read


```solidity
function read(uint256 _key) external;
```

## Events
### Readed

```solidity
event Readed(uint256 _val);
```

