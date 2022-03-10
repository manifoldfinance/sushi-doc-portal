# IStrategy

## Methods

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

### skim

```solidity
function skim(uint256 amount) external nonpayable
```

Send the assets to the Strategy and call skim to invest them.

#### Parameters

| Name   | Type    | Description                     |
| ------ | ------- | ------------------------------- |
| amount | uint256 | The amount of tokens to invest. |

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
