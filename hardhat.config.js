require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env" });

/** @type import('hardhat/config').HardhatUserConfig */

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [privateKey],
    },
  },
};
