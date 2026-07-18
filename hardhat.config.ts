import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    // تنظیمات شبکه بیس را بعداً می‌توانی اینجا اضافه کنی
    // base: {
    //   url: "https://mainnet.base.org",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};

export default config;