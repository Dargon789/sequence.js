# ModuleAuthUpgradable
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleAuthUpgradable.sol)

**Inherits:**
[IModuleAuthUpgradable](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleAuthUpgradable.sol/interface.IModuleAuthUpgradable.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [ModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuth.sol/abstract.ModuleAuth.md)


## Functions
### _updateImageHash

Updates the signers configuration of the wallet


```solidity
function _updateImageHash(bytes32 _imageHash) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|New required image hash of the signature|


### imageHash

Returns the current image hash of the wallet


```solidity
function imageHash() external view virtual override returns (bytes32);
```

### _isValidImage

Validates the signature image with a valid image hash defined
in the contract storage


```solidity
function _isValidImage(bytes32 _imageHash) internal view virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|Hash image of signature|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the signature image is valid|


### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID) public pure virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceID`|`bytes4`|The interface identifier, as specified in ERC-165|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the contract implements `_interfaceID`|


