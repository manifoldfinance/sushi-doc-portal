## `BoringOwnable`

### `onlyOwner()`

Only allows the `owner` to execute the function.

### `constructor()` (public)

`owner` defaults to msg.sender on construction.

### `transferOwnership(address newOwner, bool direct, bool renounce)` (public)

Transfers ownership to `newOwner`. Either directly or claimable by the new
pending owner. Can only be invoked by the current `owner`.

### `claimOwnership()` (public)

Needs to be called by `pendingOwner` to claim ownership.

### `OwnershipTransferred(address previousOwner, address newOwner)`
