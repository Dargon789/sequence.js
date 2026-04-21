# TrustFactory
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/trust/TrustFactory.sol)


## Functions
### trustCreationCode


```solidity
function trustCreationCode() external pure returns (bytes memory);
```

### addressOf


```solidity
function addressOf(address _owner, address _beneficiary, uint256 _duration) external view returns (address);
```

### deploy


```solidity
function deploy(address _owner, address _beneficiary, uint256 _duration) external returns (Trust);
```

