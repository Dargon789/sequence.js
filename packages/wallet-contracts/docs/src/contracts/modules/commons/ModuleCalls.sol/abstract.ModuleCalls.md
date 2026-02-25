# ModuleCalls
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleCalls.sol)

**Inherits:**
[IModuleCalls](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleCalls.sol/interface.IModuleCalls.md), [IModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleAuth.sol/abstract.IModuleAuth.md), [ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleOnlyDelegatecall](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleOnlyDelegatecall.sol/contract.ModuleOnlyDelegatecall.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [ModuleNonce](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleNonce.sol/contract.ModuleNonce.md)


## Functions
### execute

Allow wallet owner to execute an action

Relayers must ensure that the gasLimit specified for each transaction
is acceptable to them. A user could specify large enough that it could
consume all the gas available.


```solidity
function execute(Transaction[] calldata _txs, uint256 _nonce, bytes calldata _signature)
    external
    virtual
    override
    onlyDelegatecall;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`|       Transactions to process|
|`_nonce`|`uint256`|     Signature nonce (may contain an encoded space)|
|`_signature`|`bytes`| Encoded signature|


### selfExecute

Allow wallet to execute an action
without signing the message


```solidity
function selfExecute(Transaction[] calldata _txs) external virtual override onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`| Transactions to execute|


### _execute

Executes a list of transactions


```solidity
function _execute(bytes32 _txHash, Transaction[] calldata _txs) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txHash`|`bytes32`| Hash of the batch of transactions|
|`_txs`|`Transaction[]`| Transactions to execute|


### _revertBytes

Logs a failed transaction, reverts if the transaction is not optional


```solidity
function _revertBytes(bool _revertOnError, bytes32 _txHash, uint256 _index, bytes memory _reason) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_revertOnError`|`bool`| Signals if it should revert or just log|
|`_txHash`|`bytes32`|        Hash of the transaction|
|`_index`|`uint256`|         Index of the transaction in the batch|
|`_reason`|`bytes`|        Encoded revert message|


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


