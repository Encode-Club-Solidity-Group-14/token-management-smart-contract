import { BigNumber, BytesLike } from "ethers";
import {ethers} from "ethers";
import { expect } from "chai";
import { artifacts } from "hardhat";
import chai from "chai";
import { beforeEach } from "mocha";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TokenFactory } from '../typechain-types'
const IERC20_SOURCE = "@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20";


describe("ERC20", () => {
  let token: ethers.Contract;
  let accounts: ethers.Wallet[];
  let signer: SignerWithAddress;
  let owner: ethers.Wallet;
  let minterRoleHash: BytesLike;

  // beforeEach(async () => {
  //   accounts =  await ethers.getSigners();
  //   const tokenFactory = await ethers.getContractFactory();
  //   token = await tokenFactory.deploy();
  //   await token.deployed();
  //   minterRoleHash = await token.minterRoleHash();
  //   token =  ethers.getContractFactory("ERC20").deploy();
  
  it("should have a name", async () => {
    const name = await token.name();
    expect(accounts).to.equal("ERC20");
  }).timeout(0);
  it("should have a symbol", async () => {
    const symbol = await token.symbol();
    expect(symbol).to.equal("ERC20");
  }).timeout(0);
  it("should have a total supply", async () => {
    const totalSupply = await token.totalSupply();
    expect(totalSupply).to.equal(0);
  }).timeout(0);
  it("should have a balanceOf", async () => {
    const balance = await token.balanceOf(accounts[0].address);
    expect(balance).to.equal(0);
  }).timeout(0);
  it("should have a transfer", async () => {
    await token.transfer(accounts[1].address, 1);
    const balance = await token.balanceOf(accounts[1].address);
    expect(balance).to.equal(1);
  }).timeout(0);
  it("should have a transferFrom", async () => {
    await token.transfer(accounts[0].address, 1);
    await token.approve(accounts[1].address, 1);
    await token.transferFrom(accounts[0].address, accounts[2].address, 1);
    const balance = await token.balanceOf(accounts[2].address);
    expect(balance).to.equal(1);
  }).timeout(0);
  it("should have a approve", async () => {
    await token.approve(accounts[1].address, 1);
    const allowance = await token.allowance(accounts[0].address, accounts[1].address);
        expect(allowance).to.equal(1);
    }).timeout(0);
  });
//});
