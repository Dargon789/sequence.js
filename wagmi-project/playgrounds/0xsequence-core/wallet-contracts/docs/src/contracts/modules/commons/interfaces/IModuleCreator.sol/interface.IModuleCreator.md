# IModuleCreator
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/interfaces/IModuleCreator.sol)


## Functions
### createContract

Creates a contract forwarding eth value


```solidity
function createContract(bytes calldata _code) external payable returns (address addr);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_code`|`bytes`|Creation code of the contract|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`addr`|`address`|The address of the created contract|


## Errors
### CreateFailed

```solidity
error CreateFailed(bytes _code);
```

