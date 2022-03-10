# SushiToken

## Methods

### DELEGATION_TYPEHASH

```solidity
function DELEGATION_TYPEHASH() external view returns (bytes32)
```

The EIP-712 typehash for the delegation struct used by the contract

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### DOMAIN_TYPEHASH

```solidity
function DOMAIN_TYPEHASH() external view returns (bytes32)
```

The EIP-712 typehash for the contract&#39;s domain

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_See {IERC20-allowance}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| owner   | address | undefined   |
| spender | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-approve}. Requirements: - `spender` cannot be the zero address._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| spender | address | undefined   |
| amount  | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_See {IERC20-balanceOf}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### checkpoints

```solidity
function checkpoints(address, uint32) external view returns (uint32 fromBlock, uint256 votes)
```

A record of votes checkpoints for each account, by index

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint32  | undefined   |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| fromBlock | uint32  | undefined   |
| votes     | uint256 | undefined   |

### decimals

```solidity
function decimals() external view returns (uint8)
```

_Returns the number of decimals used to get its user representation. For
example, if `decimals` equals `2`, a balance of `505` tokens should be displayed
to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18,
imitating the relationship between Ether and Wei. This is the value {ERC20}
uses, unless {*setupDecimals} is called. NOTE: This information is only used for
\_display* purposes: it in no way affects any of the arithmetic of the contract,
including {IERC20-balanceOf} and {IERC20-transfer}._

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | uint8 | undefined   |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```

_Atomically decreases the allowance granted to `spender` by the caller. This is
an alternative to {approve} that can be used as a mitigation for problems
described in {IERC20-approve}. Emits an {Approval} event indicating the updated
allowance. Requirements: - `spender` cannot be the zero address. - `spender`
must have allowance for the caller of at least `subtractedValue`._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| spender         | address | undefined   |
| subtractedValue | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### delegate

```solidity
function delegate(address delegatee) external nonpayable
```

Delegate votes from `msg.sender` to `delegatee`

#### Parameters

| Name      | Type    | Description                      |
| --------- | ------- | -------------------------------- |
| delegatee | address | The address to delegate votes to |

### delegateBySig

```solidity
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Delegates votes from signatory to `delegatee`

#### Parameters

| Name      | Type    | Description                                        |
| --------- | ------- | -------------------------------------------------- |
| delegatee | address | The address to delegate votes to                   |
| nonce     | uint256 | The contract state required to match the signature |
| expiry    | uint256 | The time at which to expire the signature          |
| v         | uint8   | The recovery byte of the signature                 |
| r         | bytes32 | Half of the ECDSA signature pair                   |
| s         | bytes32 | Half of the ECDSA signature pair                   |

### delegates

```solidity
function delegates(address delegator) external view returns (address)
```

Delegate votes from `msg.sender` to `delegatee`

#### Parameters

| Name      | Type    | Description                      |
| --------- | ------- | -------------------------------- |
| delegator | address | The address to get delegatee for |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getCurrentVotes

```solidity
function getCurrentVotes(address account) external view returns (uint256)
```

Gets the current votes balance for `account`

#### Parameters

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| account | address | The address to get votes balance |

#### Returns

| Name | Type    | Description                               |
| ---- | ------- | ----------------------------------------- |
| \_0  | uint256 | The number of current votes for `account` |

### getPriorVotes

```solidity
function getPriorVotes(address account, uint256 blockNumber) external view returns (uint256)
```

Determine the prior number of votes for an account as of a block number

_Block number must be a finalized block or else this function will revert to
prevent misinformation._

#### Parameters

| Name        | Type    | Description                                 |
| ----------- | ------- | ------------------------------------------- |
| account     | address | The address of the account to check         |
| blockNumber | uint256 | The block number to get the vote balance at |

#### Returns

| Name | Type    | Description                                               |
| ---- | ------- | --------------------------------------------------------- |
| \_0  | uint256 | The number of votes the account had as of the given block |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```

_Atomically increases the allowance granted to `spender` by the caller. This is
an alternative to {approve} that can be used as a mitigation for problems
described in {IERC20-approve}. Emits an {Approval} event indicating the updated
allowance. Requirements: - `spender` cannot be the zero address._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| spender    | address | undefined   |
| addedValue | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### mint

```solidity
function mint(address _to, uint256 _amount) external nonpayable
```

Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| \_to     | address | undefined   |
| \_amount | uint256 | undefined   |

### name

```solidity
function name() external view returns (string)
```

_Returns the name of the token._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### nonces

```solidity
function nonces(address) external view returns (uint256)
```

A record of states for signing / validating signatures

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### numCheckpoints

```solidity
function numCheckpoints(address) external view returns (uint32)
```

The number of checkpoints for each account

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | uint32 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```

_Leaves the contract without owner. It will not be possible to call `onlyOwner`
functions anymore. Can only be called by the current owner. NOTE: Renouncing
ownership will leave the contract without an owner, thereby removing any
functionality that is only available to the owner._

### symbol

```solidity
function symbol() external view returns (string)
```

_Returns the symbol of the token, usually a shorter version of the name._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_See {IERC20-totalSupply}._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transfer

```solidity
function transfer(address recipient, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero
address. - the caller must have a balance of at least `amount`._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| recipient | address | undefined   |
| amount    | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### transferFrom

```solidity
function transferFrom(address sender, address recipient, uint256 amount) external nonpayable returns (bool)
```

_See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated
allowance. This is not required by the EIP. See the note at the beginning of
{ERC20}. Requirements: - `sender` and `recipient` cannot be the zero address. -
`sender` must have a balance of at least `amount`. - the caller must have
allowance for `sender`&#39;s tokens of at least `amount`._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| sender    | address | undefined   |
| recipient | address | undefined   |
| amount    | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```

_Transfers ownership of the contract to a new account (`newOwner`). Can only be
called by the current owner._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |

## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| owner `indexed`   | address | undefined   |
| spender `indexed` | address | undefined   |
| value             | uint256 | undefined   |

### DelegateChanged

```solidity
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)
```

An event thats emitted when an account changes its delegate

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| delegator `indexed`    | address | undefined   |
| fromDelegate `indexed` | address | undefined   |
| toDelegate `indexed`   | address | undefined   |

### DelegateVotesChanged

```solidity
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)
```

An event thats emitted when a delegate account&#39;s vote balance changes

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| delegate `indexed` | address | undefined   |
| previousBalance    | uint256 | undefined   |
| newBalance         | uint256 | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| from `indexed` | address | undefined   |
| to `indexed`   | address | undefined   |
| value          | uint256 | undefined   |
