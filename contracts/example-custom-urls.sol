// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "@redstone-finance/evm-connector/contracts/data-services/CustomUrlsConsumerBase.sol";

contract CustomUrlsExample is CustomUrlsConsumerBase {
  function getValue() public view returns (uint256) {
    bytes32 dataFeedId = bytes32("0xa5b433db2cb6e54d");
    return getOracleNumericValueFromTxMsg(dataFeedId);
  }
}