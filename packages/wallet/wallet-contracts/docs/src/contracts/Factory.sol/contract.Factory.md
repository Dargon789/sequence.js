# Factory
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/Factory.sol)


## Functions
### deploy

Will deploy a new wallet instance

It is recommended to not have more than 200 signers as opcode repricing
could make transactions impossible to execute as all the signers must be
passed for each transaction.


```solidity
function deploy(address _mainModule, bytes32 _salt) public payable returns (address _contract);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_mainModule`|`address`|Address of the main module to be used by the wallet|
|`_salt`|`bytes32`|Salt used to generate the wallet, which is the imageHash of the wallet's configuration.|


## Errors
### DeployFailed

```solidity
error DeployFailed(address _mainModule, bytes32 _salt);
```

