## `CloneRewarderTimeDual`

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

### `setRewardPerSecond(uint128 _rewardPerSecond1, uint128 _rewardPerSecond2)` (public)

Sets the sushi per second to be distributed. Can only be called by the owner.

### `reclaimTokens(address token, uint256 amount, address payable to)` (public)

Allows owner to reclaim/withdraw any tokens (including reward tokens) held by
this contract

### `pendingToken(uint256 _pid, address _user) → uint256 reward1, uint256 reward2` (public)

View function to see pending Token

### `updatePool(uint256 pid) → struct CloneRewarderTimeDual.PoolInfo pool` (public)

Update reward variables of the given pool.

### `LogOnReward(address user, uint256 pid, uint256 amount1, uint256 amount2, address to)`

### `LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accToken1PerShare, uint256 accToken2PerShare)`

### `LogRewardPerSecond(uint256 rewardPerSecond1, uint256 rewardPerSecond2)`

### `LogInit(contract IERC20 rewardToken1, contract IERC20 rewardToken2, address owner, uint256 rewardPerSecond1, uint256 rewardPerSecond2, contract IERC20 masterLpToken)`

### `UserInfo`

uint256 amount

uint256 rewardDebt1

uint256 rewardDebt2

uint256 unpaidRewards1

uint256 unpaidRewards2

### `PoolInfo`

uint128 accToken1PerShare

uint128 accToken2PerShare

uint64 lastRewardTime
