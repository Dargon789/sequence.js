# ModuleIgnoreNonceCalls
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/gas-estimation/ModuleIgnoreNonceCalls.sol)

**Inherits:**
[ModuleCalls](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleCalls.sol/abstract.ModuleCalls.md)

Implements ModuleCalls but ignores the validity of the nonce
should only be used during gas estimation.


## Functions
### _validateNonce

Verify if a nonce is valid


```solidity
function _validateNonce(uint256 _rawNonce) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rawNonce`|`uint256`|Nonce to validate (may contain an encoded space)|


