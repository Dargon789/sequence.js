# SubModuleNonce
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/submodules/nonce/SubModuleNonce.sol)


## State Variables
### NONCE_BITS

```solidity
uint256 internal constant NONCE_BITS = 96
```


### NONCE_MASK

```solidity
bytes32 internal constant NONCE_MASK = bytes32(uint256(type(uint96).max))
```


## Functions
### decodeNonce

Decodes a raw nonce

Schema: space[160]:type[96]


```solidity
function decodeNonce(uint256 _rawNonce) internal pure returns (uint256 _space, uint256 _nonce);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rawNonce`|`uint256`|Nonce to be decoded|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`_space`|`uint256`|The nonce space of the raw nonce|
|`_nonce`|`uint256`|The nonce of the raw nonce|


### encodeNonce


```solidity
function encodeNonce(uint256 _space, uint256 _nonce) internal pure returns (uint256);
```

