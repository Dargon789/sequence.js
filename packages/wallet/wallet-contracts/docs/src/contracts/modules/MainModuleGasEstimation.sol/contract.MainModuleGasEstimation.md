# MainModuleGasEstimation
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/MainModuleGasEstimation.sol)

**Inherits:**
[ModuleIgnoreAuthUpgradable](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/gas-estimation/ModuleIgnoreAuthUpgradable.sol/abstract.ModuleIgnoreAuthUpgradable.md), [ModuleIgnoreNonceCalls](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/gas-estimation/ModuleIgnoreNonceCalls.sol/abstract.ModuleIgnoreNonceCalls.md), [ModuleUpdate](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleUpdate.sol/contract.ModuleUpdate.md), [ModuleHooks](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleHooks.sol/contract.ModuleHooks.md), [ModuleCreator](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCreator.sol/contract.ModuleCreator.md)

Contains an alternative implementation of the MainModules that skips validation of
signatures, this implementation SHOULD NOT be used directly on a wallet.
Intended to be used only for gas estimation, using eth_call and overrides.


## Functions
### simulateExecute

Simulate each transaction in a bundle for gas usage and execution result


```solidity
function simulateExecute(Transaction[] calldata _txs) public virtual returns (SimulateResult[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`|Transactions to process|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`SimulateResult[]`|The gas used and execution result for each transaction in the bundle|


### _isValidImage


```solidity
function _isValidImage(bytes32 _imageHash)
    internal
    view
    override(IModuleAuth, ModuleIgnoreAuthUpgradable)
    returns (bool);
```

### supportsInterface

Query if a contract implements an interface

If using a new main module, developers must ensure that all inherited
contracts by the main module don't conflict and are accounted for to be
supported by the supportsInterface method.


```solidity
function supportsInterface(bytes4 _interfaceID)
    public
    pure
    override(ModuleAuthUpgradable, ModuleCalls, ModuleUpdate, ModuleHooks, ModuleCreator)
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


## Structs
### SimulateResult

```solidity
struct SimulateResult {
    bool executed;
    bool succeeded;
    bytes result;
    uint256 gasUsed;
}
```

