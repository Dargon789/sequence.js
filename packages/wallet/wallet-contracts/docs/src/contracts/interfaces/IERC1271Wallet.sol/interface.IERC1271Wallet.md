# IERC1271Wallet
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/interfaces/IERC1271Wallet.sol)


## Functions
### isValidSignature

Verifies whether the provided signature is valid with respect to the provided data

MUST return the correct magic value if the signature provided is valid for the provided data
> The bytes4 magic value to return when signature is valid is 0x20c13b0b : bytes4(keccak256("isValidSignature(bytes,bytes)")
> This function MAY modify Ethereum's state


```solidity
function isValidSignature(bytes calldata _data, bytes calldata _signature) external view returns (bytes4 magicValue);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|      Arbitrary length data signed on the behalf of address(this)|
|`_signature`|`bytes`| Signature byte array associated with _data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`magicValue`|`bytes4`|Magic value 0x20c13b0b if the signature is valid and 0x0 otherwise|


### isValidSignature

Verifies whether the provided signature is valid with respect to the provided hash

MUST return the correct magic value if the signature provided is valid for the provided hash
> The bytes4 magic value to return when signature is valid is 0x20c13b0b : bytes4(keccak256("isValidSignature(bytes,bytes)")
> This function MAY modify Ethereum's state


```solidity
function isValidSignature(bytes32 _hash, bytes calldata _signature) external view returns (bytes4 magicValue);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hash`|`bytes32`|      keccak256 hash that was signed|
|`_signature`|`bytes`| Signature byte array associated with _data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`magicValue`|`bytes4`|Magic value 0x20c13b0b if the signature is valid and 0x0 otherwise|


