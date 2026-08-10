# SequenceChainedSig
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/submodules/auth/SequenceChainedSig.sol)

**Inherits:**
[IModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleAuth.sol/abstract.IModuleAuth.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md)

**Author:**
Agustin Aguilar (aa@horizon.io)

Defines Sequence signatures that work by delegating control to new configurations.

The delegations can be chained together, the first signature is the one that is used to validate
the message, the last signature must match the current on-chain configuration of the wallet.


## State Variables
### SET_IMAGE_HASH_TYPE_HASH

```solidity
bytes32 public constant SET_IMAGE_HASH_TYPE_HASH = keccak256("SetImageHash(bytes32 imageHash)")
```


## Functions
### _hashSetImageHashStruct

Defined the special token that must be signed to delegate control to a new configuration.


```solidity
function _hashSetImageHashStruct(bytes32 _imageHash) internal pure returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|The hash of the new configuration.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 The message hash to be signed.|


### chainedRecover

Returns the threshold, weight, root, and checkpoint of a (chained) signature.

This method return the `threshold`, `weight` and `imageHash` of the last signature in the chain.
Intermediate signatures are validated directly in this method. The `subdigest` is the one of the
first signature in the chain (since that's the one that is used to validate the message).


```solidity
function chainedRecover(bytes32 _digest, bytes calldata _signature)
    internal
    view
    returns (uint256 threshold, uint256 weight, bytes32 imageHash, bytes32 subdigest, uint256 checkpoint);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_digest`|`bytes32`|The digest to recover the signature from.|
|`_signature`|`bytes`|The signature to recover.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`threshold`|`uint256`|The threshold of the (last) signature.|
|`weight`|`uint256`|The weight of the (last) signature.|
|`imageHash`|`bytes32`|The image hash of the (last) signature.|
|`subdigest`|`bytes32`|The subdigest of the (first) signature in the chain.|
|`checkpoint`|`uint256`|The checkpoint of the (last) signature.|


## Errors
### LowWeightChainedSignature

```solidity
error LowWeightChainedSignature(bytes _signature, uint256 threshold, uint256 _weight);
```

### WrongChainedCheckpointOrder

```solidity
error WrongChainedCheckpointOrder(uint256 _current, uint256 _prev);
```

