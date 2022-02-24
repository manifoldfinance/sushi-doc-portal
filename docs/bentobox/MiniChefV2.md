## `MiniChefV2`

The (older) MasterChef contract gives out a constant number of SUSHI tokens per block.
It is the only address with minting rights for SUSHI.
The idea for this MasterChef V2 (MCV2) contract is therefore to be the owner of a dummy token
that is deposited into the MasterChef V1 (MCV1) contract.
The allocation point for this pool on MCV1 is the total allocation point for all pools that receive double incentives.




### `constructor(contract IERC20 _sushi)` (public)





### `poolLength() → uint256 pools` (public)

Returns the number of MCV2 pools.



### `add(uint256 allocPoint, contract IERC20 _lpToken, contract IRewarder _rewarder)` (public)

Add a new LP to the pool. Can only be called by the owner.
DO NOT add the same LP token more than once. Rewards will be messed up if you do.




### `set(uint256 _pid, uint256 _allocPoint, contract IRewarder _rewarder, bool overwrite)` (public)

Update the given pool's SUSHI allocation point and `IRewarder` contract. Can only be called by the owner.




### `setSushiPerSecond(uint256 _sushiPerSecond)` (public)

Sets the sushi per second to be distributed. Can only be called by the owner.




### `setMigrator(contract IMigratorChef _migrator)` (public)

Set the `migrator` contract. Can only be called by the owner.




### `migrate(uint256 _pid)` (public)

Migrate LP token to another LP contract through the `migrator` contract.




### `pendingSushi(uint256 _pid, address _user) → uint256 pending` (external)

View function to see pending SUSHI on frontend.




### `massUpdatePools(uint256[] pids)` (external)

Update reward variables for all pools. Be careful of gas spending!




### `updatePool(uint256 pid) → struct MiniChefV2.PoolInfo pool` (public)

Update reward variables of the given pool.




### `deposit(uint256 pid, uint256 amount, address to)` (public)

Deposit LP tokens to MCV2 for SUSHI allocation.




### `withdraw(uint256 pid, uint256 amount, address to)` (public)

Withdraw LP tokens from MCV2.




### `harvest(uint256 pid, address to)` (public)

Harvest proceeds for transaction sender to `to`.




### `withdrawAndHarvest(uint256 pid, uint256 amount, address to)` (public)

Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to `to`.




### `emergencyWithdraw(uint256 pid, address to)` (public)

Withdraw without caring about rewards. EMERGENCY ONLY.





### `Deposit(address user, uint256 pid, uint256 amount, address to)`





### `Withdraw(address user, uint256 pid, uint256 amount, address to)`





### `EmergencyWithdraw(address user, uint256 pid, uint256 amount, address to)`





### `Harvest(address user, uint256 pid, uint256 amount)`





### `LogPoolAddition(uint256 pid, uint256 allocPoint, contract IERC20 lpToken, contract IRewarder rewarder)`





### `LogSetPool(uint256 pid, uint256 allocPoint, contract IRewarder rewarder, bool overwrite)`





### `LogUpdatePool(uint256 pid, uint64 lastRewardTime, uint256 lpSupply, uint256 accSushiPerShare)`





### `LogSushiPerSecond(uint256 sushiPerSecond)`






### `UserInfo`


uint256 amount


int256 rewardDebt


### `PoolInfo`


uint128 accSushiPerShare


uint64 lastRewardTime


uint64 allocPoint



