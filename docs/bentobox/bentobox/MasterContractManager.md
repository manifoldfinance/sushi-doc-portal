## `MasterContractManager`






### `DOMAIN_SEPARATOR() → bytes32` (public)





### `registerProtocol()` (public)

l without signed message.
    function whitelistMasterContract(address masterContract, bool approved) public onlyOwner



### `whitelistMasterContract(address masterContract, bool approved)` (public)

cts[masterContract] = approved;
        emit LogWhiteListMasterContract(masterC



### `setMasterContractApproval(address user, address masterContract, bool approved, uint8 v, bytes32 r, bytes32 s)` (public)

signature. (See EIP-191)





### `LogWhiteListMasterContract(address masterContract, bool approved)`





### `LogSetMasterContractApproval(address masterContract, address user, bool approved)`





### `LogRegisterProtocol(address protocol)`







