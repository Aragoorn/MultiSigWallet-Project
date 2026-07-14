const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  // آدرس‌های مالکین و تعداد تاییدهای مورد نیاز
  const owners = [
    "0xA1C6808b8f08D091e2826C9640Be302a310655E1", 
    "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
  ];
  const numConfirmationsRequired = 1;

  const MultiSigWallet = await hre.ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSigWallet.deploy(owners, numConfirmationsRequired);

  await wallet.waitForDeployment();

  console.log(`MultiSigWallet deployed to: ${await wallet.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});