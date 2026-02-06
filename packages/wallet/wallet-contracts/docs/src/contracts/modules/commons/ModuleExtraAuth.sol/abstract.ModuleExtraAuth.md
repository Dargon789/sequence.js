# ModuleExtraAuth
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleExtraAuth.sol)

**Inherits:**
[ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [ModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuth.sol/abstract.ModuleAuth.md)


## State Variables
### EXTRA_IMAGE_HASH_KEY

```solidity
bytes32 private constant EXTRA_IMAGE_HASH_KEY =
    bytes32(0x849e7bdc245db17e50b9f43086f1914d70eb4dab6dd89af4d541d53353ad97de)
```


## Functions
### _writeExpirationForImageHash


```solidity
function _writeExpirationForImageHash(bytes32 _imageHash, uint256 _expiration) internal;
```

### _readExpirationForImageHash


```solidity
function _readExpirationForImageHash(bytes32 _imageHash) internal view returns (uint256 _expiration);
```

### _isValidImage


```solidity
function _isValidImage(bytes32 _imageHash) internal view virtual override returns (bool);
```

### extraImageHash


```solidity
function extraImageHash(bytes32 _imageHash) public view returns (uint256);
```

### setExtraImageHash


```solidity
function setExtraImageHash(bytes32 _imageHash, uint256 _expiration) external onlySelf;
```

### clearExtraImageHashes


```solidity
function clearExtraImageHashes(bytes32[] calldata _imageHashes) external onlySelf;
```

### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID)
    public
    pure
    virtual
    override(ModuleERC165, ModuleAuth)
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceID`|`bytes4`|The interface identifier, as specified in ERC-165|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the contract implements `_interfaceID`|


## Events
### SetExtraImageHash

```solidity
event SetExtraImageHash(bytes32 indexed _imageHash, uint256 _expiration);
```

