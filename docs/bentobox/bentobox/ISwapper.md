## `ISwapper`

### `swap(contract IERC20 fromToken, contract IERC20 toToken, address recipient, uint256 shareToMin, uint256 shareFrom) → uint256 extraShare, uint256 shareReturned` (external)

Withdraws 'amountFrom' of token 'from' from the BentoBox account for this
swapper. Swaps it for at least 'amountToMin' of token 'to'. Transfers the
swapped tokens of 'to' into the BentoBox using a plain ERC20 transfer. Returns
the amount of tokens 'to' transferred to BentoBox. (The BentoBox skim function
will be used by the caller to get the swapped funds).

### `swapExact(contract IERC20 fromToken, contract IERC20 toToken, address recipient, address refundTo, uint256 shareFromSupplied, uint256 shareToExact) → uint256 shareUsed, uint256 shareReturned` (external)

Calculates the amount of token 'from' needed to complete the swap (amountFrom),
this should be less than or equal to amountFromMax. Withdraws 'amountFrom' of
token 'from' from the BentoBox account for this swapper. Swaps it for exactly
'exactAmountTo' of token 'to'. Transfers the swapped tokens of 'to' into the
BentoBox using a plain ERC20 transfer. Transfers allocated, but unused 'from'
tokens within the BentoBox to 'refundTo' (amountFromMax - amountFrom). Returns
the amount of 'from' tokens withdrawn from BentoBox (amountFrom). (The BentoBox
skim function will be used by the caller to get the swapped funds).
