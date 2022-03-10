# SushiMakerKashi

## Methods

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

### convert

```solidity
function convert(contract IKashiWithdrawFee kashiPair) external nonpayable
```

#### Parameters

| Name      | Type                       | Description |
| --------- | -------------------------- | ----------- |
| kashiPair | contract IKashiWithdrawFee | undefined   |

### convertMultiple

```solidity
function convertMultiple(contract IKashiWithdrawFee[] kashiPair) external nonpayable
```

#### Parameters

| Name      | Type                         | Description |
| --------- | ---------------------------- | ----------- |
| kashiPair | contract IKashiWithdrawFee[] | undefined   |

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
event LogConvert(address indexed server, address indexed token0, uint256 amount0, uint256 amountBENTO, uint256 amountSUSHI)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| server `indexed` | address | undefined   |
| token0 `indexed` | address | undefined   |
| amount0          | uint256 | undefined   |
| amountBENTO      | uint256 | undefined   |
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
