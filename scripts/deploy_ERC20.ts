import Web3 from 'web3';
import { Contract, ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as ERC20Lib from "../artifacts/contracts/ERC20Lib.sol/ERC20Lib.json";
import * as tokenFactory from "../artifacts/contracts/TokenFactory.sol/TokenFactory.json";
import { TokenFactory } from "../typechain-types";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying ER20 contract");
    const erc20Factory = new ethers.ContractFactory(
        ERC20Lib.abi, 
        ERC20Lib.bytecode,
        signer
    );
    const ERC20LibContract = await erc20Factory.deploy();
    console.log("Awaiting confirmations");
    //Contract deployed
    await ERC20LibContract.deployed();
    console.log(`Token Contract deployed at ${ERC20LibContract.address}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
