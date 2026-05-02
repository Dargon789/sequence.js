# IModuleCalls
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/interfaces/IModuleCalls.sol)


## Functions
### execute

Allow wallet owner to execute an action


```solidity
function execute(Transaction[] calldata _txs, uint256 _nonce, bytes calldata _signature) external;
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
function selfExecute(Transaction[] calldata _txs) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_txs`|`Transaction[]`| Transactions to execute|


## Events
### TxFailed

```solidity
event TxFailed(bytes32 indexed _tx, uint256 _index, bytes _reason);
```

### TxExecuted

```solidity
event TxExecuted(bytes32 indexed _tx, uint256 _index);
```

## Errors
### NotEnoughGas

```solidity
error NotEnoughGas(uint256 _index, uint256 _requested, uint256 _available);
```

### InvalidSignature

```solidity
error InvalidSignature(bytes32 _hash, bytes _signature);
```

## Structs
### Transaction

```solidity
struct Transaction {
    bool delegateCall; // Performs delegatecall
    bool revertOnError; // Reverts transaction bundle if tx fails
    uint256 gasLimit; // Maximum gas to be forwarded
    address target; // Address of the contract to call
    uint256 value; // Amount of ETH to pass with the call
    bytes data; // calldata to pass
}
```

