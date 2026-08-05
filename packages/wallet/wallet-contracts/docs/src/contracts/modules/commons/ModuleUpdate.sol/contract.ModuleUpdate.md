# ModuleUpdate
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleUpdate.sol)

**Inherits:**
[IModuleUpdate](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleUpdate.sol/abstract.IModuleUpdate.md), [ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [Implementation](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/Implementation.sol/contract.Implementation.md)


## Functions
### updateImplementation

Updates the implementation of the base wallet

WARNING Updating the implementation can brick the wallet


```solidity
function updateImplementation(address _implementation) external virtual override onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|New main module implementation|


### _updateImplementation

Updates the implementation of the base wallet, used internally.

WARNING Updating the implementation can brick the wallet


```solidity
function _updateImplementation(address _implementation) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|New main module implementation|


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


## Events
### ImplementationUpdated

```solidity
event ImplementationUpdated(address newImplementation);
```

