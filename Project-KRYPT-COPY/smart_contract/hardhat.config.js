require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/BNipp5vLrZ_1CHYZY0kfr54Ds8hQ4ieU',
      accounts: ['40ff78038b2a04a288afff1e37a12147454fca70683b02137c2c97f9b8210867'],
    },
  },
};