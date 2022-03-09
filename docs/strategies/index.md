# Sushi Strategies

> [WIP]

## Overview

## Primary Methods

### exit

```solidity
function exit(uint256 balance) external nonpayable returns (int256 amountAdded)
```

Withdraw all assets in the safest way possible. This shouldn&#39;t fail.

#### Parameters

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| balance | uint256 | The amount of tokens the caller thinks it has invested. |

#### Returns

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| amountAdded | int256 | The delta (+profit or -loss) that occured in contrast to `balance`. |

### harvest

```solidity
function harvest(uint256 balance, address) external nonpayable returns (int256 amountAdded)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| balance | uint256 | undefined   |
| \_1     | address | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| amountAdded | int256 | undefined   |

### skim

```solidity
function skim(uint256) external nonpayable
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable returns (uint256 actualAmount)
```

Withdraw assets. The returned amount can differ from the requested amount due to
rounding.

_The `actualAmount` should be very close to the amount. The difference should
NOT be used to report a loss. That&#39;s what harvest is for._

#### Parameters

| Name   | Type    | Description                                        |
| ------ | ------- | -------------------------------------------------- |
| amount | uint256 | The requested amount the caller wants to withdraw. |

#### Returns

| Name         | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| actualAmount | uint256 | The real amount that is withdrawn. |

## Collecting

### \_harvestProfit

```solidity
function _harvestProfit() external view returns (int256)
```

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | int256 | undefined   |

### exit

```solidity
function exit(uint256 balance) external nonpayable returns (int256 amountAdded)
```

Withdraw all assets in the safest way possible. This shouldn&#39;t fail.

#### Parameters

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| balance | uint256 | The amount of tokens the caller thinks it has invested. |

#### Returns

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| amountAdded | int256 | The delta (+profit or -loss) that occured in contrast to `balance`. |

### harvest

```solidity
function harvest(uint256 balance, address) external nonpayable returns (int256 amountAdded)
```

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| balance | uint256 | undefined   |
| \_1     | address | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| amountAdded | int256 | undefined   |

### setHarvestProfit

```solidity
function setHarvestProfit(int256 val) external nonpayable
```

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| val  | int256 | undefined   |

### skim

```solidity
function skim(uint256) external nonpayable
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable returns (uint256 actualAmount)
```

Withdraw assets. The returned amount can differ from the requested amount due to
rounding.

_The `actualAmount` should be very close to the amount. The difference should
NOT be used to report a loss. That&#39;s what harvest is for._

#### Parameters

| Name   | Type    | Description                                        |
| ------ | ------- | -------------------------------------------------- |
| amount | uint256 | The requested amount the caller wants to withdraw. |

#### Returns

| Name         | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| actualAmount | uint256 | The real amount that is withdrawn. |

### exit

```solidity
function exit(uint256 balance) external nonpayable returns (int256 amountAdded)
```

Withdraw all assets in the safest way possible. This shouldn&#39;t fail.

#### Parameters

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| balance | uint256 | The amount of tokens the caller thinks it has invested. |

#### Returns

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| amountAdded | int256 | The delta (+profit or -loss) that occured in contrast to `balance`. |

### harvest

```solidity
function harvest(uint256 balance, address) external nonpayable returns (int256 amountAdded)
```

Harvest any profits made converted to the asset and pass them to the caller.

#### Parameters

| Name    | Type    | Description                                             |
| ------- | ------- | ------------------------------------------------------- |
| balance | uint256 | The amount of tokens the caller thinks it has invested. |
| \_1     | address | undefined                                               |

#### Returns

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| amountAdded | int256 | The delta (+profit or -loss) that occured in contrast to `balance`. |

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

### skim

```solidity
function skim(uint256 amount) external nonpayable
```

Send the assets to the Strategy and call skim to invest them.

#### Parameters

| Name   | Type    | Description                     |
| ------ | ------- | ------------------------------- |
| amount | uint256 | The amount of tokens to invest. |

### transferOwnership

```solidity
function transferOwnership(address newOwner, bool direct, bool renounce) external nonpayable
```

Transfers ownership to `newOwner`. Either directly or claimable by the new
pending owner. Can only be invoked by the current `owner`.

#### Parameters

| Name     | Type    | Description                                                                                           |
| -------- | ------- | ----------------------------------------------------------------------------------------------------- |
| newOwner | address | Address of the new owner.                                                                             |
| direct   | bool    | True if `newOwner` should be set immediately. False if `newOwner` needs to use `claimOwnership`.      |
| renounce | bool    | Allows the `newOwner` to be `address(0)` if `direct` and `renounce` is True. Has no effect otherwise. |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable returns (uint256 actualAmount)
```

Withdraw assets. The returned amount can differ from the requested amount due to
rounding.

_The `actualAmount` should be very close to the amount. The difference should
NOT be used to report a loss. That&#39;s what harvest is for._

#### Parameters

| Name   | Type    | Description                                        |
| ------ | ------- | -------------------------------------------------- |
| amount | uint256 | The requested amount the caller wants to withdraw. |

#### Returns

| Name         | Type    | Description                        |
| ------------ | ------- | ---------------------------------- |
| actualAmount | uint256 | The real amount that is withdrawn. |

## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
