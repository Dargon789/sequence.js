# MultiCallUtils
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/utils/MultiCallUtils.sol)


## Functions
### multiCall


```solidity
function multiCall(IModuleCalls.Transaction[] memory _txs)
    public
    payable
    returns (bool[] memory _successes, bytes[] memory _results);
```

### callBlockhash


```solidity
function callBlockhash(uint256 _i) external view returns (bytes32);
```

### callCoinbase


```solidity
function callCoinbase() external view returns (address);
```

### callDifficulty


```solidity
function callDifficulty() external view returns (uint256);
```

### callPrevrandao


```solidity
function callPrevrandao() external view returns (uint256);
```

### callGasLimit


```solidity
function callGasLimit() external view returns (uint256);
```

### callBlockNumber


```solidity
function callBlockNumber() external view returns (uint256);
```

### callTimestamp


```solidity
function callTimestamp() external view returns (uint256);
```

### callGasLeft


```solidity
function callGasLeft() external view returns (uint256);
```

### callGasPrice


```solidity
function callGasPrice() external view returns (uint256);
```

### callOrigin


```solidity
function callOrigin() external view returns (address);
```

### callBalanceOf


```solidity
function callBalanceOf(address _addr) external view returns (uint256);
```

### callCodeSize


```solidity
function callCodeSize(address _addr) external view returns (uint256 size);
```

### callCode


```solidity
function callCode(address _addr) external view returns (bytes memory code);
```

### callCodeHash


```solidity
function callCodeHash(address _addr) external view returns (bytes32 codeHash);
```

### callChainId


```solidity
function callChainId() external view returns (uint256 id);
```

## Errors
### DelegateCallNotAllowed

```solidity
error DelegateCallNotAllowed(uint256 _index);
```

### CallReverted

```solidity
error CallReverted(uint256 _index, bytes _result);
```

