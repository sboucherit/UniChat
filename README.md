# Example

## Running example on development environment

### Installing dependencies

To install dependencies and build projects, run the following commands from the **main directory** of the repository.
```sh
yarn
```

### Running example

**Note**: Before running example, you need to have PostgreSQL installed, up and running.

To run example:

```sh
cd universal-login-example
yarn start:dev [hostAddress]
```

with `hostAddress` being your machine address where the Universal Login service will be accessible via HTTP (default is `localhost`, only local browser will work).

### Running example on testnet environment

Before running example app, you need you need to fill up example config file.
```js
  module.exports = Object.freeze({
    jsonRpcUrl: process.env.JSON_RPC_URL,
    relayerUrl: process.env.RELAYER_URL,
    ensAddress: process.env.ENS_ADDRESS,
    ensDomains: [process.env.ENS_DOMAIN_1, process.env.ENS_DOMAIN_2],
    clickerContractAddress: process.env.CLICKER_CONTRACT_ADDRESS,
    tokenContractAddress: process.env.TOKEN_CONTRACT_ADDRESS
  });
```

To do this, add new file in `universal-login-example` directory and name it `.env`. And then paste there following data:
```
  JSON_RPC_URL='https://rinkeby.infura.io'
  RELAYER_URL='https://relayer.universallogin.io'
  ENS_ADDRESS='0xe7410170f87102DF0055eB195163A03B7F2Bff4A'
  ENS_DOMAIN_1='poppularapp.test'
  ENS_DOMAIN_2='my-id.test'
  TOKEN_CONTRACT_ADDRESS='0x5F81E2afde8297F90b3F9179F8F3eA172f3155A8'
  CLICKER_CONTRACT_ADDRESS='0x01Ed4566E61E3a964059c692e511f441F9B3B8B2'
```
then you can run example, from `universal-login-example` directory:
```
yarn start
```
