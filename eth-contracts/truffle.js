 const HDWalletProvider = require('@truffle/hdwallet-provider');
 const infuraKey = "04b95c9a99b24536a700bc3d3c9ef3f3";
 const mnemonic = "weasel core blue sudden ahead chronic scout style subject payment clock affair"


module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
     rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id:"4",
      gas: 9970677,
      confirmations: 2,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 500,
      gasPrice: 20000000000,
      skipDryRun: true 
    },
  compilers: {
    solc: {
       version: "0.5.5"    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
}
};

