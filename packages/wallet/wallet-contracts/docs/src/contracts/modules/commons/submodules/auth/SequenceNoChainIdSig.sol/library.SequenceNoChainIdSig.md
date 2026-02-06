# SequenceNoChainIdSig
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/submodules/auth/SequenceNoChainIdSig.sol)


## Functions
### subdigest

Computes a subdigest for a Sequence signature that works on all chains.

The subdigest is computed by removing the chain ID from the digest (using 0 instead).


```solidity
function subdigest(bytes32 _digest) internal view returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_digest`|`bytes32`|The digest of the chain of signatures.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|bytes32 The subdigest with no chain ID.|


