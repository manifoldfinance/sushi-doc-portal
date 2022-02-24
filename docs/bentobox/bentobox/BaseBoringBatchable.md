## `BaseBoringBatchable`






### `_getRevertMsg(bytes _returnData) → string` (internal)

then the transaction failed silently (without a revert message)
        if (_returnData.length < 68) return "Transaction reverted silently";

        assembly {
            // Slice



### `batch(bytes[] calls, bool revertOnFail) → bool[] successes, bytes[] results` (external)

urn results An array with the returned data of each function call, mapped one-to-one to `calls`.
    // F1: External is ok here because this is the batch function, adding it to a batch makes no sense
    // F2: Calls in the batch may be payable, delegatecall operates in the same context, so each call in the batch has access to msg.value
    // C3: The length of the loop is fully under user control, so can't be explo






