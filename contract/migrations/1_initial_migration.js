const Migrations = artifacts.require("Poll");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
