# IRewarder

## Methods

### onSushiReward

```solidity
function onSushiReward(uint256 pid, address user, address recipient, uint256 sushiAmount, uint256 newLpAmount) external nonpayable
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| pid         | uint256 | undefined   |
| user        | address | undefined   |
| recipient   | address | undefined   |
| sushiAmount | uint256 | undefined   |
| newLpAmount | uint256 | undefined   |

### pendingTokens

```solidity
function pendingTokens(uint256 pid, address user, uint256 sushiAmount) external view returns (contract IERC20[], uint256[])
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| pid         | uint256 | undefined   |
| user        | address | undefined   |
| sushiAmount | uint256 | undefined   |

#### Returns

| Name | Type              | Description |
| ---- | ----------------- | ----------- |
| \_0  | contract IERC20[] | undefined   |
| \_1  | uint256[]         | undefined   |
