## `SushiMaker`





### `onlyEOA()`






### `constructor(address _factory, address _bar, address _sushi, address _weth)` (public)





### `bridgeFor(address token) → address bridge` (public)





### `setBridge(address token, address bridge)` (external)





### `convert(address token0, address token1)` (external)





### `convertMultiple(address[] token0, address[] token1)` (external)





### `_convert(address token0, address token1)` (internal)





### `_convertStep(address token0, address token1, uint256 amount0, uint256 amount1) → uint256 sushiOut` (internal)





### `_swap(address fromToken, address toToken, uint256 amountIn, address to) → uint256 amountOut` (internal)





### `_toSUSHI(address token, uint256 amountIn) → uint256 amountOut` (internal)






### `LogBridgeSet(address token, address bridge)`





### `LogConvert(address server, address token0, address token1, uint256 amount0, uint256 amount1, uint256 amountSUSHI)`







