require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dNRgWEo5SfORkx2qDY1IKH9M3ROZJ41Y',
      accounts: [
        'fbdbb064491da175d205cb5ce7c1042beabf75ea3bcc4c1203037fe466cb187d',
      ],
    },
  },
}
