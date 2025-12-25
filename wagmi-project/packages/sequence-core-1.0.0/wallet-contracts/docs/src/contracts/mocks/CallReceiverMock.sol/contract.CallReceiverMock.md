# CallReceiverMock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/CallReceiverMock.sol)


## State Variables
### lastValA

```solidity
uint256 public lastValA
```


### lastValB

```solidity
bytes public lastValB
```


### revertFlag

```solidity
bool revertFlag
```


## Functions
### constructor


```solidity
constructor() payable;
```

### setRevertFlag


```solidity
function setRevertFlag(bool _revertFlag) external;
```

### testCall


```solidity
function testCall(uint256 _valA, bytes calldata _valB) external payable;
```

