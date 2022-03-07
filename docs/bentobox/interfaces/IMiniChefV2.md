## `IMiniChefV2`

### `poolLength() → uint256` (external)

### `updatePool(uint256 pid) → struct IMiniChefV2.PoolInfo` (external)

### `userInfo(uint256 _pid, address _user) → uint256, uint256` (external)

### `deposit(uint256 pid, uint256 amount, address to)` (external)

### `withdraw(uint256 pid, uint256 amount, address to)` (external)

### `harvest(uint256 pid, address to)` (external)

### `withdrawAndHarvest(uint256 pid, uint256 amount, address to)` (external)

### `emergencyWithdraw(uint256 pid, address to)` (external)

### `UserInfo`

uint256 amount

uint256 rewardDebt

### `PoolInfo`

uint128 accSushiPerShare

uint64 lastRewardTime

uint64 allocPoint
