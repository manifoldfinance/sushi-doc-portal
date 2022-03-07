## `IBentoBoxV1`

### `balanceOf(contract IERC20, address) → uint256` (external)

### `batch(bytes[] calls, bool revertOnFail) → bool[] successes, bytes[] results` (external)

### `batchFlashLoan(contract IBatchFlashBorrower borrower, address[] receivers, contract IERC20[] tokens, uint256[] amounts, bytes data)` (external)

### `claimOwnership()` (external)

### `deploy(address masterContract, bytes data, bool useCreate2)` (external)

### `deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) → uint256 amountOut, uint256 shareOut` (external)

### `flashLoan(contract IFlashBorrower borrower, address receiver, contract IERC20 token, uint256 amount, bytes data)` (external)

### `harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount)` (external)

### `masterContractApproved(address, address) → bool` (external)

### `masterContractOf(address) → address` (external)

### `nonces(address) → uint256` (external)

### `owner() → address` (external)

### `pendingOwner() → address` (external)

### `pendingStrategy(contract IERC20) → contract IStrategy` (external)

### `permitToken(contract IERC20 token, address from, address to, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)` (external)

### `registerProtocol()` (external)

### `setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s)` (external)

### `setStrategy(contract IERC20 token, contract IStrategy newStrategy)` (external)

### `setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_)` (external)

### `strategy(contract IERC20) → contract IStrategy` (external)

### `strategyData(contract IERC20) → uint64 strategyStartDate, uint64 targetPercentage, uint128 balance` (external)

### `toAmount(contract IERC20 token, uint256 share, bool roundUp) → uint256 amount` (external)

### `toShare(contract IERC20 token, uint256 amount, bool roundUp) → uint256 share` (external)

### `totals(contract IERC20) → struct Rebase totals_` (external)

### `transfer(contract IERC20 token, address from, address to, uint256 share)` (external)

### `transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares)` (external)

### `transferOwnership(address newOwner, bool direct, bool renounce)` (external)

### `whitelistMasterContract(address masterContract, bool approved)` (external)

### `whitelistedMasterContracts(address) → bool` (external)

### `withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) → uint256 amountOut, uint256 shareOut` (external)

### `LogDeploy(address masterContract, bytes data, address cloneAddress)`

### `LogDeposit(address token, address from, address to, uint256 amount, uint256 share)`

### `LogFlashLoan(address borrower, address token, uint256 amount, uint256 feeAmount, address receiver)`

### `LogRegisterProtocol(address protocol)`

### `LogSetMasterContractApproval(address masterContract, address user, bool approved)`

### `LogStrategyDivest(address token, uint256 amount)`

### `LogStrategyInvest(address token, uint256 amount)`

### `LogStrategyLoss(address token, uint256 amount)`

### `LogStrategyProfit(address token, uint256 amount)`

### `LogStrategyQueued(address token, address strategy)`

### `LogStrategySet(address token, address strategy)`

### `LogStrategyTargetPercentage(address token, uint256 targetPercentage)`

### `LogTransfer(address token, address from, address to, uint256 share)`

### `LogWhiteListMasterContract(address masterContract, bool approved)`

### `LogWithdraw(address token, address from, address to, uint256 amount, uint256 share)`

### `OwnershipTransferred(address previousOwner, address newOwner)`
