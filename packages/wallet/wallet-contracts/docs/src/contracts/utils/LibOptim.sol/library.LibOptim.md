# LibOptim
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/LibOptim.sol)

**Author:**
Agustin Aguilar (aa@horizon.io)

This library contains functions for optimizing certain EVM operations.


## Functions
### fkeccak256

Computes the keccak256 hash of two 32-byte inputs.

It uses only scratch memory space.


```solidity
function fkeccak256(bytes32 _a, bytes32 _b) internal pure returns (bytes32 c);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_a`|`bytes32`|The first 32 bytes of the hash.|
|`_b`|`bytes32`|The second 32 bytes of the hash.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`c`|`bytes32`|The keccak256 hash of the two 32-byte inputs.|


### returnData

Returns the return data from the last call.


```solidity
function returnData() internal pure returns (bytes memory r);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`r`|`bytes`|The return data from the last call.|


### call

Calls another contract with the given parameters.

This method doesn't increase the memory pointer.


```solidity
function call(address _to, uint256 _val, uint256 _gas, bytes calldata _data) internal returns (bool r);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|The address of the contract to call.|
|`_val`|`uint256`|The value to send to the contract.|
|`_gas`|`uint256`|The amount of gas to provide for the call.|
|`_data`|`bytes`|The data to send to the contract.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`r`|`bool`|The success status of the call.|


### delegatecall

Calls another contract with the given parameters, using delegatecall.

This method doesn't increase the memory pointer.


```solidity
function delegatecall(address _to, uint256 _gas, bytes calldata _data) internal returns (bool r);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_to`|`address`|The address of the contract to call.|
|`_gas`|`uint256`|The amount of gas to provide for the call.|
|`_data`|`bytes`|The data to send to the contract.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`r`|`bool`|The success status of the call.|


