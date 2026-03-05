# ModuleAuth
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleAuth.sol)

**Inherits:**
[IModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleAuth.sol/abstract.IModuleAuth.md), [ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [IERC1271Wallet](/home/dargon789/wallet-contracts/docs/src/contracts/interfaces/IERC1271Wallet.sol/interface.IERC1271Wallet.md), [SequenceChainedSig](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/submodules/auth/SequenceChainedSig.sol/abstract.SequenceChainedSig.md)


## State Variables
### LEGACY_TYPE

```solidity
bytes1 internal constant LEGACY_TYPE = hex"00"
```


### DYNAMIC_TYPE

```solidity
bytes1 internal constant DYNAMIC_TYPE = hex"01"
```


### NO_CHAIN_ID_TYPE

```solidity
bytes1 internal constant NO_CHAIN_ID_TYPE = hex"02"
```


### CHAINED_TYPE

```solidity
bytes1 internal constant CHAINED_TYPE = hex"03"
```


### SELECTOR_ERC1271_BYTES_BYTES

```solidity
bytes4 internal constant SELECTOR_ERC1271_BYTES_BYTES = 0x20c13b0b
```


### SELECTOR_ERC1271_BYTES32_BYTES

```solidity
bytes4 internal constant SELECTOR_ERC1271_BYTES32_BYTES = 0x1626ba7e
```


## Functions
### signatureRecovery

Recovers the threshold, weight, imageHash, subdigest, and checkpoint of a signature.

The signature must be prefixed with a type byte, which is used to determine the recovery method.


```solidity
function signatureRecovery(bytes32 _digest, bytes calldata _signature)
    public
    view
    virtual
    override
    returns (uint256 threshold, uint256 weight, bytes32 imageHash, bytes32 subdigest, uint256 checkpoint);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_digest`|`bytes32`|Digest of the signed data.|
|`_signature`|`bytes`|A Sequence signature.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`threshold`|`uint256`|The required number of signatures needed to consider the signature valid.|
|`weight`|`uint256`|The actual number of signatures collected in the signature.|
|`imageHash`|`bytes32`|The imageHash of the configuration that signed the message.|
|`subdigest`|`bytes32`|A modified version of the original digest, unique for each wallet/network.|
|`checkpoint`|`uint256`|A nonce that is incremented every time a new configuration is set.|


### _signatureValidation

Validates a signature.


```solidity
function _signatureValidation(bytes32 _digest, bytes calldata _signature)
    internal
    view
    virtual
    override
    returns (bool isValid, bytes32 subdigest);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_digest`|`bytes32`|Digest of the signed data.|
|`_signature`|`bytes`|A Sequence signature.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`isValid`|`bool`|Indicates whether the signature is valid or not.|
|`subdigest`|`bytes32`|A modified version of the original digest, unique for each wallet/network.|


### isValidSignature

Verifies whether the provided signature is valid with respect to the provided data

MUST return the correct magic value if the signature provided is valid for the provided data
> The bytes4 magic value to return when signature is valid is 0x20c13b0b : bytes4(keccak256("isValidSignature(bytes,bytes)"))


```solidity
function isValidSignature(bytes calldata _data, bytes calldata _signatures)
    public
    view
    virtual
    override
    returns (bytes4);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_data`|`bytes`|      Arbitrary length data signed on the behalf of address(this)|
|`_signatures`|`bytes`|Signature byte array associated with _data. Encoded as abi.encode(Signature[], Configs)|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes4`|magicValue Magic value 0x20c13b0b if the signature is valid and 0x0 otherwise|


### isValidSignature

Verifies whether the provided signature is valid with respect to the provided hash

MUST return the correct magic value if the signature provided is valid for the provided hash
> The bytes4 magic value to return when signature is valid is 0x1626ba7e : bytes4(keccak256("isValidSignature(bytes32,bytes)"))


```solidity
function isValidSignature(bytes32 _hash, bytes calldata _signatures) public view virtual override returns (bytes4);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_hash`|`bytes32`|      keccak256 hash that was signed|
|`_signatures`|`bytes`|Signature byte array associated with _data. Encoded as abi.encode(Signature[], Configs)|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes4`|magicValue Magic value 0x1626ba7e if the signature is valid and 0x0 otherwise|


### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID) public pure virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceID`|`bytes4`|The interface identifier, as specified in ERC-165|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the contract implements `_interfaceID`|


### updateImageHash

Updates the signers configuration of the wallet


```solidity
function updateImageHash(bytes32 _imageHash) external virtual override onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|New required image hash of the signature|


