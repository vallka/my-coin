/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

require('dotenv').config()  // Store environment-specific variable from '.env' to process.env
//require('dotenv').config({path: 'dot.env'});

const HDWalletProvider = require("truffle-hdwallet-provider");

console.log('here we are:'+process.env.MNENOMIC);
console.log('here we are again:'+process.env.INFURA_API_KEY);
//console.log(process)
//console.log(process.env)

var mnemonic = "cup pumpkin tell permit divide city when consider upset away payment must";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    // testnets
    // properties
    // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
    // gas: gas limit
    // gasPrice: gas price in gwei
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 3000000,
      gasPrice: 21
    },
    ropsten: {
      //provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY),
      provider: function() {
        return new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY)
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    },
    ropsten1: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/3fc5084ad9b244b09d0b6c6ec7b28446"),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 3000000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 3000000,
      gasPrice: 21
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 3000000,
      gasPrice: 21
    }
  }

};
