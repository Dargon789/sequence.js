# IModuleHooks
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/commons/interfaces/IModuleHooks.sol)


## Functions
### readHook

Reads the implementation hook of a signature


```solidity
function readHook(bytes4 _signature) external view returns (address);
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


```solidity
function addHook(bytes4 _signature, address _implementation) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function linked to the hook|
|`_implementation`|`address`|Hook implementation contract|


### removeHook

Removes a registered hook


```solidity
function removeHook(bytes4 _signature) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_signature`|`bytes4`|Signature function linked to the hook|


## Events
### DefinedHook

```solidity
event DefinedHook(bytes4 _signature, address _implementation);
```

## Errors
### HookAlreadyExists

```solidity
error HookAlreadyExists(bytes4 _signature);
```

### HookDoesNotExist

```solidity
error HookDoesNotExist(bytes4 _signature);
```

