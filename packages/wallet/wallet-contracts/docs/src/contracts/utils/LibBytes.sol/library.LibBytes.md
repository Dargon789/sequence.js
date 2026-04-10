# LibBytes
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/LibBytes.sol)

**Author:**
Agustin Aguilar (aa@horizon.io)

This library contains functions for reading data from bytes arrays.

These functions do not check if the input index is within the bounds of the data array.
Reading out of bounds may return dirty values.


## Functions
### readBytes32

Returns the bytes32 value at the given index in the input data.


```solidity
function readBytes32(bytes calldata data, uint256 index) internal pure returns (bytes32 a);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|The input data.|
|`index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`bytes32`|The bytes32 value at the given index.|


### readUint8

Returns the uint8 value at the given index in the input data.


```solidity
function readUint8(bytes calldata data, uint256 index) internal pure returns (uint8 a);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|The input data.|
|`index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint8`|The uint8 value at the given index.|


### readFirstUint16

Returns the first uint16 value in the input data.


```solidity
function readFirstUint16(bytes calldata data) internal pure returns (uint16 a);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|The input data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint16`|The first uint16 value in the input data.|


### readUint32

Returns the uint32 value at the given index in the input data.


```solidity
function readUint32(bytes calldata data, uint256 index) internal pure returns (uint32 a);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes`|The input data.|
|`index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint32`|The uint32 value at the given index.|


### readMBytes4


```solidity
function readMBytes4(bytes memory data, uint256 index) internal pure returns (bytes4 a);
```

### readMBytes32


```solidity
function readMBytes32(bytes memory data, uint256 index) internal pure returns (bytes32 a);
```

