## `CloneRewarderTime`

### `lock()`

### `onlyMCV2()`

### `constructor(address _MASTERCHEF_V2)` (public)

### `init(bytes data)` (public)

Serves as the constructor for clones, as clones can't have a regular constructor

`data` is abi encoded in the format: (IERC20 collateral, IERC20 asset, IOracle
oracle, bytes oracleData)

### `onSushiReward(uint256 pid, address _user, address to, uint256, uint256 lpTokenAmount)` (external)

### `pendingTokens(uint256 pid, address user, uint256) → contract IERC20[] rewardTokens, uint256[] rewardAmounts` (external)

### `rewardRates() → uint256[]` (external)

### `setRewardPerSecond(uint256 _rewardPerSecond)` (public)

Sets the sushi per second to be distributed. Can only be called by the owner.

### `reclaimTokens(address token, uint256 amount, address payable to)` (public)

Allows owner to reclaim/withdraw any tokens (including reward tokens) held by
this contract

### `pendingToken(uint256 _pid, address _user) → uint256 pending` (public)

View function to see pending Token

### `updatePool(uint256 pid) → struct CloneRewarderTime.PoolInfo pool` (public)

Update reward variables of the given pool.

### `LogOnReward(address user, uint256 pid, uint256 amount, address to)`

### `LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accToken1PerShare)`

### `LogRewardPerSecond(uint256 rewardPerSecond)`

### `LogInit(contract IERC20 rewardToken, address owner, uint256 rewardPerSecond, contract IERC20 masterLpToken)`

### `UserInfo`

uint256 amount

uint256 rewardDebt

uint256 unpaidRewards

### `PoolInfo`

uint128 accToken1PerShare

uint64 lastRewardTime
