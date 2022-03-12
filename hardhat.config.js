require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const AlchemyAPIKEY = "x";
const RopstenPRIVATEKEY = "x";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks:{
    ropsten:{
      url:  ` https://eth-ropsten.alchemyapi.io/v2/${AlchemyAPIKEY} ` ,
      accounts : [ `0x${RopstenPRIVATEKEY}` ]
    }
  },
  etherscan: {
    //api hey for ether scan
    apiKey: "x"
  }
};
