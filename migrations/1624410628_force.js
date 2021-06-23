const Force = artifacts.require("Force");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Force);
};
