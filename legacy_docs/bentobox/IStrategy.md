# IStrategy

## Methods

### exit

```solidity
function exit(uint256 balance) external nonpayable returns (int256 amountAdded)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| balance | uint256 | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| amountAdded | int256 | undefined   |

### harvest

```solidity
function harvest(uint256 balance, address sender) external nonpayable returns (int256 amountAdded)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| balance | uint256 | undefined   |
| sender  | address | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| amountAdded | int256 | undefined   |

### skim

```solidity
function skim(uint256 amount) external nonpayable
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| amount | uint256 | undefined   |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable returns (uint256 actualAmount)
```

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| amount | uint256 | undefined   |

#### Returns

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| actualAmount | uint256 | undefined   |
