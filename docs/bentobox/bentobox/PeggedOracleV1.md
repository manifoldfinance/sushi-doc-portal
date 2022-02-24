## `PeggedOracleV1`

Oracle used for pegged prices that don't change
@dev




### `getDataParameter(uint256 rate) → bytes` (public)

@notice
@dev




### `get(bytes data) → bool, uint256` (public)

Get the latest exchange rate.




### `peek(bytes data) → bool, uint256` (public)

Check the last exchange rate without any state changes.




### `peekSpot(bytes data) → uint256 rate` (external)

Check the current spot exchange rate without any state changes. For oracles like TWAP this will be different from peek().




### `name(bytes) → string` (public)

Returns a human readable name about this oracle.




### `symbol(bytes) → string` (public)

Returns a human readable (short) name about this oracle.







