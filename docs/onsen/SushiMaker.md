# SushiMaker

## Methods

### bar

```solidity
function bar() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### bridgeFor

```solidity
function bridgeFor(address token) external view returns (address bridge)
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| token | address | undefined   |

#### Returns

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| bridge | address | undefined   |

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

### convert

```solidity
function convert(address token0, address token1) external nonpayable
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| token0 | address | undefined   |
| token1 | address | undefined   |

### convertMultiple

```solidity
function convertMultiple(address[] token0, address[] token1) external nonpayable
```

#### Parameters

| Name   | Type      | Description |
| ------ | --------- | ----------- |
| token0 | address[] | undefined   |
| token1 | address[] | undefined   |

### factory

```solidity
function factory() external view returns (contract IUniswapV2Factory)
```

#### Returns

| Name | Type                       | Description |
| ---- | -------------------------- | ----------- |
| \_0  | contract IUniswapV2Factory | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### pendingOwner

```solidity
function pendingOwner() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setBridge

```solidity
function setBridge(address token, address bridge) external nonpayable
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| token  | address | undefined   |
| bridge | address | undefined   |

### transferOwnership

```solidity
function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable
```

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| newOwner | address | undefined   |
| direct   | bool    | undefined   |
| renounce | bool    | undefined   |

## Events

### LogBridgeSet

```solidity
event LogBridgeSet(address indexed token, address indexed bridge)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| token `indexed`  | address | undefined   |
| bridge `indexed` | address | undefined   |

### LogConvert

```solidity
event LogConvert(address indexed server, address indexed token0, address indexed token1, uint256 amount0, uint256 amount1, uint256 amountSUSHI)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| server `indexed` | address | undefined   |
| token0 `indexed` | address | undefined   |
| token1 `indexed` | address | undefined   |
| amount0          | uint256 | undefined   |
| amount1          | uint256 | undefined   |
| amountSUSHI      | uint256 | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
