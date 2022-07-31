import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as ERC20 from "../artifacts/contracts/ERC20/ERC20.sol/ERC20.json";
import * as ERC20Mintable from "../artifacts/contracts/ERC20/ERC20Mintable.sol/ERC20Mintable.json";
import * as ERC20Burnable from "../artifacts/contracts/ERC20/ERC20Burnable.sol/ERC20Burnable.json";
import * as ERC20MintBurn from "../artifacts/contracts/ERC20/ERC20MintBurn.sol/ERC20MintBurn.json";
import * as ERC20AirDrop from "../artifacts/contracts/ERC20/ERC20AirDrop.sol/ERC20AirDrop.json";

async function main() {
    const signer = await initWallet1();
    await deployERC20(signer);
    await deployERC20Mintable(signer);
    await deployERC20Burnable(signer);
    await deployERC20MintBurn(signer);
    await deployERC20AirDrop(signer);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function deployERC20(signer: ethers.Wallet) {
  console.log("Deploying ER20 contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20.abi,
    ERC20.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ER20 Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Mintable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Mintable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Mintable.abi,
    ERC20Mintable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Mintable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Burnable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Burnable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Burnable.abi,
    ERC20Burnable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Burnable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20MintBurn(signer: ethers.Wallet) {
  console.log("Deploying ERC20MintBurn contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20MintBurn.abi,
    ERC20MintBurn.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20MintBurn Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20AirDrop(signer: ethers.Wallet) {
  console.log("Deploying ERC20AirDrop contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20AirDrop.abi,
    ERC20AirDrop.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20AirDrop Contract deployed at ${ERC20Contract.address}`);
}


