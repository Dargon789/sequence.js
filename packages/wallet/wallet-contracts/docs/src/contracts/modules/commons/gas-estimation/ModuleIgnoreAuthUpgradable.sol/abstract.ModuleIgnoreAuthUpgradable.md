# ModuleIgnoreAuthUpgradable
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/gas-estimation/ModuleIgnoreAuthUpgradable.sol)

**Inherits:**
[ModuleAuthUpgradable](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuthUpgradable.sol/abstract.ModuleAuthUpgradable.md)

Implements ModuleAuthUpgradable but ignores the validity of the signature
should only be used during gas estimation.


## Functions
### _isValidImage

Removes the signature validation from the module, by returning true for any _imageHash


```solidity
function _isValidImage(bytes32 _imageHash) internal view virtual override(ModuleAuthUpgradable) returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|Hash image of signature|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true always|


