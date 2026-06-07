# GuestModule
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/GuestModule.sol)

**Inherits:**
[ModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuth.sol/abstract.ModuleAuth.md), [ModuleCalls](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCalls.sol/abstract.ModuleCalls.md), [ModuleCreator](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCreator.sol/contract.ModuleCreator.md)

GuestModule implements a Sequence wallet without signatures, nonce or replay protection.
executing transactions using this wallet is not an authenticated process, and can be done by any address.

This contract is completely public with no security, designed to execute pre-signed transactions
and use Sequence tools without using the wallets.


## Functions
### execute

Allow any caller to execute an action


```solidity
function execute(Transaction[] calldata _txs, uint256, bytes calldata) public override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`|Transactions to process|
|`<none>`|`uint256`||
|`<none>`|`bytes`||


### selfExecute

Allow any caller to execute an action


```solidity
function selfExecute(Transaction[] calldata _txs) public override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`|Transactions to process|


### _executeGuest

Executes a list of transactions


```solidity
function _executeGuest(bytes32 _txHash, Transaction[] calldata _txs) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txHash`|`bytes32`| Hash of the batch of transactions|
|`_txs`|`Transaction[]`| Transactions to execute|


### _isValidImage

Validates any signature image, because the wallet is public and has no owner.


```solidity
function _isValidImage(bytes32) internal pure override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true, all signatures are valid.|


### _updateImageHash

Not supported.


```solidity
function _updateImageHash(bytes32) internal virtual override;
```

### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID)
    public
    pure
    override(ModuleAuth, ModuleCalls, ModuleCreator)
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


## Errors
### DelegateCallNotAllowed

```solidity
error DelegateCallNotAllowed(uint256 _index);
```

### NotSupported

```solidity
error NotSupported();
```

