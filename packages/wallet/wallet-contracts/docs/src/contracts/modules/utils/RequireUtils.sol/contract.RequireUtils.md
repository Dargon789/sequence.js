# RequireUtils
[Git Source](https://github.com/0xsequence/wallet-contracts/blob/09c54e74c2803b55df32c0470f8b0e0ebe86f4c9/contracts/modules/utils/RequireUtils.sol)


## Functions
### requireNonExpired

Validates that a given expiration hasn't expired

Used as an optional transaction on a Sequence batch, to create expirable transactions.


```solidity
function requireNonExpired(uint256 _expiration) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_expiration`|`uint256`| Expiration to check|


### requireMinNonce

Validates that a given wallet has reached a given nonce

Used as an optional transaction on a Sequence batch, to define transaction execution order


```solidity
function requireMinNonce(address _wallet, uint256 _nonce) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_wallet`|`address`|Sequence wallet|
|`_nonce`|`uint256`| Required nonce|


### requireMinERC20Balance

Validates that a wallet has a minimum ERC20 token balance


```solidity
function requireMinERC20Balance(address _token, address _wallet, uint256 _minBalance) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC20 token address|
|`_wallet`|`address`|Sequence wallet|
|`_minBalance`|`uint256`|Minimum required balance|


### requireMinERC20Allowance

Validates that a wallet has a minimum ERC20 allowance for a spender


```solidity
function requireMinERC20Allowance(address _token, address _owner, address _spender, uint256 _minAllowance)
    external
    view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC20 token address|
|`_owner`|`address`|Sequence wallet|
|`_spender`|`address`|Address allowed to spend the tokens|
|`_minAllowance`|`uint256`|Minimum required allowance|


### requireERC721Ownership

Validates that a wallet owns a specific ERC721 token


```solidity
function requireERC721Ownership(address _token, address _wallet, uint256 _tokenId) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC721 token address|
|`_wallet`|`address`|Sequence wallet|
|`_tokenId`|`uint256`|Token ID to check for ownership|


### requireERC721Approval

Validates that an ERC721 token is approved for a specific spender


```solidity
function requireERC721Approval(address _token, address _owner, address _spender, uint256 _tokenId) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC721 token address|
|`_owner`|`address`|Sequence wallet|
|`_spender`|`address`|Address that should have approval|
|`_tokenId`|`uint256`|Token ID to check for approval|


### requireMinERC1155Balance

Validates that a wallet has a minimum balance of an ERC1155 token


```solidity
function requireMinERC1155Balance(address _token, address _wallet, uint256 _tokenId, uint256 _minBalance)
    external
    view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC1155 token address|
|`_wallet`|`address`|Sequence wallet|
|`_tokenId`|`uint256`|Token ID to check|
|`_minBalance`|`uint256`|Minimum required balance|


### requireERC1155Approval

Validates that an ERC1155 token is approved for a specific operator


```solidity
function requireERC1155Approval(address _token, address _owner, address _operator) external view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_token`|`address`|ERC1155 token address|
|`_owner`|`address`|Sequence wallet|
|`_operator`|`address`|Address that should have operator approval|


