# freeCodeCamp: Full Blockchain Solidity Course JavaScript - Lesson 6: Hardhat Simple Storage

## Getting Started

1. Requirements - make sure you have installed:
    - `git` - to check run `git --version`
    - `Node.js` - to check run `node --version`
    - `Yarn` instead of `npm` - to check run `yarn --version`

2. Usage:
    - Deploy: `yarn hardhat run scripts/deploy.js`
    - Testing: `yarn hardhat test`
    - Test Coverage: `yarn hardhat coverage`
    - Estimate gas: `yarn hardhat test` and see output file called `gas-report.txt`

3. Deployment to a local network
    - Run local hardhat network: `yarn hardhat node`
    - In new terminal window run: `yarn hardhat run scripts/deploy.js --network localhost`
    - you should see transactions happen in your terminal that is running `yarn hardhat node`

4. Deployment to a testnet or mainnet
    - Setup enviornment variables in  `.env` file:
        - `GOERLI_RPC_URL` - ulr of the Goerli testnet node from [Alchemy](https://www.alchemy.com/)
        - `PRIVATE_KEY` - the private key of your account from [metamask](https://metamask.io/)
    - Get testnet ETH: [faucets.chain.link](https://faucets.chain.link/)
    - Deploy: `yarn hardhat run scripts/deploy.js --network goerli`

5. Verify contract on etherscan
    - If you deploy to a testnet or mainnet: setup enviornment vaiable in `.env` file:
        - `ETHERSCAN_API_KEY` - get an [API Key](https://etherscan.io/myapikey)
    - In it's current state, if you have your api key set, it will auto verify goerli contracts!
    - You can manual verify with: `yarn hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS`

6. Linting
    - check linting / code formatting: `yarn lint`
    - fix code formatting: `yarn lint: fix`


### SimpleStorage contract deployed on Goerli Testnet network:

[0xb3092EfeFb4497DF6599312CD750F29f9447A9e3](https://goerli.etherscan.io/address/0xb3092EfeFb4497DF6599312CD750F29f9447A9e3)