# SequenceDynamicSig
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/submodules/auth/SequenceDynamicSig.sol)


## Functions
### recover

Recover a "dynamically encoded" Sequence signature.

The Signature is stripped of the first byte, which is the encoding flag.


```solidity
function recover(bytes32 _subdigest, bytes calldata _signature)
    internal
    view
    returns (uint256 threshold, uint256 weight, bytes32 imageHash, uint256 checkpoint);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_subdigest`|`bytes32`|The digest of the signature.|
|`_signature`|`bytes`|The Sequence signature.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`threshold`|`uint256`|The threshold weight required to validate the signature.|
|`weight`|`uint256`|The weight of the signature.|
|`imageHash`|`bytes32`|The hash of the recovered configuration.|
|`checkpoint`|`uint256`|The checkpoint of the configuration.|


