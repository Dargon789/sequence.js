# ERC20Mock
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/mocks/ERC20Mock.sol)


## State Variables
### name

```solidity
string public name = "Mock ERC20 Token"
```


### symbol

```solidity
string public symbol = "MERC20"
```


### decimals

```solidity
uint8 public decimals = 18
```


### totalSupply

```solidity
uint256 public totalSupply
```


### balances

```solidity
mapping(address => uint256) public balances
```


### allowances

```solidity
mapping(address => mapping(address => uint256)) public allowances
```


## Functions
### constructor


```solidity
constructor(uint256 initialSupply) ;
```

### balanceOf


```solidity
function balanceOf(address account) public view returns (uint256);
```

### transfer


```solidity
function transfer(address recipient, uint256 amount) public returns (bool);
```

### allowance


```solidity
function allowance(address owner, address spender) public view returns (uint256);
```

### approve


```solidity
function approve(address spender, uint256 amount) public returns (bool);
```

### transferFrom


```solidity
function transferFrom(address sender, address recipient, uint256 amount) public returns (bool);
```

## Events
### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value);
```

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value);
```

