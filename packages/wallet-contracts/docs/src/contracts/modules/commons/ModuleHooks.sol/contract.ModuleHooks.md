# ModuleHooks
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleHooks.sol)

**Inherits:**
[IERC1155Receiver](/home/dargon789/wallet-contracts/docs/src/contracts/interfaces/receivers/IERC1155Receiver.sol/interface.IERC1155Receiver.md), [IERC721Receiver](/home/dargon789/wallet-contracts/docs/src/contracts/interfaces/receivers/IERC721Receiver.sol/interface.IERC721Receiver.md), [IModuleHooks](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/interfaces/IModuleHooks.sol/interface.IModuleHooks.md), [ModuleERC165](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleERC165.sol/abstract.ModuleERC165.md), [ModuleSelfAuth](/home/dargon789/wallet-contracts/docs/src/contracts/modules/commons/ModuleSelfAuth.sol/contract.ModuleSelfAuth.md)


## State Variables
### HOOKS_KEY

```solidity
bytes32 private constant HOOKS_KEY = bytes32(0xbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a120)
```


## Functions
### readHook

Reads the implementation hook of a signature


```solidity
function readHook(bytes4 _signature) external view virtual override returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the implementation hook, address(0) if none|


### addHook

Adds a new hook to handle a given function selector

Can't overwrite hooks that are part of the main module (those defined below)


```solidity
function addHook(bytes4 _signature, address _implementation) external virtual override onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function linked to the hook|
|`_implementation`|`address`|Hook implementation contract|


### removeHook

Removes a registered hook

Can't remove hooks that are part of the main module (those defined below)
without upgrading the wallet


```solidity
function removeHook(bytes4 _signature) external virtual override onlySelf;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function linked to the hook|


### _readHook

Reads the implementation hook of a signature


```solidity
function _readHook(bytes4 _signature) private view returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the implementation hook, address(0) if none|


### _writeHook

Writes the implementation hook of a signature


```solidity
function _writeHook(bytes4 _signature, address _implementation) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function|
|`_implementation`|`address`|Hook implementation contract|


### onERC1155Received

Handle the receipt of a single ERC1155 token type.


```solidity
function onERC1155Received(address, address, uint256, uint256, bytes calldata)
    external
    virtual
    override
    returns (bytes4);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes4`|`bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`|


### onERC1155BatchReceived

Handle the receipt of multiple ERC1155 token types.


```solidity
function onERC1155BatchReceived(address, address, uint256[] calldata, uint256[] calldata, bytes calldata)
    external
    virtual
    override
    returns (bytes4);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes4`|`bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`|


### onERC721Received

Handle the receipt of a single ERC721 token.


```solidity
function onERC721Received(address, address, uint256, bytes calldata) external virtual override returns (bytes4);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes4`|`bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"))`|


### fallback

Routes fallback calls through hooks


```solidity
fallback() external payable;
```

### receive

Allows the wallet to receive ETH


```solidity
receive() external payable;
```

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


