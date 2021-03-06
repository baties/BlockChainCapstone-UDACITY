# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 


### Prerequisites (also for for generating the proof.json)

* [NodeJS](https://nodejs.org/en/download/current/) (The install will also include the npm node package manager)
* [ganache-cli](https://github.com/trufflesuite/ganache-cli) Fast Ethereum RPC client for testing and development
* [truffle](https://www.npmjs.com/package/truffle) Development environment, testing framework and asset pipeline for Ethereum
* MetaMask extension installed in your browser and few ethers on Rinkeby Test Network.
* [Docker](https://www.docker.com/) Enterprise Container Platform for High-Velocity Innovation


## Install
Clone this repository:

```
git clone https://github.com/baties/BlockChainCapstone-UDACITY
cd eth-contracts
npm init
```

## Compile
1. Compile the contracts
```
cd eth-contracts
truffle compile 
```

## Running the tests
1. Run the test command
```
cd eth-contracts
truffle test
```
All 10 test should pass
[image](https://github.com/baties/BlockChainCapstone-UDACITY/blob/master/Images/Screenshot%20from%202021-10-10%2023-55-12.png)


## Generating the proof from zokrates
1. Run the zokrates docker image
`docker run -v <path_to_zokrates_code>:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

2. Compile the program 
```
cd code
~/zokrates compile -i square/square.code
```

3. Generate the trusted setup
`~/zokrates setup`

4. Compute witness for your desired pair of number and it's square 
`~/zokrates compute-witness -a number square`

5. Generate proof
`~/zokrates generate-proof`

6. Generate verifier.sol
`~/zokrates export-verifier`

## Built With
```
Truffle v5.4.14 (core: 5.4.14)
Solidity - 0.5.5 (solc-js)
Node v14.18.0
Web3.js v1.5.3
zokrates 0.7.6
```

# Deploy Contracts on Rinkeby Network

```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Warning: Both truffle-config.js and truffle.js were found. Using truffle-config.js.

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)

1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x9ee49c749ddea45491fd4d68bee61af54d711b91d847347274e7a3bd1641fcc4
   > Blocks: 1            Seconds: 13
   > contract address:    0x6B49F4b7697465423C1e11063C89fD000d2ACBad
   > block number:        9446205
   > block timestamp:     1633951575
   > account:             0x2fE3CD81c532BE890F64570d4c9B5A13Fea00DfC
   > balance:             7.676118653993241525
   > gas used:            224605 (0x36d5d)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0044921 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9446206)
   > confirmation number: 2 (block: 9446207)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0044921 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x33eefeb9a84047bd660e2600cb2e1a2ca8a34c243ec319e2dffdee52e0850418
   > Blocks: 1            Seconds: 9
   > contract address:    0xEcF7bB85E49d2862CAa200A6d8C0eeB69b02E550
   > block number:        9446209
   > block timestamp:     1633951635
   > account:             0x2fE3CD81c532BE890F64570d4c9B5A13Fea00DfC
   > balance:             7.655107313993241525
   > gas used:            1004804 (0xf5504)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02009608 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9446210)
   > confirmation number: 2 (block: 9446211)

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xbfb34cd1945c5cf1b6339f1aa212825e9920e711b3728ad35c8fb854134b502e
   > Blocks: 1            Seconds: 10
   > contract address:    0xd428Ce60565018330449b170f711924a3022f0a1
   > block number:        9446212
   > block timestamp:     1633951680
   > account:             0x2fE3CD81c532BE890F64570d4c9B5A13Fea00DfC
   > balance:             7.569830013993241525
   > gas used:            4263865 (0x410fb9)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0852773 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9446213)
   > confirmation number: 2 (block: 9446214)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.10537338 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.10986548 ETH
```

# NFT Minted Token 

Minted creature. Transaction: [0xad5062e9d802e7fbb7583ca4b5827ce8b5b63393a4ce3e78e76f9c9e849d338a](https://rinkeby.etherscan.io/tx/0xad5062e9d802e7fbb7583ca4b5827ce8b5b63393a4ce3e78e76f9c9e849d338a) 
Minted creature. Transaction: [0x244dc7ed6d3462fd355c09441518997baed4bebae5345f068da5fd6adc94026b](https://rinkeby.etherscan.io/tx/0x244dc7ed6d3462fd355c09441518997baed4bebae5345f068da5fd6adc94026b) 
Minted creature. Transaction: [0x50934cdaf0a434657db2d586f44c1e4180fd9b6646dba03b70b690f8d7022bc6](https://rinkeby.etherscan.io/tx/0x50934cdaf0a434657db2d586f44c1e4180fd9b6646dba03b70b690f8d7022bc6) 
Minted creature. Transaction: [0xe82702bab641c1ec60b295007de676595d2945c4b81eaa30a27ac6701d8f28a0](https://rinkeby.etherscan.io/tx/0xe82702bab641c1ec60b295007de676595d2945c4b81eaa30a27ac6701d8f28a0) 
Minted creature. Transaction: [0x225ba077e41a6b66ce1275dd6559a1f880f2f32100ff430581221db74fc25f93](https://rinkeby.etherscan.io/tx/0x225ba077e41a6b66ce1275dd6559a1f880f2f32100ff430581221db74fc25f93) 
Minted creature. Transaction: [0xad5460956eca7c54e9442e51128f1a2e24fd605fd470c71813a704ac99335dce](https://rinkeby.etherscan.io/tx/0xad5460956eca7c54e9442e51128f1a2e24fd605fd470c71813a704ac99335dce) 
Minted creature. Transaction: [0xc89c28901fb3c57829299c015e61127e30baafa03e1067214c7c898582df9abc](https://rinkeby.etherscan.io/tx/0xc89c28901fb3c57829299c015e61127e30baafa03e1067214c7c898582df9abc) 
Minted creature. Transaction: [0x0c1f0faba6a6b77fb67075b92c0c240a430e11501ca5523121c5ce902bb010d9](https://rinkeby.etherscan.io/tx/0x0c1f0faba6a6b77fb67075b92c0c240a430e11501ca5523121c5ce902bb010d9) 
Minted creature. Transaction: [0x91654ca4ad6ad1e67912ea36b8f253816c986089c481f0d2d6ed28c8ee10f096](https://rinkeby.etherscan.io/tx/0x91654ca4ad6ad1e67912ea36b8f253816c986089c481f0d2d6ed28c8ee10f096)


# OPENSEA Token Address :
[9 BatisToken](https://testnets.opensea.io/collection/batistoken)

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


