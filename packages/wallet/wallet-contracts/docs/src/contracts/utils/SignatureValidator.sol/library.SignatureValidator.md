# SignatureValidator
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/SignatureValidator.sol)

Contains logic for signature validation.
Signatures from wallet contracts assume ERC-1271 support (https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1271.md)
Notes: Methods are strongly inspired by contracts in https://github.com/0xProject/0x-monorepo/blob/development/


## State Variables
### ERC1271_MAGICVALUE
|
|             Variables             |
|__________________________________


```solidity
bytes4 internal constant ERC1271_MAGICVALUE = 0x20c13b0b
```


### ERC1271_MAGICVALUE_BYTES32

```solidity
bytes4 internal constant ERC1271_MAGICVALUE_BYTES32 = 0x1626ba7e
```


### SIG_TYPE_EIP712

```solidity
uint256 private constant SIG_TYPE_EIP712 = 1
```


### SIG_TYPE_ETH_SIGN

```solidity
uint256 private constant SIG_TYPE_ETH_SIGN = 2
```


### SIG_TYPE_WALLET_BYTES32

```solidity
uint256 private constant SIG_TYPE_WALLET_BYTES32 = 3
```


## Functions
### recoverSigner

|
|        Signature Functions        |
|__________________________________

Recover the signer of hash, assuming it's an EOA account

Only for SignatureType.EIP712 and SignatureType.EthSign signatures


```solidity
function recoverSigner(bytes32 _hash, bytes calldata _signature) internal pure returns (address signer);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hash`|`bytes32`|     Hash that was signed encoded as (bytes32 r, bytes32 s, uint8 v, ... , SignatureType sigType)|
|`_signature`|`bytes`||


### isValidSignature

Returns true if the provided signature is valid for the given signer.

Supports SignatureType.EIP712, SignatureType.EthSign, and ERC1271 signatures


```solidity
function isValidSignature(bytes32 _hash, address _signer, bytes calldata _signature)
    internal
    view
    returns (bool valid);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hash`|`bytes32`|     Hash that was signed|
|`_signer`|`address`|   Address of the signer candidate|
|`_signature`|`bytes`|Signature byte array|


## Errors
### InvalidSignatureLength

```solidity
error InvalidSignatureLength(bytes _signature);
```

### EmptySignature

```solidity
error EmptySignature();
```

### InvalidSValue

```solidity
error InvalidSValue(bytes _signature, bytes32 _s);
```

### InvalidVValue

```solidity
error InvalidVValue(bytes _signature, uint256 _v);
```

### UnsupportedSignatureType

```solidity
error UnsupportedSignatureType(bytes _signature, uint256 _type, bool _recoverMode);
```

### SignerIsAddress0

```solidity
error SignerIsAddress0(bytes _signature);
```

