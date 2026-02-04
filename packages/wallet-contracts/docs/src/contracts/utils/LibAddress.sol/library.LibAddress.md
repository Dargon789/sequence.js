# LibAddress
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/utils/LibAddress.sol)


## Functions
### isContract

Will return true if provided address is a contract

This contract will return false if called within the constructor of
a contract's deployment, as the code is not yet stored on-chain.


```solidity
function isContract(address account) internal view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|Address to verify if contract or not|


