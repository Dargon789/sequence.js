# ModuleNonce
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleNonce.sol)


## State Variables
### NONCE_KEY

```solidity
bytes32 private constant NONCE_KEY = bytes32(0x8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e)
```


## Functions
### nonce

Returns the next nonce of the default nonce space

The default nonce space is 0x00


```solidity
function nonce() external view virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The next nonce|


### readNonce

Returns the next nonce of the given nonce space


```solidity
function readNonce(uint256 _space) public view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_space`|`uint256`|Nonce space, each space keeps an independent nonce count|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The next nonce|


### _writeNonce

Changes the next nonce of the given nonce space


```solidity
function _writeNonce(uint256 _space, uint256 _nonce) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_space`|`uint256`|Nonce space, each space keeps an independent nonce count|
|`_nonce`|`uint256`|Nonce to write on the space|


### _validateNonce

Verify if a nonce is valid


```solidity
function _validateNonce(uint256 _rawNonce) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rawNonce`|`uint256`|Nonce to validate (may contain an encoded space)|


## Events
### NonceChange

```solidity
event NonceChange(uint256 _space, uint256 _newNonce);
```

## Errors
### BadNonce

```solidity
error BadNonce(uint256 _space, uint256 _provided, uint256 _current);
```

