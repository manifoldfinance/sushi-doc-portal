## `IOracle`






### `get(bytes data) → bool success, uint256 rate` (external)

Get the latest exchange rate.




### `peek(bytes data) → bool success, uint256 rate` (external)

Check the last exchange rate without any state changes.




### `peekSpot(bytes data) → uint256 rate` (external)

Check the current spot exchange rate without any state changes. For oracles like TWAP this will be different from peek().




### `symbol(bytes data) → string` (external)

Returns a human readable (short) name about this oracle.




### `name(bytes data) → string` (external)

Returns a human readable name about this oracle.







