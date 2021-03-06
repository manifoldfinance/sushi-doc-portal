# MasterChefV2

The (older) MasterChef contract gives out a constant number of SUSHI tokens per
block. It is the only address with minting rights for SUSHI. The idea for this
MasterChef V2 (MCV2) contract is therefore to be the owner of a dummy token that
is deposited into the MasterChef V1 (MCV1) contract. The allocation point for
this pool on MCV1 is the total allocation point for all pools that receive
double incentives.

## Methods

### MASTER_CHEF

```solidity
function MASTER_CHEF() external view returns (contract IMasterChef)
```

Address of MCV1 contract.

#### Returns

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| \_0  | contract IMasterChef | undefined   |

### MASTER_PID

```solidity
function MASTER_PID() external view returns (uint256)
```

The index of MCV2 master pool in MCV1.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### SUSHI

```solidity
function SUSHI() external view returns (contract IERC20)
```

Address of SUSHI contract.

#### Returns

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

### add

```solidity
function add(uint256 allocPoint, contract IERC20 _lpToken, contract IRewarder _rewarder) external nonpayable
```

Add a new LP to the pool. Can only be called by the owner. DO NOT add the same
LP token more than once. Rewards will be messed up if you do.

#### Parameters

| Name       | Type               | Description                       |
| ---------- | ------------------ | --------------------------------- |
| allocPoint | uint256            | AP of the new pool.               |
| \_lpToken  | contract IERC20    | Address of the LP ERC-20 token.   |
| \_rewarder | contract IRewarder | Address of the rewarder delegate. |

### batch

```solidity
function batch(bytes[] calls, bool revertOnFail) external payable returns (bool[] successes, bytes[] results)
```

#### Parameters

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| calls        | bytes[] | undefined   |
| revertOnFail | bool    | undefined   |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| successes | bool[]  | undefined   |
| results   | bytes[] | undefined   |

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

### deposit

```solidity
function deposit(uint256 pid, uint256 amount, address to) external nonpayable
```

Deposit LP tokens to MCV2 for SUSHI allocation.

#### Parameters

| Name   | Type    | Description                               |
| ------ | ------- | ----------------------------------------- |
| pid    | uint256 | The index of the pool. See `poolInfo`.    |
| amount | uint256 | LP token amount to deposit.               |
| to     | address | The receiver of `amount` deposit benefit. |

### emergencyWithdraw

```solidity
function emergencyWithdraw(uint256 pid, address to) external nonpayable
```

Withdraw without caring about rewards. EMERGENCY ONLY.

#### Parameters

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| pid  | uint256 | The index of the pool. See `poolInfo`. |
| to   | address | Receiver of the LP tokens.             |

### harvest

```solidity
function harvest(uint256 pid, address to) external nonpayable
```

Harvest proceeds for transaction sender to `to`.

#### Parameters

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| pid  | uint256 | The index of the pool. See `poolInfo`. |
| to   | address | Receiver of SUSHI rewards.             |

### harvestFromMasterChef

```solidity
function harvestFromMasterChef() external nonpayable
```

Harvests SUSHI from `MASTER_CHEF` MCV1 and pool `MASTER_PID` to this MCV2
contract.

### init

```solidity
function init(contract IERC20 dummyToken) external nonpayable
```

Deposits a dummy token to `MASTER_CHEF` MCV1. This is required because MCV1
holds the minting rights for SUSHI. Any balance of transaction sender in
`dummyToken` is transferred. The allocation point for the pool on MCV1 is the
total allocation point for all pools that receive double incentives.

#### Parameters

| Name       | Type            | Description                                           |
| ---------- | --------------- | ----------------------------------------------------- |
| dummyToken | contract IERC20 | The address of the ERC-20 token to deposit into MCV1. |

### lpToken

```solidity
function lpToken(uint256) external view returns (contract IERC20)
```

Address of the LP token for each MCV2 pool.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

### massUpdatePools

```solidity
function massUpdatePools(uint256[] pids) external nonpayable
```

Update reward variables for all pools. Be careful of gas spending!

#### Parameters

| Name | Type      | Description                                                          |
| ---- | --------- | -------------------------------------------------------------------- |
| pids | uint256[] | Pool IDs of all to be updated. Make sure to update all active pools. |

### migrate

```solidity
function migrate(uint256 _pid) external nonpayable
```

Migrate LP token to another LP contract through the `migrator` contract.

#### Parameters

| Name  | Type    | Description                            |
| ----- | ------- | -------------------------------------- |
| \_pid | uint256 | The index of the pool. See `poolInfo`. |

### migrator

```solidity
function migrator() external view returns (contract IMigratorChef)
```

#### Returns

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| \_0  | contract IMigratorChef | undefined   |

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

### pendingSushi

```solidity
function pendingSushi(uint256 _pid, address _user) external view returns (uint256 pending)
```

View function to see pending SUSHI on frontend.

#### Parameters

| Name   | Type    | Description                            |
| ------ | ------- | -------------------------------------- |
| \_pid  | uint256 | The index of the pool. See `poolInfo`. |
| \_user | address | Address of user.                       |

#### Returns

| Name    | Type    | Description                    |
| ------- | ------- | ------------------------------ |
| pending | uint256 | SUSHI reward for a given user. |

### permitToken

```solidity
function permitToken(contract IERC20 token, address from, address to, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

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

### poolInfo

```solidity
function poolInfo(uint256) external view returns (uint128 accSushiPerShare, uint64 lastRewardBlock, uint64 allocPoint)
```

Info of each MCV2 pool.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| accSushiPerShare | uint128 | undefined   |
| lastRewardBlock  | uint64  | undefined   |
| allocPoint       | uint64  | undefined   |

### poolLength

```solidity
function poolLength() external view returns (uint256 pools)
```

Returns the number of MCV2 pools.

#### Returns

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| pools | uint256 | undefined   |

### rewarder

```solidity
function rewarder(uint256) external view returns (contract IRewarder)
```

Address of each `IRewarder` contract in MCV2.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| \_0  | contract IRewarder | undefined   |

### set

```solidity
function set(uint256 _pid, uint256 _allocPoint, contract IRewarder _rewarder, bool overwrite) external nonpayable
```

Update the given pool&#39;s SUSHI allocation point and `IRewarder` contract. Can
only be called by the owner.

#### Parameters

| Name         | Type               | Description                                                           |
| ------------ | ------------------ | --------------------------------------------------------------------- |
| \_pid        | uint256            | The index of the pool. See `poolInfo`.                                |
| \_allocPoint | uint256            | New AP of the pool.                                                   |
| \_rewarder   | contract IRewarder | Address of the rewarder delegate.                                     |
| overwrite    | bool               | True if \_rewarder should be `set`. Otherwise `_rewarder` is ignored. |

### setMigrator

```solidity
function setMigrator(contract IMigratorChef _migrator) external nonpayable
```

Set the `migrator` contract. Can only be called by the owner.

#### Parameters

| Name       | Type                   | Description                  |
| ---------- | ---------------------- | ---------------------------- |
| \_migrator | contract IMigratorChef | The contract address to set. |

### sushiPerBlock

```solidity
function sushiPerBlock() external view returns (uint256 amount)
```

Calculates and returns the `amount` of SUSHI per block.

#### Returns

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| amount | uint256 | undefined   |

### totalAllocPoint

```solidity
function totalAllocPoint() external view returns (uint256)
```

_Total allocation points. Must be the sum of all allocation points in all
pools._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transferOwnership

```solidity
function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable
```

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |
| direct   | bool    | undefined   |
| renounce | bool    | undefined   |

### updatePool

```solidity
function updatePool(uint256 pid) external nonpayable returns (struct MasterChefV2.PoolInfo pool)
```

Update reward variables of the given pool.

#### Parameters

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| pid  | uint256 | The index of the pool. See `poolInfo`. |

#### Returns

| Name | Type                  | Description                        |
| ---- | --------------------- | ---------------------------------- |
| pool | MasterChefV2.PoolInfo | Returns the pool that was updated. |

### userInfo

```solidity
function userInfo(uint256, address) external view returns (uint256 amount, int256 rewardDebt)
```

Info of each user that stakes LP tokens.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |
| \_1  | address | undefined   |

#### Returns

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| amount     | uint256 | undefined   |
| rewardDebt | int256  | undefined   |

### withdraw

```solidity
function withdraw(uint256 pid, uint256 amount, address to) external nonpayable
```

Withdraw LP tokens from MCV2.

#### Parameters

| Name   | Type    | Description                            |
| ------ | ------- | -------------------------------------- |
| pid    | uint256 | The index of the pool. See `poolInfo`. |
| amount | uint256 | LP token amount to withdraw.           |
| to     | address | Receiver of the LP tokens.             |

### withdrawAndHarvest

```solidity
function withdrawAndHarvest(uint256 pid, uint256 amount, address to) external nonpayable
```

Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to
`to`.

#### Parameters

| Name   | Type    | Description                                  |
| ------ | ------- | -------------------------------------------- |
| pid    | uint256 | The index of the pool. See `poolInfo`.       |
| amount | uint256 | LP token amount to withdraw.                 |
| to     | address | Receiver of the LP tokens and SUSHI rewards. |

## Events

### Deposit

```solidity
event Deposit(address indexed user, uint256 indexed pid, uint256 amount, address indexed to)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |
| to `indexed`   | address | undefined   |

### EmergencyWithdraw

```solidity
event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount, address indexed to)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |
| to `indexed`   | address | undefined   |

### Harvest

```solidity
event Harvest(address indexed user, uint256 indexed pid, uint256 amount)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |

### LogInit

```solidity
event LogInit()
```

### LogPoolAddition

```solidity
event LogPoolAddition(uint256 indexed pid, uint256 allocPoint, contract IERC20 indexed lpToken, contract IRewarder indexed rewarder)
```

#### Parameters

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| pid `indexed`      | uint256            | undefined   |
| allocPoint         | uint256            | undefined   |
| lpToken `indexed`  | contract IERC20    | undefined   |
| rewarder `indexed` | contract IRewarder | undefined   |

### LogSetPool

```solidity
event LogSetPool(uint256 indexed pid, uint256 allocPoint, contract IRewarder indexed rewarder, bool overwrite)
```

#### Parameters

| Name               | Type               | Description |
| ------------------ | ------------------ | ----------- |
| pid `indexed`      | uint256            | undefined   |
| allocPoint         | uint256            | undefined   |
| rewarder `indexed` | contract IRewarder | undefined   |
| overwrite          | bool               | undefined   |

### LogUpdatePool

```solidity
event LogUpdatePool(uint256 indexed pid, uint64 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| pid `indexed`    | uint256 | undefined   |
| lastRewardBlock  | uint64  | undefined   |
| lpSupply         | uint256 | undefined   |
| accSushiPerShare | uint256 | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |

### Withdraw

```solidity
event Withdraw(address indexed user, uint256 indexed pid, uint256 amount, address indexed to)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |
| to `indexed`   | address | undefined   |
