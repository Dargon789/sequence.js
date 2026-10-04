# MainModule
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/MainModule.sol)

**Inherits:**
[ModuleAuthFixed](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuthFixed.sol/abstract.ModuleAuthFixed.md), [ModuleExtraAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleExtraAuth.sol/abstract.ModuleExtraAuth.md), [ModuleCalls](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCalls.sol/abstract.ModuleCalls.md), [ModuleHooks](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleHooks.sol/contract.ModuleHooks.md), [ModuleCreator](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCreator.sol/contract.ModuleCreator.md), [ModuleAuthConvenience](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuthConvenience.sol/abstract.ModuleAuthConvenience.md)

Contains the core functionality Sequence wallets will inherit.

If using a new main module, developers must ensure that all inherited
contracts by the main module don't conflict and are accounted for to be
supported by the supportsInterface method.


## Functions
### constructor


```solidity
constructor(address _factory, address _mainModuleUpgradable) ModuleAuthFixed(_factory, _mainModuleUpgradable);
```

### _isValidImage


```solidity
function _isValidImage(bytes32 _imageHash)
    internal
    view
    override(IModuleAuth, ModuleAuthFixed, ModuleExtraAuth)
    returns (bool);
```

### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID)
    public
    pure
    override(ModuleAuthFixed, ModuleAuthConvenience, ModuleCalls, ModuleExtraAuth, ModuleHooks, ModuleCreator)
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceID`|`bytes4`|The interface identifier, as specified in ERC-165|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the contract implements `_interfaceID`|


