import Web3 from 'web3'
import { Contract, ethers } from 'ethers'
import { initWallet1 } from './utils/initWallet'
import * as tokenFactory from '../artifacts/contracts/TokenFactory.sol/TokenFactory.json'
import { TokenFactory } from '../typechain-types'

async function main() {
  const signer = await initWallet1()
  if (process.argv.length < 3) {
    throw new Error('Factory address missing')
  }
  const factoryAddress = process.argv[2]
  if (process.argv.length < 4) {
    throw new Error('ERC20 address to clone missing');
  }
  const tokenToCloneAddress = process.argv[3]
  if (process.argv.length < 5) {
    throw new Error('New Token name missing');
  }
  const tokenName = process.argv[4]
  if (process.argv.length < 6) {
    throw new Error('New Token symbol missing');
  }
  const tokenSymbol = process.argv[5]
  if (process.argv.length < 7) {
    throw new Error('New Token symbol missing');
  }
  const totalSupply = process.argv[6]
  const tokenFactoryContract: TokenFactory = new Contract(
    factoryAddress,
    tokenFactory.abi,
    signer,
  ) as TokenFactory
  console.log(`Cloning ERC20`)

  //https://docs.ethers.io/v5/api/contract/contract/#Contract--events
 tokenFactoryContract.once('TokenCreated', (data) => {
    console.log(`Cloned address at ${data}`);
  })

  const newAddressCloned = await tokenFactoryContract.createERC20(
    tokenToCloneAddress,
    tokenName,
    tokenSymbol,
    totalSupply,
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
