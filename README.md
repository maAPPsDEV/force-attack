# Solidity Game - Force Attack

_Inspired by OpenZeppelin's [Ethernaut](https://ethernaut.openzeppelin.com), Force Level_

⚠️Do not try on mainnet!

## Task

Some contracts will simply not take your money `¯\_(ツ)_/¯`

1. Make the balance of the contract greater than zero.

_Hint:_

1. Fallback methods
2. Sometimes the best way to attack a contract is with another contract.

## What will you learn?

1. Deactivate and Self-destruct
   
   The only way to remove code from the blockchain is when a contract at that address performs the `selfdestruct` operation. The remaining Ether stored at that address is sent to a designated target and then the storage and code is removed from the state. Removing the contract in theory sounds like a good idea, but it is potentially dangerous, as if someone sends Ether to removed contracts, the Ether is forever lost.
   
   If you want to deactivate your contracts, you should instead disable them by changing some internal state which causes all functions to revert. This makes it impossible to use the contract, as it returns Ether immediately.

2. Receive Ether
   
   - `receive() external payable { ... }`
   - `fallback () external payable`
   - A contract without a receive Ether function can receive Ether as a recipient of a coinbase transaction (aka miner block reward) or as a destination of a `selfdestruct`. 😬😬😬

## What is the most difficult challenge?

If you send Ether to the target contract through a transaction, it will be rejected, since the target contract is not designed to receive Ether.

No `receive`, no `fallback` function found.

So, how can I send Ether to the cat 🐱 contract?

There is a hidden way for a contract to receive Ether. Read above section.

## Source Code

⚠️This contract contains a bug or risk. Do not use on mainnet!

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Force {
  /*

                   MEOW ?
         /\_/\   /
    ____/ o o \
  /~____  =ø= /
 (______)__m_m)

*/
}

```

## Configuration

### Install Truffle cli

_Skip if you have already installed._

```
npm install -g truffle
```

### Install Dependencies

```
yarn install
```

## Test and Attack!💥

### Run Tests

```
truffle develop
test
```

You should take ownership of the target contract successfully.

```
truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: Hacker
    √ should send ether forcibly (413ms)


  1 passing (440ms)

```
