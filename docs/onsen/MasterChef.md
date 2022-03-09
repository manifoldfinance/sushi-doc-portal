# MasterChef

## Methods

### BONUS_MULTIPLIER

```solidity
function BONUS_MULTIPLIER() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### add

```solidity
function add(uint256 _allocPoint, contract IERC20 _lpToken, bool _withUpdate) external nonpayable
```

#### Parameters

| Name         | Type            | Description |
| ------------ | --------------- | ----------- |
| \_allocPoint | uint256         | undefined   |
| \_lpToken    | contract IERC20 | undefined   |
| \_withUpdate | bool            | undefined   |

### bonusEndBlock

```solidity
function bonusEndBlock() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### deposit

```solidity
function deposit(uint256 _pid, uint256 _amount) external nonpayable
```

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| \_pid    | uint256 | undefined   |
| \_amount | uint256 | undefined   |

### dev

```solidity
function dev(address _devaddr) external nonpayable
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_devaddr | address | undefined   |

### devaddr

```solidity
function devaddr() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### emergencyWithdraw

```solidity
function emergencyWithdraw(uint256 _pid) external nonpayable
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| \_pid | uint256 | undefined   |

### getMultiplier

```solidity
function getMultiplier(uint256 _from, uint256 _to) external view returns (uint256)
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| \_from | uint256 | undefined   |
| \_to   | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### massUpdatePools

```solidity
function massUpdatePools() external nonpayable
```

### migrate

```solidity
function migrate(uint256 _pid) external nonpayable
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| \_pid | uint256 | undefined   |

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

_Returns the address of the current owner._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### pendingSushi

```solidity
function pendingSushi(uint256 _pid, address _user) external view returns (uint256)
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| \_pid  | uint256 | undefined   |
| \_user | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### poolInfo

```solidity
function poolInfo(uint256) external view returns (contract IERC20 lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accSushiPerShare)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name             | Type            | Description |
| ---------------- | --------------- | ----------- |
| lpToken          | contract IERC20 | undefined   |
| allocPoint       | uint256         | undefined   |
| lastRewardBlock  | uint256         | undefined   |
| accSushiPerShare | uint256         | undefined   |

### poolLength

```solidity
function poolLength() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```

_Leaves the contract without owner. It will not be possible to call `onlyOwner`
functions anymore. Can only be called by the current owner. NOTE: Renouncing
ownership will leave the contract without an owner, thereby removing any
functionality that is only available to the owner._

### set

```solidity
function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) external nonpayable
```

#### Parameters

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| \_pid        | uint256 | undefined   |
| \_allocPoint | uint256 | undefined   |
| \_withUpdate | bool    | undefined   |

### setMigrator

```solidity
function setMigrator(contract IMigratorChef _migrator) external nonpayable
```

#### Parameters

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| \_migrator | contract IMigratorChef | undefined   |

### startBlock

```solidity
function startBlock() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### sushi

```solidity
function sushi() external view returns (contract SushiToken)
```

#### Returns

| Name | Type                | Description |
| ---- | ------------------- | ----------- |
| \_0  | contract SushiToken | undefined   |

### sushiPerBlock

```solidity
function sushiPerBlock() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### totalAllocPoint

```solidity
function totalAllocPoint() external view returns (uint256)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

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

### updatePool

```solidity
function updatePool(uint256 _pid) external nonpayable
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| \_pid | uint256 | undefined   |

### userInfo

```solidity
function userInfo(uint256, address) external view returns (uint256 amount, uint256 rewardDebt)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |
| \_1  | address | undefined   |

#### Returns

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| amount     | uint256 | undefined   |
| rewardDebt | uint256 | undefined   |

### withdraw

```solidity
function withdraw(uint256 _pid, uint256 _amount) external nonpayable
```

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| \_pid    | uint256 | undefined   |
| \_amount | uint256 | undefined   |

## Events

### Deposit

```solidity
event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |

### EmergencyWithdraw

```solidity
event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |

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
event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
```

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| user `indexed` | address | undefined   |
| pid `indexed`  | uint256 | undefined   |
| amount         | uint256 | undefined   |
