require('dotenv').config();

module.exports = Object.freeze({
  jsonRpcUrl: process.env.JSON_RPC_URL,
  relayerUrl: process.env.RELAYER_URL,
  ensAddress: process.env.ENS_ADDRESS,
  ensDomains: [process.env.ENS_DOMAIN_1, process.env.ENS_DOMAIN_2],
  clickerContractAddress: process.env.CLICKER_CONTRACT_ADDRESS,
  tokenContractAddress: process.env.TOKEN_CONTRACT_ADDRESS
});

/*
module.exports = Object.freeze({
  legacyENS: true,
  jsonRpcUrl: process.env.JSON_RPC_URL,
  port: process.env.PORT,
  privateKey: process.env.PRIVATE_KEY,
  chainSpec: {
    ensAddress: process.env.ENS_ADDRESS,
    chainId: 0
  },
  ensRegistrars: [process.env.ENS_DOMAIN_1, process.env.ENS_DOMAIN_2, process.env.ENS_DOMAIN_3],
  tokenContractAddress: process.env.TOKEN_CONTRACT_ADDRESS,
  clickerContractAddress: process.env.CLICKER_CONTRACT_ADDRESS
});

*/