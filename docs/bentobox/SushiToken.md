## `SushiToken`






### `mint(address _to, uint256 _amount)` (public)

Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).



### `delegates(address delegator) → address` (external)

Delegate votes from `msg.sender` to `delegatee`




### `delegate(address delegatee)` (external)

Delegate votes from `msg.sender` to `delegatee`




### `delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s)` (external)

Delegates votes from signatory to `delegatee`




### `getCurrentVotes(address account) → uint256` (external)

Gets the current votes balance for `account`




### `getPriorVotes(address account, uint256 blockNumber) → uint256` (external)

Determine the prior number of votes for an account as of a block number


Block number must be a finalized block or else this function will revert to prevent misinformation.


### `_delegate(address delegator, address delegatee)` (internal)





### `_moveDelegates(address srcRep, address dstRep, uint256 amount)` (internal)





### `_writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes)` (internal)





### `safe32(uint256 n, string errorMessage) → uint32` (internal)





### `getChainId() → uint256` (internal)






### `DelegateChanged(address delegator, address fromDelegate, address toDelegate)`

An event thats emitted when an account changes its delegate



### `DelegateVotesChanged(address delegate, uint256 previousBalance, uint256 newBalance)`

An event thats emitted when a delegate account's vote balance changes




### `Checkpoint`


uint32 fromBlock


uint256 votes



