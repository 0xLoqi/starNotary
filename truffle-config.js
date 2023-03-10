/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
//const { infuraKey, mnemonic } = require("./.env");
const mnemonic = process.env["MNEMONIC"];
const infuraKey = process.env["INFURA_KEY"];
//const infuraKey = require("./env/INFURA_API_KEY");
//const fs = require("fs");
//const mnemonic = require("./env/MNEMONIC_METAMASK");

module.exports = {

  networks: {

    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 9545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    sepolia: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://sepolia.infura.io/v3/${infuraKey}`
        ),
      network_id: 11155111,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 30000,
  },

  // Configure your compilers
  compilers: {
    //solc: {
    //version: "^0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
    // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
    // settings: {          // See the solidity docs for advice about optimization and evmVersion
    //  optimizer: {
    //    enabled: false,
    //    runs: 200
    //  },
    //  evmVersion: "byzantium"
    // }
    //},
  },
};
