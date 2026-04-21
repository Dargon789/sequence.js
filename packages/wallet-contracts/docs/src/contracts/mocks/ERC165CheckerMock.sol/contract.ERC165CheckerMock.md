# ERC165CheckerMock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/ERC165CheckerMock.sol)


## State Variables
### InvalidID

```solidity
bytes4 constant InvalidID = 0xffffffff
```


### ERC165ID

```solidity
bytes4 constant ERC165ID = 0x01ffc9a7
```


## Functions
### doesContractImplementInterface


```solidity
function doesContractImplementInterface(address _contract, bytes4 _interfaceId) external view returns (bool);
```

### noThrowCall


```solidity
function noThrowCall(address _contract, bytes4 _interfaceId)
    private
    view
    returns (uint256 success, uint256 result);
```

