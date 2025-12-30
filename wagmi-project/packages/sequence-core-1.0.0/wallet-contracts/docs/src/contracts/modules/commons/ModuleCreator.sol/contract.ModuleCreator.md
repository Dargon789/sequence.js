# ModuleCreator
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleCreator.sol)

**Inherits:**
[IModuleCreator](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleCreator.sol/interface.IModuleCreator.md), [ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md)


## Functions
### createContract

Creates a contract forwarding eth value


```solidity
function createContract(bytes memory _code) public payable virtual override onlySelf returns (address addr);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_code`|`bytes`|Creation code of the contract|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`addr`|`address`|The address of the created contract|


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
### CreatedContract

```solidity
event CreatedContract(address _contract);
```

