---
title: Sushiswap Incentives
created: 2022-03-09T03:32:29 (UTC -08:00)
tags: ['masterchef', 'sushiswap']
version: latest
---

# Sushiswap Platform

SushiSwap is an automated market-making (AMM) decentralized exchange (DEX)
currently on the Ethereum blockchain. In addition to DEX, SushiSwap involves a
collection of governance, operations and reward contracts that help grow the
SushiSwap ecosystem and utilization.

### MasterChef

> Double Incentives; MasterChefV2

The MasterChef contract gives out a constant number of SUSHI per Block. It is
the only address with minting rights for the SUSHI token. Therefore any
incentive mechanism must be based upon that contract. The idea for this
MasterChef V2 (MCV2) contract is therefore to be the owner of a dummy token that
is deposited into the MasterChef V1 (MCV1) contract. The allocation point for
this pool on MCV1 is the total allocation point for all pools that receive
double incentives.

The distribution logic from MCV1 is taken over and simplified with the key
differentiator that the allocation of SUSHI for all pools is calculated through
the allocation towards the master pool on MCV1 instead of being a constant.

Reward Contracts are set at Pool Addition, all Logic is executed on those.

Instead of doing token transfers on deposit and withdrawal, instead, the
rewardDebt is changed accordingly. As it now is allowed to go negative, it is
changed to a signed integer. The appropriate version of SignedSafeMath is used
with an additional safe conversion to uint256.

## Variables

`UserInfo` should only be changed for `msg.sender`

`amount` How many LP tokens the user has provided, should be equal to
`lp.balanceOf(user)`

`rewardDebt` keeps track of how much the user is owed or has been credited
already

`PoolInfo` keeps information on LP position

`accSushiPerShare` Accumulated SUSHIs per share, times 1e12.

`allocPoint` How many allocation points assigned to this pool

`lastRewardBlock` Last block number that SUSHIs distribution occurs.

`MasterChef` address of MasterChef contract
(`0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd`)

`sushi` address of sushi contract (`0x6b3595068778dd592e39a122f4f5a5cf09c90fe2`)

`MASTER_PID` pool id of dummy Token on MasterChef V1

`totalAllocPoint` Total allocation points. Must be the sum of all allocation
points in all pools.

The following arrays should be accessed by the same index `pid`

`PoolInfo[] public poolInfo`

`IRewarder[] public rewarder`

## Init

Pulls the balance of the dummyToken from `msg.sender` and deposit it in
MasterChef V1 in the dummy token pool.

## Add

Adds a reward pool for a specified LP Token with an allocation point and a
rewarder contract by adding to the `poolInfo` , `rewarder` und `lpToken` array.

Emits the Index of the newly added pool (`pid`) among the above parameter.

## Set

Updates the given pools identified by the array index `pid` with a new
allocation point and changes the rewarder contract if `overwrite` is true.

## Update Pool

Update reward variables of the given pool to be up-to-date.

`accSushiPerShare` is the accumulated amount of Sushi per share of this pool and
increased by the difference of `block.number` and `lastRewardBlock` times the
percentage the MasterChefV2 pool has in MCV1 and the percentage this pool has in
MCV2 times the constant emission of SUSHI per block (100) divided by the number
of LP tokens in this pool.

## Pending Sushi

Calculates the amount of Sushi a given user can harvest from a given pool. The
amount of sushi for a user is the number of LP token a user has in this pool
(`user.amount`) times `accSushiPerShare` minus the `rewardDebt`

## Deposit

A depositor deposits LP tokens into a given pool to a given user. `user.amount`
is increased according to the amount. The `rewardDebt` is increased by `amount`
added times `pool.accSushiPerShare` / `ACC_SUSHI_PRECISION` to ensure that the
user does not gain rewards from the past.

The rewarder contract is called with the new lp token amount of the user. Only
afterwards the lp tokens are transferred to the rewarder.

## Withdraw

A user withdraws LP tokens from a given pool to a given address. `user.amount`
is decreased according to the amount. The `rewardDebt` is decreased by `amount`
added times `pool.accSushiPerShare` / `ACC_SUSHI_PRECISION` .

The rewarder contract is called with the new lp token amount of the user. Only
afterwards the lp tokens are transferred to the rewarder.

## Harvest

Allows a user to withdraw the pending amount of Sushi to a given address.

The pending amount is `user.amount` times `accSushiPerShare` /
`ACC_SUSHI_PRECISION` - `user.rewardDebt`.

The rewardDebt needs to be increased to mark the withdrawal to `user.amount`
times `accSushiPerShare` / `ACC_SUSHI_PRECISION`.

A call is executed to the `rewarder` with the function call of `onSushiReward`
defined by the interface below.

## Sushi Per Block

function sushiPerBlock() public view returns (uint256 amount) {

amount \= uint256(MASTERCHEF_SUSHI_PER_BLOCK)

.mul(masterChef.poolInfo(MASTER_PID).allocPoint) / masterChef.totalAllocPoint();

## External Rewards

Projects that want to give out additional incentives can do so by creating a
contract that follows the interface below.

function onSushiReward(uint256 pid, address user, address recipient, uint256
sushiAmount, uint256 newLpAmount) external;

function pendingTokens(uint256 pid, address user, uint256 sushiAmount) external
view returns (IERC20\[\] memory, uint256\[\] memory);

The function onSushiReward is executed on the distribution of rewards with the
user and the amount of Sushi given out being specified. The responsibility of
implementing additional rewards now lies in the hands of the other project.

## Reward Token

In Addition to the data currently provided to MasterChef on pool addition a
rewarder is added, the new interface for add is, therefore:

function add(uint256 allocPoint, IERC20 \_lpToken, IRewarder \_rewarder) public
onlyOwner;

## Harvest From MCV1

Sushi has to be manually harvested from MCV1 to be able to withdrawn.

function harvestFromMasterChef () public {

masterChef.deposit(MASTER_PID, 0);

In the current draft, the exact pending amount has to be available for a
withdraw to succeed. This may cause issues because of rounding errors in case
there is only one user in the pool but also protects the user from withdrawing
without their allocated SUSHI.

##

Draft

##

Test

##

Changes of Total Allocation in MCV1 and allocation of Master Pool

If the total Allocation of MCV1 is changed or the allocation point of the master
pool, all pools on MCV2 have to be updated as well before the update on MCV1,
the Gnosis Safe should be used to update within the same transaction.
