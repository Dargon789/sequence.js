# Implementation
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/Implementation.sol)

Allows modules to access the implementation slot


## Functions
### _setImplementation

Updates the Wallet implementation

The wallet implementation is stored on the storage slot
defined by the address of the wallet itself
WARNING updating this value may break the wallet and users
must be confident that the new implementation is safe.


```solidity
function _setImplementation(address _imp) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imp`|`address`|New implementation address|


### _getImplementation

Returns the Wallet implementation


```solidity
function _getImplementation() internal view returns (address _imp);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_imp`|`address`|The address of the current Wallet implementation|


