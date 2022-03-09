# BentoBoxV1

_BoringCrypto, Keno_

> BentoBox

The BentoBox is a vault for tokens. The stored tokens can be flash loaned and
used in strategies. Yield from this will go to the token depositors. Rebasing
tokens ARE NOT supported and WILL cause loss of funds. Any funds transfered
directly onto the BentoBox will be lost, use the deposit function instead.

## Methods

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### balanceOf

```solidity
function balanceOf(contract IERC20, address) external view returns (uint256)
```

#### Parameters

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |
| \_1  | address         | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### batch

```solidity
function batch(bytes[] calls, bool revertOnFail) external payable returns (bool[] successes, bytes[] results)
```

Allows batched call to self (this contract).

#### Parameters

| Name         | Type    | Description                                                             |
| ------------ | ------- | ----------------------------------------------------------------------- |
| calls        | bytes[] | An array of inputs for each call.                                       |
| revertOnFail | bool    | If True then reverts after a failed call and stops doing further calls. |

#### Returns

| Name      | Type    | Description                                                                          |
| --------- | ------- | ------------------------------------------------------------------------------------ |
| successes | bool[]  | An array indicating the success of a call, mapped one-to-one to `calls`.             |
| results   | bytes[] | An array with the returned data of each function call, mapped one-to-one to `calls`. |

### batchFlashLoan

```solidity
function batchFlashLoan(contract IBatchFlashBorrower borrower, address[] receivers, contract IERC20[] tokens, uint256[] amounts, bytes data) external nonpayable
```

Support for batched flashloans. Useful to request multiple different `tokens` in
a single transaction.

#### Parameters

| Name      | Type                         | Description                                                                                                  |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| borrower  | contract IBatchFlashBorrower | The address of the contract that implements and conforms to `IBatchFlashBorrower` and handles the flashloan. |
| receivers | address[]                    | An array of the token receivers. A one-to-one mapping with `tokens` and `amounts`.                           |
| tokens    | contract IERC20[]            | The addresses of the tokens.                                                                                 |
| amounts   | uint256[]                    | of the tokens for each receiver.                                                                             |
| data      | bytes                        | The calldata to pass to the `borrower` contract.                                                             |

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

Needs to be called by `pendingOwner` to claim ownership.

### deploy

```solidity
function deploy(address masterContract, bytes data, bool useCreate2) external payable returns (address cloneAddress)
```

Deploys a given master Contract as a clone. Any ETH transferred with this call
is forwarded to the new clone. Emits `LogDeploy`.

#### Parameters

| Name           | Type    | Description                                                                                 |
| -------------- | ------- | ------------------------------------------------------------------------------------------- |
| masterContract | address | The address of the contract to clone.                                                       |
| data           | bytes   | Additional abi encoded calldata that is passed to the new clone via `IMasterContract.init`. |
| useCreate2     | bool    | Creates the clone by using the CREATE2 opcode, in this case `data` will be used as salt.    |

#### Returns

| Name         | Type    | Description                            |
| ------------ | ------- | -------------------------------------- |
| cloneAddress | address | Address of the created clone contract. |

### deposit

```solidity
function deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) external payable returns (uint256 amountOut, uint256 shareOut)
```

Deposit an amount of `token` represented in either `amount` or `share`.

#### Parameters

| Name    | Type            | Description                                                                    |
| ------- | --------------- | ------------------------------------------------------------------------------ |
| token\_ | contract IERC20 | The ERC-20 token to deposit.                                                   |
| from    | address         | which account to pull the tokens.                                              |
| to      | address         | which account to push the tokens.                                              |
| amount  | uint256         | Token amount in native representation to deposit.                              |
| share   | uint256         | Token amount represented in shares to deposit. Takes precedence over `amount`. |

#### Returns

| Name      | Type    | Description                                |
| --------- | ------- | ------------------------------------------ |
| amountOut | uint256 | The amount deposited.                      |
| shareOut  | uint256 | The deposited amount repesented in shares. |

### flashLoan

```solidity
function flashLoan(contract IFlashBorrower borrower, address receiver, contract IERC20 token, uint256 amount, bytes data) external nonpayable
```

Flashloan ability.

#### Parameters

| Name     | Type                    | Description                                                                                             |
| -------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| borrower | contract IFlashBorrower | The address of the contract that implements and conforms to `IFlashBorrower` and handles the flashloan. |
| receiver | address                 | Address of the token receiver.                                                                          |
| token    | contract IERC20         | The address of the token to receive.                                                                    |
| amount   | uint256                 | of the tokens to receive.                                                                               |
| data     | bytes                   | The calldata to pass to the `borrower` contract.                                                        |

### harvest

```solidity
function harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount) external nonpayable
```

The actual process of yield farming. Executes the strategy of `token`.
Optionally does housekeeping if `balance` is true. `maxChangeAmount` is relevant
for skimming or withdrawing if `balance` is true.

#### Parameters

| Name            | Type            | Description                                                                        |
| --------------- | --------------- | ---------------------------------------------------------------------------------- |
| token           | contract IERC20 | The address of the token for which a strategy is deployed.                         |
| balance         | bool            | True if housekeeping should be done.                                               |
| maxChangeAmount | uint256         | The maximum amount for either pulling or pushing from/to the `IStrategy` contract. |

### masterContractApproved

```solidity
function masterContractApproved(address, address) external view returns (bool)
```

masterContract to user to approval state

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### masterContractOf

```solidity
function masterContractOf(address) external view returns (address)
```

Mapping from clone contracts to their masterContract.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### nonces

```solidity
function nonces(address) external view returns (uint256)
```

user nonces for masterContract approvals

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### pendingOwner

```solidity
function pendingOwner() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### pendingStrategy

```solidity
function pendingStrategy(contract IERC20) external view returns (contract IStrategy)
```

#### Parameters

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

#### Returns

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| \_0  | contract IStrategy | undefined   |

### permitToken

```solidity
function permitToken(contract IERC20 token, address from, address to, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Call wrapper that performs `ERC20.permit` on `token`. Lookup `IERC20.permit`.

#### Parameters

| Name     | Type            | Description |
| -------- | --------------- | ----------- |
| token    | contract IERC20 | undefined   |
| from     | address         | undefined   |
| to       | address         | undefined   |
| amount   | uint256         | undefined   |
| deadline | uint256         | undefined   |
| v        | uint8           | undefined   |
| r        | bytes32         | undefined   |
| s        | bytes32         | undefined   |

### registerProtocol

```solidity
function registerProtocol() external nonpayable
```

Other contracts need to register with this master contract so that users can
approve them for the BentoBox.

### setMasterContractApproval

```solidity
function setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Approves or revokes a `masterContract` access to `user` funds.

#### Parameters

| Name           | Type    | Description                                              |
| -------------- | ------- | -------------------------------------------------------- |
| user           | address | The address of the user that approves or revokes access. |
| masterContract | address | The address who gains or loses access.                   |
| approved       | bool    | If True approves access. If False revokes access.        |
| v              | uint8   | Part of the signature. (See EIP-191)                     |
| r              | bytes32 | Part of the signature. (See EIP-191)                     |
| s              | bytes32 | Part of the signature. (See EIP-191)                     |

### setStrategy

```solidity
function setStrategy(contract IERC20 token, contract IStrategy newStrategy) external nonpayable
```

Sets the contract address of a new strategy that conforms to `IStrategy` for
`token`. Must be called twice with the same arguments. A new strategy becomes
pending first and can be activated once `STRATEGY_DELAY` is over.

_Only the owner of this contract is allowed to change this._

#### Parameters

| Name        | Type               | Description                                                 |
| ----------- | ------------------ | ----------------------------------------------------------- |
| token       | contract IERC20    | The address of the token that maps to a strategy to change. |
| newStrategy | contract IStrategy | The address of the contract that conforms to `IStrategy`.   |

### setStrategyTargetPercentage

```solidity
function setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_) external nonpayable
```

Sets the target percentage of the strategy for `token`.

_Only the owner of this contract is allowed to change this._

#### Parameters

| Name               | Type            | Description                                                                    |
| ------------------ | --------------- | ------------------------------------------------------------------------------ |
| token              | contract IERC20 | The address of the token that maps to a strategy to change.                    |
| targetPercentage\_ | uint64          | The new target in percent. Must be lesser or equal to `MAX_TARGET_PERCENTAGE`. |

### strategy

```solidity
function strategy(contract IERC20) external view returns (contract IStrategy)
```

#### Parameters

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

#### Returns

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| \_0  | contract IStrategy | undefined   |

### strategyData

```solidity
function strategyData(contract IERC20) external view returns (uint64 strategyStartDate, uint64 targetPercentage, uint128 balance)
```

#### Parameters

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

#### Returns

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| strategyStartDate | uint64  | undefined   |
| targetPercentage  | uint64  | undefined   |
| balance           | uint128 | undefined   |

### toAmount

```solidity
function toAmount(contract IERC20 token, uint256 share, bool roundUp) external view returns (uint256 amount)
```

_Helper function represent shares back into the `token` amount._

#### Parameters

| Name    | Type            | Description                         |
| ------- | --------------- | ----------------------------------- |
| token   | contract IERC20 | The ERC-20 token.                   |
| share   | uint256         | The amount of shares.               |
| roundUp | bool            | If the result should be rounded up. |

#### Returns

| Name   | Type    | Description                                       |
| ------ | ------- | ------------------------------------------------- |
| amount | uint256 | The share amount back into native representation. |

### toShare

```solidity
function toShare(contract IERC20 token, uint256 amount, bool roundUp) external view returns (uint256 share)
```

_Helper function to represent an `amount` of `token` in shares._

#### Parameters

| Name    | Type            | Description                                 |
| ------- | --------------- | ------------------------------------------- |
| token   | contract IERC20 | The ERC-20 token.                           |
| amount  | uint256         | The `token` amount.                         |
| roundUp | bool            | If the result `share` should be rounded up. |

#### Returns

| Name  | Type    | Description                             |
| ----- | ------- | --------------------------------------- |
| share | uint256 | The token amount represented in shares. |

### totals

```solidity
function totals(contract IERC20) external view returns (uint128 elastic, uint128 base)
```

#### Parameters

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| elastic | uint128 | undefined   |
| base    | uint128 | undefined   |

### transfer

```solidity
function transfer(contract IERC20 token, address from, address to, uint256 share) external nonpayable
```

Transfer shares from a user account to another one.

#### Parameters

| Name  | Type            | Description                      |
| ----- | --------------- | -------------------------------- |
| token | contract IERC20 | The ERC-20 token to transfer.    |
| from  | address         | which user to pull the tokens.   |
| to    | address         | which user to push the tokens.   |
| share | uint256         | The amount of `token` in shares. |

### transferMultiple

```solidity
function transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares) external nonpayable
```

Transfer shares from a user account to multiple other ones.

#### Parameters

| Name   | Type            | Description                                                 |
| ------ | --------------- | ----------------------------------------------------------- |
| token  | contract IERC20 | The ERC-20 token to transfer.                               |
| from   | address         | which user to pull the tokens.                              |
| tos    | address[]       | The receivers of the tokens.                                |
| shares | uint256[]       | The amount of `token` in shares for each receiver in `tos`. |

### transferOwnership

```solidity
function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable
```

Transfers ownership to `newOwner`. Either directly or claimable by the new
pending owner. Can only be invoked by the current `owner`.

#### Parameters

| Name     | Type    | Description                                                                                           |
| -------- | ------- | ----------------------------------------------------------------------------------------------------- |
| newOwner | address | Address of the new owner.                                                                             |
| direct   | bool    | True if `newOwner` should be set immediately. False if `newOwner` needs to use `claimOwnership`.      |
| renounce | bool    | Allows the `newOwner` to be `address(0)` if `direct` and `renounce` is True. Has no effect otherwise. |

### whitelistMasterContract

```solidity
function whitelistMasterContract(address masterContract, bool approved) external nonpayable
```

Enables or disables a contract for approval without signed message.

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| masterContract | address | undefined   |
| approved       | bool    | undefined   |

### whitelistedMasterContracts

```solidity
function whitelistedMasterContracts(address) external view returns (bool)
```

masterContract to whitelisted state for approval without signed message

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### withdraw

```solidity
function withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) external nonpayable returns (uint256 amountOut, uint256 shareOut)
```

Withdraws an amount of `token` from a user account.

#### Parameters

| Name    | Type            | Description                                                        |
| ------- | --------------- | ------------------------------------------------------------------ |
| token\_ | contract IERC20 | The ERC-20 token to withdraw.                                      |
| from    | address         | which user to pull the tokens.                                     |
| to      | address         | which user to push the tokens.                                     |
| amount  | uint256         | of tokens. Either one of `amount` or `share` needs to be supplied. |
| share   | uint256         | Like above, but `share` takes precedence over `amount`.            |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| amountOut | uint256 | undefined   |
| shareOut  | uint256 | undefined   |

## Events

### LogDeploy

```solidity
event LogDeploy(address indexed masterContract, bytes data, address indexed cloneAddress)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| data                     | bytes   | undefined   |
| cloneAddress `indexed`   | address | undefined   |

### LogDeposit

```solidity
event LogDeposit(contract IERC20 indexed token, address indexed from, address indexed to, uint256 amount, uint256 share)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| from `indexed`  | address         | undefined   |
| to `indexed`    | address         | undefined   |
| amount          | uint256         | undefined   |
| share           | uint256         | undefined   |

### LogFlashLoan

```solidity
event LogFlashLoan(address indexed borrower, contract IERC20 indexed token, uint256 amount, uint256 feeAmount, address indexed receiver)
```

#### Parameters

| Name               | Type            | Description |
| ------------------ | --------------- | ----------- |
| borrower `indexed` | address         | undefined   |
| token `indexed`    | contract IERC20 | undefined   |
| amount             | uint256         | undefined   |
| feeAmount          | uint256         | undefined   |
| receiver `indexed` | address         | undefined   |

### LogRegisterProtocol

```solidity
event LogRegisterProtocol(address indexed protocol)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| protocol `indexed` | address | undefined   |

### LogSetMasterContractApproval

```solidity
event LogSetMasterContractApproval(address indexed masterContract, address indexed user, bool approved)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| user `indexed`           | address | undefined   |
| approved                 | bool    | undefined   |

### LogStrategyDivest

```solidity
event LogStrategyDivest(contract IERC20 indexed token, uint256 amount)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| amount          | uint256         | undefined   |

### LogStrategyInvest

```solidity
event LogStrategyInvest(contract IERC20 indexed token, uint256 amount)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| amount          | uint256         | undefined   |

### LogStrategyLoss

```solidity
event LogStrategyLoss(contract IERC20 indexed token, uint256 amount)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| amount          | uint256         | undefined   |

### LogStrategyProfit

```solidity
event LogStrategyProfit(contract IERC20 indexed token, uint256 amount)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| amount          | uint256         | undefined   |

### LogStrategyQueued

```solidity
event LogStrategyQueued(contract IERC20 indexed token, contract IStrategy indexed strategy)
```

#### Parameters

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| token `indexed`    | contract IERC20    | undefined   |
| strategy `indexed` | contract IStrategy | undefined   |

### LogStrategySet

```solidity
event LogStrategySet(contract IERC20 indexed token, contract IStrategy indexed strategy)
```

#### Parameters

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| token `indexed`    | contract IERC20    | undefined   |
| strategy `indexed` | contract IStrategy | undefined   |

### LogStrategyTargetPercentage

```solidity
event LogStrategyTargetPercentage(contract IERC20 indexed token, uint256 targetPercentage)
```

#### Parameters

| Name             | Type            | Description |
| ---------------- | --------------- | ----------- |
| token `indexed`  | contract IERC20 | undefined   |
| targetPercentage | uint256         | undefined   |

### LogTransfer

```solidity
event LogTransfer(contract IERC20 indexed token, address indexed from, address indexed to, uint256 share)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| from `indexed`  | address         | undefined   |
| to `indexed`    | address         | undefined   |
| share           | uint256         | undefined   |

### LogWhiteListMasterContract

```solidity
event LogWhiteListMasterContract(address indexed masterContract, bool approved)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| approved                 | bool    | undefined   |

### LogWithdraw

```solidity
event LogWithdraw(contract IERC20 indexed token, address indexed from, address indexed to, uint256 amount, uint256 share)
```

#### Parameters

| Name            | Type            | Description |
| --------------- | --------------- | ----------- |
| token `indexed` | contract IERC20 | undefined   |
| from `indexed`  | address         | undefined   |
| to `indexed`    | address         | undefined   |
| amount          | uint256         | undefined   |
| share           | uint256         | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
