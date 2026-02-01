# ModuleERC165
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/ModuleERC165.sol)


## Functions
### supportsInterface

Query if a contract implements an interface

Adding new hooks will not lead to them being reported by this function
without upgrading the wallet. In addition, developers must ensure that
all inherited contracts by the main module don't conflict and are accounted
to be supported by the supportsInterface method.


```solidity
function supportsInterface(bytes4 _interfaceID) public pure virtual returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_interfaceID`|`bytes4`|The interface identifier, as specified in ERC-165|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the contract implements `_interfaceID`|


