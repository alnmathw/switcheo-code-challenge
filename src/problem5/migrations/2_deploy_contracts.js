const UtilityBalanceContract = artifacts.require("UtilityBalanceContract");

module.exports = function(deployer) {
  deployer.deploy(UtilityBalanceContract);
};
