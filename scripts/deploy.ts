import { ethers } from "hardhat";

async function main() {
  const [owner1, owner2] = await ethers.getSigners();
  
  console.log("Deploying MultiSig Wallet with accounts:");
  console.log("- Owner 1:", owner1.address);
  console.log("- Owner 2:", owner2.address);

  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  
  // دپلوی با ۲ مالک و حد نصاب ۱ تایید
  const multiSig = await MultiSigWallet.deploy([owner1.address, owner2.address], 1);

  await multiSig.waitForDeployment();

  console.log(`🚀 MultiSigWallet successfully deployed to: ${await multiSig.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});