# LibString
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/LibString.sol)

This library contains functions for manipulating strings in Solidity.


## State Variables
### ALPHABET_HEX_16

```solidity
bytes private constant ALPHABET_HEX_16 = "0123456789abcdef"
```


### ALPHABET_32

```solidity
bytes private constant ALPHABET_32 = "abcdefghijklmnopqrstuvwxyz234567"
```


## Functions
### prefixHexadecimal

Prefixes a hexadecimal string with "0x".


```solidity
function prefixHexadecimal(string memory _hex) internal pure returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hex`|`string`|The hexadecimal string to prefix.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|The prefixed hexadecimal string.|


### prefixBase32

Prefixes a base32 string with "b".


```solidity
function prefixBase32(string memory _base32) internal pure returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_base32`|`string`|The base32 string to prefix.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|The prefixed base32 string.|


### bytesToHexadecimal

Converts a byte array to a hexadecimal string.


```solidity
function bytesToHexadecimal(bytes memory _bytes) internal pure returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bytes`|`bytes`|The byte array to convert.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|The resulting hexadecimal string.|


### bytesToBase32

Converts a byte array to a base32 string.


```solidity
function bytesToBase32(bytes memory _bytes) internal pure returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_bytes`|`bytes`|The byte array to convert.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|The resulting base32 string.|


