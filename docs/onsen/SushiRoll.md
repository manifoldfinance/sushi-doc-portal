# SushiRoll

## Methods

### migrate

```solidity
function migrate(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline) external nonpayable
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| tokenA     | address | undefined   |
| tokenB     | address | undefined   |
| liquidity  | uint256 | undefined   |
| amountAMin | uint256 | undefined   |
| amountBMin | uint256 | undefined   |
| deadline   | uint256 | undefined   |

### migrateWithPermit

```solidity
function migrateWithPermit(address tokenA, address tokenB, uint256 liquidity, uint256 amountAMin, uint256 amountBMin, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| tokenA     | address | undefined   |
| tokenB     | address | undefined   |
| liquidity  | uint256 | undefined   |
| amountAMin | uint256 | undefined   |
| amountBMin | uint256 | undefined   |
| deadline   | uint256 | undefined   |
| v          | uint8   | undefined   |
| r          | bytes32 | undefined   |
| s          | bytes32 | undefined   |

### oldRouter

```solidity
function oldRouter() external view returns (contract IUniswapV2Router01)
```

#### Returns

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| \_0  | contract IUniswapV2Router01 | undefined   |

### router

```solidity
function router() external view returns (contract IUniswapV2Router01)
```

#### Returns

| Name | Type                        | Description |
| ---- | --------------------------- | ----------- |
| \_0  | contract IUniswapV2Router01 | undefined   |
