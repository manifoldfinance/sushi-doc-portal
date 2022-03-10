## `MasterChef`

### `constructor(contract SushiToken _sushi, address _devaddr, uint256 _sushiPerBlock, uint256 _startBlock, uint256 _bonusEndBlock)` (public)

### `poolLength() → uint256` (external)

### `add(uint256 _allocPoint, contract IERC20 _lpToken, bool _withUpdate)` (public)

### `set(uint256 _pid, uint256 _allocPoint, bool _withUpdate)` (public)

### `setMigrator(contract IMigratorChef _migrator)` (public)

### `migrate(uint256 _pid)` (public)

### `getMultiplier(uint256 _from, uint256 _to) → uint256` (public)

### `pendingSushi(uint256 _pid, address _user) → uint256` (external)

### `massUpdatePools()` (public)

### `updatePool(uint256 _pid)` (public)

### `deposit(uint256 _pid, uint256 _amount)` (public)

### `withdraw(uint256 _pid, uint256 _amount)` (public)

### `emergencyWithdraw(uint256 _pid)` (public)

### `safeSushiTransfer(address _to, uint256 _amount)` (internal)

### `dev(address _devaddr)` (public)

### `Deposit(address user, uint256 pid, uint256 amount)`

### `Withdraw(address user, uint256 pid, uint256 amount)`

### `EmergencyWithdraw(address user, uint256 pid, uint256 amount)`

### `UserInfo`

uint256 amount

uint256 rewardDebt

### `PoolInfo`

contract IERC20 lpToken

uint256 allocPoint

uint256 lastRewardBlock

uint256 accSushiPerShare
