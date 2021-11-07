const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Test", function () {
  it("Should return the new test once it's changed", async function () {
    const Test = await ethers.getContractFactory("Test");
    const test = await Test.deploy("Zero");
    await test.deployed();
    const name = await test.getName()
    console.log('name: ', name)
    await test.setName("Gos");
    const newName = await test.getName()
    console.log('newName', newName)
    expect(newName).to.equal("Gos");
  });
});
