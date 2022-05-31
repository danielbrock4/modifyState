//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ModifyVariable {
    // one state variable x
    uint public x;

    constructor(uint _x) {
        x = _x;
    }

    // when called changes state variable x to 1337
    function modifyToLeet() public {
    x = 1337;
  }
}