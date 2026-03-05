# LibBytesPointer
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/LibBytesPointer.sol)

**Author:**
Agustin Aguilar (aa@horizon.io)

This library contains functions for reading data from bytes arrays with a pointer.

These functions do not check if the input index is within the bounds of the data array.
Reading out of bounds may return dirty values.


## Functions
### readFirstUint16

Returns the first uint16 value in the input data and updates the pointer.


```solidity
function readFirstUint16(bytes calldata _data) internal pure returns (uint16 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint16`|The first uint16 value.|
|`newPointer`|`uint256`|The new pointer.|


### readUint8

Returns the uint8 value at the given index in the input data and updates the pointer.


```solidity
function readUint8(bytes calldata _data, uint256 _index) internal pure returns (uint8 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint8`|The uint8 value at the given index.|
|`newPointer`|`uint256`|The new pointer.|


### readAddress


```solidity
function readAddress(bytes calldata _data, uint256 _index) internal pure returns (address a, uint256 newPointer);
```

### readUint8Address

Returns the uint8 value and the address at the given index in the input data and updates the pointer.


```solidity
function readUint8Address(bytes calldata _data, uint256 _index)
    internal
    pure
    returns (uint8 a, address b, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint8`|The uint8 value at the given index.|
|`b`|`address`|The following address value.|
|`newPointer`|`uint256`|The new pointer.|


### readUint16

Returns the uint16 value at the given index in the input data and updates the pointer.


```solidity
function readUint16(bytes calldata _data, uint256 _index) internal pure returns (uint16 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint16`|The uint16 value at the given index.|
|`newPointer`|`uint256`|The new pointer.|


### readUintX


```solidity
function readUintX(bytes calldata _data, uint256 _bytes, uint256 _index)
    internal
    pure
    returns (uint256 a, uint256 newPointer);
```

### readUint24

Returns the uint24 value at the given index in the input data and updates the pointer.


```solidity
function readUint24(bytes calldata _data, uint256 _index) internal pure returns (uint24 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint24`|The uint24 value at the given index.|
|`newPointer`|`uint256`|The new pointer.|


### readUint64

Returns the uint64 value at the given index in the input data and updates the pointer.


```solidity
function readUint64(bytes calldata _data, uint256 _index) internal pure returns (uint64 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_index`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`uint64`|The uint64 value at the given index.|
|`newPointer`|`uint256`|The new pointer.|


### readBytes4


```solidity
function readBytes4(bytes calldata _data, uint256 _pointer) internal pure returns (bytes4 a, uint256 newPointer);
```

### readBytes32

Returns the bytes32 value at the given index in the input data and updates the pointer.


```solidity
function readBytes32(bytes calldata _data, uint256 _pointer) internal pure returns (bytes32 a, uint256 newPointer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|The input data.|
|`_pointer`|`uint256`|The index of the value to retrieve.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`a`|`bytes32`|The bytes32 value at the given index.|
|`newPointer`|`uint256`|The new pointer.|


