require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const AlchemyAPIKEY = "b_ZjVk7ZtmlbOESjpuSB5sxeFYj46YOG";
const RopstenPRIVATEKEY = "b309b3efbf3b8e0426d3175b5444be08e64529239ce552ecb444cd747cf8b513";
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
    apiKey: "KWY58AKHUQQ2S3PWMZT9UUZZZ71H91NG6K"
  }
};
