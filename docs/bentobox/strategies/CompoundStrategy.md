# CompoundStrategy

## Methods

### afterExit

```solidity
function afterExit(address to, uint256 value, bytes data) external nonpayable returns (bool success)
```

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| to    | address | undefined   |
| value | uint256 | undefined   |
| data  | bytes   | undefined   |

#### Returns

| Name    | Type | Description |
| ------- | ---- | ----------- |
| success | bool | undefined   |

### bentobox

```solidity
function bentobox() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### cToken

```solidity
function cToken() external view returns (contract IcToken)
```

#### Returns

| Name | Type             | Description |
| ---- | ---------------- | ----------- |
| \_0  | contract IcToken | undefined   |

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

Needs to be called by `pendingOwner` to claim ownership.

### compToken

```solidity
function compToken() external view returns (contract IERC20)
```

#### Returns

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

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

### exited

```solidity
function exited() external view returns (bool)
```

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### factory

```solidity
function factory() external view returns (contract IFactory)
```

#### Returns

| Name | Type              | Description |
| ---- | ----------------- | ----------- |
| \_0  | contract IFactory | undefined   |

### harvest

```solidity
function harvest(uint256 balance, address sender) external nonpayable returns (int256 amountAdded)
```

Harvest any profits made converted to the asset and pass them to the caller.

#### Parameters

| Name    | Type    | Description                                                                            |
| ------- | ------- | -------------------------------------------------------------------------------------- |
| balance | uint256 | The amount of tokens the caller thinks it has invested.                                |
| sender  | address | The address of the initiator of this transaction. Can be used for reimbursements, etc. |

#### Returns

| Name        | Type   | Description                                                         |
| ----------- | ------ | ------------------------------------------------------------------- |
| amountAdded | int256 | The delta (+profit or -loss) that occured in contrast to `balance`. |

### harvestCOMP

```solidity
function harvestCOMP(uint256 minAmount) external nonpayable
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| minAmount | uint256 | undefined   |

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

### token

```solidity
function token() external view returns (contract IERC20)
```

#### Returns

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

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

### weth

```solidity
function weth() external view returns (contract IERC20)
```

#### Returns

| Name | Type            | Description |
| ---- | --------------- | ----------- |
| \_0  | contract IERC20 | undefined   |

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
