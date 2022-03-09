# MasterContractManager

## Methods

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### claimOwnership

```solidity
function claimOwnership() external nonpayable
```

Needs to be called by `pendingOwner` to claim ownership.

### deploy

```solidity
function deploy(address masterContract, bytes data, bool useCreate2) external payable returns (address cloneAddress)
```

Deploys a given master Contract as a clone. Any ETH transferred with this call
is forwarded to the new clone. Emits `LogDeploy`.

#### Parameters

| Name           | Type    | Description                                                                                 |
| -------------- | ------- | ------------------------------------------------------------------------------------------- |
| masterContract | address | The address of the contract to clone.                                                       |
| data           | bytes   | Additional abi encoded calldata that is passed to the new clone via `IMasterContract.init`. |
| useCreate2     | bool    | Creates the clone by using the CREATE2 opcode, in this case `data` will be used as salt.    |

#### Returns

| Name         | Type    | Description                            |
| ------------ | ------- | -------------------------------------- |
| cloneAddress | address | Address of the created clone contract. |

### masterContractApproved

```solidity
function masterContractApproved(address, address) external view returns (bool)
```

masterContract to user to approval state

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### masterContractOf

```solidity
function masterContractOf(address) external view returns (address)
```

Mapping from clone contracts to their masterContract.

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### nonces

```solidity
function nonces(address) external view returns (uint256)
```

user nonces for masterContract approvals

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

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

### registerProtocol

```solidity
function registerProtocol() external nonpayable
```

Other contracts need to register with this master contract so that users can
approve them for the BentoBox.

### setMasterContractApproval

```solidity
function setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

Approves or revokes a `masterContract` access to `user` funds.

#### Parameters

| Name           | Type    | Description                                              |
| -------------- | ------- | -------------------------------------------------------- |
| user           | address | The address of the user that approves or revokes access. |
| masterContract | address | The address who gains or loses access.                   |
| approved       | bool    | If True approves access. If False revokes access.        |
| v              | uint8   | Part of the signature. (See EIP-191)                     |
| r              | bytes32 | Part of the signature. (See EIP-191)                     |
| s              | bytes32 | Part of the signature. (See EIP-191)                     |

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

### whitelistMasterContract

```solidity
function whitelistMasterContract(address masterContract, bool approved) external nonpayable
```

Enables or disables a contract for approval without signed message.

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| masterContract | address | undefined   |
| approved       | bool    | undefined   |

### whitelistedMasterContracts

```solidity
function whitelistedMasterContracts(address) external view returns (bool)
```

masterContract to whitelisted state for approval without signed message

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

## Events

### LogDeploy

```solidity
event LogDeploy(address indexed masterContract, bytes data, address indexed cloneAddress)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| data                     | bytes   | undefined   |
| cloneAddress `indexed`   | address | undefined   |

### LogRegisterProtocol

```solidity
event LogRegisterProtocol(address indexed protocol)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| protocol `indexed` | address | undefined   |

### LogSetMasterContractApproval

```solidity
event LogSetMasterContractApproval(address indexed masterContract, address indexed user, bool approved)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| user `indexed`           | address | undefined   |
| approved                 | bool    | undefined   |

### LogWhiteListMasterContract

```solidity
event LogWhiteListMasterContract(address indexed masterContract, bool approved)
```

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| masterContract `indexed` | address | undefined   |
| approved                 | bool    | undefined   |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| previousOwner `indexed` | address | undefined   |
| newOwner `indexed`      | address | undefined   |
