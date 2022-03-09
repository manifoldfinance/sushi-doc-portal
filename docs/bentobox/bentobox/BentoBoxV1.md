## `BentoBoxV1`

e BentoBox will be lost, use the deposit function instead. contract BentoBoxV1
is MasterContractManager, BoringBatchable { using BoringMath for uint256; using
BoringMath128 for uint128; using BoringERC20 for IERC20; using RebaseLibrary for
Rebase;

    // ************** //
    // *** EVENTS *** //
    // ************** //

    event LogDeposit(IERC20 indexed token

### `allowed(address from)`

enable skimming, not just for deposits, but also for withdrawals or transfers,
enabling better composability. If 'from' is a clone of a masterContract AND the
'from' address has approved that masterContract, it's allowed. modifier
allowed(address from) { if (from != msg.sender && from != address(this)) { //
From is sender or you are skimming address masterContract =
masterContractOf[msg.sender]; require(masterContract != address(0), "BentoBox:
no masterContract"); require(masterC

### `constructor(contract IERC20 wethToken_)` (public)

### `_tokenBalanceOf(contract IERC20 token) → uint256 amount` (internal)

********\*\*\********* // // **_ PUBLIC FUNCTIONS _** // //
**********\*\*\*\*********** //

Helper function to represent a

### `toShare(contract IERC20 token, uint256 amount, bool roundUp) → uint256 share` (external)

n, uint256 amount, bool roundUp ) external view returns (uint256 share) { share
= totals[token].toBase(amount, roundUp); }

Helper function represent shares back into the `token` amount.

### `toAmount(contract IERC20 token, uint256 share, bool roundUp) → uint256 amount` (external)

token, uint256 share, bool roundUp ) external view returns (uint256 amount) {
amount = totals[token].toElastic(share, roundUp); }

Deposit an amount of `token` represented in either `amount` or `share`.

### `deposit(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) → uint256 amountOut, uint256 shareOut` (public)

aram share Token amount represented in shares to deposit. Takes precedence over
`amount`.

### `withdraw(contract IERC20 token_, address from, address to, uint256 amount, uint256 share) → uint256 amountOut, uint256 shareOut` (public)

re Like above, but `share` takes precedence over `amount`. function withdraw(
IERC20 token\_, address from, address to, uint256 amount, uint256 share ) public
allowed(from) returns (uint256 amountOut, uint256 shareOut) { // Checks
require(to != address(0), "BentoBox: to not set"); // To avoid a bad UI from
burning fu

### `transfer(contract IERC20 token, address from, address to, uint256 share)` (public)

y account that has approved them // F3 - Can it be combined with another similar
function? // F3: This isn't combined with transferMultiple for gas optimization
function transfer( IERC20 token, address from, address to, uint

### `transferMultiple(contract IERC20 token, address from, address[] tos, uint256[] shares)` (public)

be combined with another similar function? // F3: This isn't combined with
transfer for gas optimization function transferMultiple( IERC20 token, address
from, address[] calldata tos, uint256[] calldata shares ) public allowed(from) {
// Checks

### `flashLoan(contract IFlashBorrower borrower, address receiver, contract IERC20 token, uint256 amount, bytes data)` (public)

### `batchFlashLoan(contract IBatchFlashBorrower borrower, address[] receivers, contract IERC20[] tokens, uint256[] amounts, bytes data)` (public)

ing with `tokens` and `amounts`.

### `setStrategyTargetPercentage(contract IERC20 token, uint64 targetPercentage_)` (public)

CENTAGE`. function setStrategyTargetPercentage(IERC20 token, uint64
targetPercentage*) public onlyOwner { // Checks require(targetPercentage* <=
MAX_TARGET_PERCENTAGE, "StrategyManager: Target too high");

        // Effects
        strategyData[token].targetPercentage = targetPercentage_;
        emit LogStrat

### `setStrategy(contract IERC20 token, contract IStrategy newStrategy)` (public)

### `harvest(contract IERC20 token, bool balance, uint256 maxChangeAmount)` (public)

m balance True if housekeeping should be done.

### `receive()` (external)

### `LogDeposit(contract IERC20 token, address from, address to, uint256 amount, uint256 share)`

### `LogWithdraw(contract IERC20 token, address from, address to, uint256 amount, uint256 share)`

### `LogTransfer(contract IERC20 token, address from, address to, uint256 share)`

### `LogFlashLoan(address borrower, contract IERC20 token, uint256 amount, uint256 feeAmount, address receiver)`

### `LogStrategyTargetPercentage(contract IERC20 token, uint256 targetPercentage)`

### `LogStrategyQueued(contract IERC20 token, contract IStrategy strategy)`

### `LogStrategySet(contract IERC20 token, contract IStrategy strategy)`

### `LogStrategyInvest(contract IERC20 token, uint256 amount)`

### `LogStrategyDivest(contract IERC20 token, uint256 amount)`

### `LogStrategyProfit(contract IERC20 token, uint256 amount)`

### `LogStrategyLoss(contract IERC20 token, uint256 amount)`

### `StrategyData`

uint64 strategyStartDate

uint64 targetPercentage

uint128 balance
