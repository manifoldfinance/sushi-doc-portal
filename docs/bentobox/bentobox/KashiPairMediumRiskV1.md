## `KashiPairMediumRiskV1`



This contract allows contract calls to any contract (except BentoBox)
from arbitrary callers thus, don't trust calls from this contract in any circumstances.

### `solvent()`



Checks if the user is solvent in the closed liquidation case at the end of the function body.


### `symbol() → string` (external)





### `name() → string` (external)





### `decimals() → uint8` (external)





### `totalSupply() → uint256` (public)





### `constructor(contract IBentoBoxV1 bentoBox_)` (public)

The constructor is only used for the initial master contract. Subsequent clones are initialised via `init`.



### `init(bytes data)` (public)

Serves as the constructor for clones, as clones can't have a regular constructor


`data` is abi encoded in the format: (IERC20 collateral, IERC20 asset, IOracle oracle, bytes oracleData)

### `accrue()` (public)

Accrues the interest on the borrowed tokens and handles the accumulation of fees.



### `_isSolvent(address user, bool open, uint256 _exchangeRate) → bool` (internal)

Concrete implementation of `isSolvent`. Includes a third parameter to allow caching `exchangeRate`.




### `updateExchangeRate() → bool updated, uint256 rate` (public)

Gets the exchange rate. I.e how much collateral to buy 1e18 asset.
This function is supposed to be invoked if needed because Oracle queries can be expensive.




### `_addTokens(contract IERC20 token, uint256 share, uint256 total, bool skim)` (internal)



Helper function to move tokens.


### `addCollateral(address to, bool skim, uint256 share)` (public)

Adds `collateral` from msg.sender to the account `to`.




### `_removeCollateral(address to, uint256 share)` (internal)



Concrete implementation of `removeCollateral`.

### `removeCollateral(address to, uint256 share)` (public)

Removes `share` amount of collateral and transfers it to `to`.




### `_addAsset(address to, bool skim, uint256 share) → uint256 fraction` (internal)



Concrete implementation of `addAsset`.

### `addAsset(address to, bool skim, uint256 share) → uint256 fraction` (public)

Adds assets to the lending pair.




### `_removeAsset(address to, uint256 fraction) → uint256 share` (internal)



Concrete implementation of `removeAsset`.

### `removeAsset(address to, uint256 fraction) → uint256 share` (public)

Removes an asset from msg.sender and transfers it to `to`.




### `_borrow(address to, uint256 amount) → uint256 part, uint256 share` (internal)



Concrete implementation of `borrow`.

### `borrow(address to, uint256 amount) → uint256 part, uint256 share` (public)

Sender borrows `amount` and transfers it to `to`.




### `_repay(address to, bool skim, uint256 part) → uint256 amount` (internal)



Concrete implementation of `repay`.

### `repay(address to, bool skim, uint256 part) → uint256 amount` (public)

Repays a loan.




### `_num(int256 inNum, uint256 value1, uint256 value2) → uint256 outNum` (internal)



Helper function for choosing the correct value (`value1` or `value2`) depending on `inNum`.

### `_bentoDeposit(bytes data, uint256 value, uint256 value1, uint256 value2) → uint256, uint256` (internal)



Helper function for depositing into `bentoBox`.

### `_bentoWithdraw(bytes data, uint256 value1, uint256 value2) → uint256, uint256` (internal)



Helper function to withdraw from the `bentoBox`.

### `_call(uint256 value, bytes data, uint256 value1, uint256 value2) → bytes, uint8` (internal)



Helper function to perform a contract call and eventually extracting revert messages on failure.
Calls to `bentoBox` are not allowed for obvious security reasons.
This also means that calls made from this contract shall *not* be trusted.

### `cook(uint8[] actions, uint256[] values, bytes[] datas) → uint256 value1, uint256 value2` (external)

Executes a set of actions and allows composability (contract calls) to other contracts.




### `liquidate(address[] users, uint256[] maxBorrowParts, address to, contract ISwapper swapper, bool open)` (public)

Handles the liquidation of users' balances, once the users' amount of collateral is too low.




### `withdrawFees()` (public)

Withdraws the fees accumulated.



### `setSwapper(contract ISwapper swapper, bool enable)` (public)

Used to register and enable or disable swapper contracts used in closed liquidations.
MasterContract Only Admin function.




### `setFeeTo(address newFeeTo)` (public)

Sets the beneficiary of fees accrued in liquidations.
MasterContract Only Admin function.





### `LogExchangeRate(uint256 rate)`





### `LogAccrue(uint256 accruedAmount, uint256 feeFraction, uint64 rate, uint256 utilization)`





### `LogAddCollateral(address from, address to, uint256 share)`





### `LogAddAsset(address from, address to, uint256 share, uint256 fraction)`





### `LogRemoveCollateral(address from, address to, uint256 share)`





### `LogRemoveAsset(address from, address to, uint256 share, uint256 fraction)`





### `LogBorrow(address from, address to, uint256 amount, uint256 feeAmount, uint256 part)`





### `LogRepay(address from, address to, uint256 amount, uint256 part)`





### `LogFeeTo(address newFeeTo)`





### `LogWithdrawFees(address feeTo, uint256 feesEarnedFraction)`






### `AccrueInfo`


uint64 interestPerSecond


uint64 lastAccrued


uint128 feesEarnedFraction


### `CookStatus`


bool needsSolvencyCheck


bool hasAccrued



