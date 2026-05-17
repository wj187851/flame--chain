require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.20",
  networks: {
    bsc: {
      url: "https://bsc.publicnode.com",
      chainId: 56,
      accounts: [PRIVATE_KEY]
    },
    bsctest: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      accounts: [PRIVATE_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
