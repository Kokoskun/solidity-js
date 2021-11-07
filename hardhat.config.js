require("@nomiclabs/hardhat-waffle");
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 200000
  }
};