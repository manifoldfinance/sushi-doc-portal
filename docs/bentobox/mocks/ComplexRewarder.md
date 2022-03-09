## `ComplexRewarder`

### `lock()`

### `onlyMCV2()`

### `constructor(contract IERC20 _rewardToken, uint256 _tokenPerBlock, address _MASTERCHEF_V2)` (public)

### `onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpToken)` (external)

### `pendingTokens(uint256 pid, address user, uint256) → contract IERC20[] rewardTokens, uint256[] rewardAmounts` (external)

### `poolLength() → uint256 pools` (public)

Returns the number of MCV2 pools.

### `add(uint256 allocPoint, uint256 _pid)` (public)

Add a new LP to the pool. Can only be called by the owner. DO NOT add the same
LP token more than once. Rewards will be messed up if you do.

### `set(uint256 _pid, uint256 _allocPoint)` (public)

Update the given pool's SUSHI allocation point and `IRewarder` contract. Can
only be called by the owner.

### `reclaimTokens(address token, uint256 amount, address payable to)` (public)

Allows owner to reclaim/withdraw any tokens (including reward tokens) held by
this contract

### `pendingToken(uint256 _pid, address _user) → uint256 pending` (public)

View function to see pending Token

### `massUpdatePools(uint256[] pids)` (external)

Update reward variables for all pools. Be careful of gas spending!

### `updatePool(uint256 pid) → struct ComplexRewarder.PoolInfo pool` (public)

Update reward variables of the given pool.

### `LogOnReward(address user, uint256 pid, uint256 amount, address to)`

### `LogPoolAddition(uint256 pid, uint256 allocPoint)`

### `LogSetPool(uint256 pid, uint256 allocPoint)`

### `LogUpdatePool(uint256 pid, uint64 lastRewardBlock, uint256 lpSupply, uint256 accSushiPerShare)`

### `LogInit()`

### `UserInfo`

uint256 amount

uint256 rewardDebt

uint256 unpaidRewards

### `PoolInfo`

uint128 accSushiPerShare

uint64 lastRewardBlock

uint64 allocPoint
