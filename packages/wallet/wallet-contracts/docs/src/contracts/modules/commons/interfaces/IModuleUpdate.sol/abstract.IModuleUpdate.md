# IModuleUpdate
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/interfaces/IModuleUpdate.sol)


## Functions
### updateImplementation

Updates the implementation of the base wallet

WARNING Updating the implementation can brick the wallet


```solidity
function updateImplementation(address _implementation) external virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|New main module implementation|


### _updateImplementation

Updates the implementation of the base wallet, used internally.

WARNING Updating the implementation can brick the wallet


```solidity
function _updateImplementation(address _implementation) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|New main module implementation|


## Errors
### InvalidImplementation

```solidity
error InvalidImplementation(address _implementation);
```

