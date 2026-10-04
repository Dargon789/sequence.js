# IModuleAuth
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/interfaces/IModuleAuth.sol)


## State Variables
### IMAGE_HASH_KEY

```solidity
bytes32 internal constant IMAGE_HASH_KEY =
    bytes32(0xea7157fa25e3aa17d0ae2d5280fa4e24d421c61842aa85e45194e1145aa72bf8)
```


## Functions
### _signatureValidation


```solidity
function _signatureValidation(bytes32 _digest, bytes calldata _signature)
    internal
    view
    virtual
    returns (bool isValid, bytes32 subdigest);
```

### signatureRecovery


```solidity
function signatureRecovery(bytes32 _digest, bytes calldata _signature)
    public
    view
    virtual
    returns (uint256 threshold, uint256 weight, bytes32 imageHash, bytes32 subdigest, uint256 checkpoint);
```

### _isValidImage

Validates the signature image


```solidity
function _isValidImage(bytes32) internal view virtual returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the signature image is valid|


### updateImageHash

Updates the signers configuration of the wallet


```solidity
function updateImageHash(bytes32 _imageHash) external virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|New required image hash of the signature|


### _updateImageHash

Updates the signers configuration of the wallet


```solidity
function _updateImageHash(bytes32 _imageHash) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|New required image hash of the signature|


## Events
### ImageHashUpdated

```solidity
event ImageHashUpdated(bytes32 newImageHash);
```

## Errors
### ImageHashIsZero

```solidity
error ImageHashIsZero();
```

### InvalidSignatureType

```solidity
error InvalidSignatureType(bytes1 _type);
```

