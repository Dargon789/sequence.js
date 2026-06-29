# ModuleAuthConvenience
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleAuthConvenience.sol)

**Inherits:**
[ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md), [ModuleAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleAuth.sol/abstract.ModuleAuth.md), [ModuleIPFS](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleIPFS.sol/contract.ModuleIPFS.md)


## Functions
### updateImageHashAndIPFS

Updates the image hash and the IPFS root in a single operation.

These two operations are often performed together, so this function
allows to save some gas by performing them in a single step.


```solidity
function updateImageHashAndIPFS(bytes32 _imageHash, bytes32 _ipfsRoot) external onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_imageHash`|`bytes32`|The new image hash to be set.|
|`_ipfsRoot`|`bytes32`|The new IPFS root to be set.|


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


