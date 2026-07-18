import { expect } from "chai";
import { ethers } from "hardhat";

describe("MultiSigWallet Contract", function () {
  it("Should correctly set the owners and required confirmations", async function () {
    const [owner1, owner2] = await ethers.getSigners();
    const MultiSig = await ethers.getContractFactory("MultiSigWallet");
    const wallet = await MultiSig.deploy([owner1.address, owner2.address], 2);
    
    expect(await wallet.isOwner(owner1.address)).to.equal(true);
    expect(await wallet.isOwner(owner2.address)).to.equal(true);
    expect(await wallet.numConfirmationsRequired()).to.equal(2);
  });
});