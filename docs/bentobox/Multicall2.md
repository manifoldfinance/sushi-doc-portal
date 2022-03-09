## `Multicall2`

### `aggregate(struct Multicall2.Call[] calls) → uint256 blockNumber, bytes[] returnData` (public)

### `blockAndAggregate(struct Multicall2.Call[] calls) → uint256 blockNumber, bytes32 blockHash, struct Multicall2.Result[] returnData` (public)

### `getBlockHash(uint256 blockNumber) → bytes32 blockHash` (public)

### `getBlockNumber() → uint256 blockNumber` (public)

### `getCurrentBlockCoinbase() → address coinbase` (public)

### `getCurrentBlockDifficulty() → uint256 difficulty` (public)

### `getCurrentBlockGasLimit() → uint256 gaslimit` (public)

### `getCurrentBlockTimestamp() → uint256 timestamp` (public)

### `getEthBalance(address addr) → uint256 balance` (public)

### `getLastBlockHash() → bytes32 blockHash` (public)

### `tryAggregate(bool requireSuccess, struct Multicall2.Call[] calls) → struct Multicall2.Result[] returnData` (public)

### `tryBlockAndAggregate(bool requireSuccess, struct Multicall2.Call[] calls) → uint256 blockNumber, bytes32 blockHash, struct Multicall2.Result[] returnData` (public)

### `Call`

address target

bytes callData

### `Result`

bool success

bytes returnData
