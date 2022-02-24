## `RebaseLibrary`

A rebasing library using overflow-/underflow-safe math.




### `toBase(struct Rebase total, uint256 elastic, bool roundUp) → uint256 base` (internal)

Calculates the base value in relationship to `elastic` and `total`.



### `toElastic(struct Rebase total, uint256 base, bool roundUp) → uint256 elastic` (internal)

Calculates the elastic value in relationship to `base` and `total`.



### `add(struct Rebase total, uint256 elastic, bool roundUp) → struct Rebase, uint256 base` (internal)

Add `elastic` to `total` and doubles `total.base`.




### `sub(struct Rebase total, uint256 base, bool roundUp) → struct Rebase, uint256 elastic` (internal)

Sub `base` from `total` and update `total.elastic`.




### `add(struct Rebase total, uint256 elastic, uint256 base) → struct Rebase` (internal)

Add `elastic` and `base` to `total`.



### `sub(struct Rebase total, uint256 elastic, uint256 base) → struct Rebase` (internal)

Subtract `elastic` and `base` to `total`.






