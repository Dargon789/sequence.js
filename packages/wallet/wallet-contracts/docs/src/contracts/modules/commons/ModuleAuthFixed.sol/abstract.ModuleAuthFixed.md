# ModuleAuthFixed
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleAuthFixed.sol)

**Inherits:**
[ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [ModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuth.sol/abstract.ModuleAuth.md), [ModuleUpdate](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleUpdate.sol/contract.ModuleUpdate.md)

Implements ModuleAuth by validating the signature image against
the salt used to deploy the contract
This module allows wallets to be deployed with a default configuration
without using any aditional contract storage


## State Variables
### INIT_CODE_HASH

```solidity
bytes32 public immutable INIT_CODE_HASH
```


### FACTORY

```solidity
address public immutable FACTORY
```


### UPGRADEABLE_IMPLEMENTATION

```solidity
address public immutable UPGRADEABLE_IMPLEMENTATION
```


## Functions
### constructor


```solidity
constructor(address _factory, address _mainModuleUpgradeable) ;
```

### _updateImageHash

Updates the configuration of the wallet

In the process of updating the configuration, the wallet implementation
is updated to the mainModuleUpgradeable, this only happens once in the
lifetime of the wallet.


```solidity
function _updateImageHash(bytes32 _imageHash) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|New required image hash of the signature|


### _isValidImage

Validates the signature image with the salt used to deploy the contract


```solidity
function _isValidImage(bytes32 _imageHash) internal view virtual override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|Hash image of signature|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the signature image is valid|


### supportsInterface

Query if a contract implements an interface


```solidity
function supportsInterface(bytes4 _interfaceID)
    public
    pure
    virtual
    override(ModuleAuth, ModuleUpdate)
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


