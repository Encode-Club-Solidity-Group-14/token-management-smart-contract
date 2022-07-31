[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Encode-Club-Solidity-Group-14/project_week_02/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Encode-Club-Solidity-Group-14/project_week_02/tree/main)
[![codecov](https://codecov.io/gh/Encode-Club-Solidity-Group-14/project_week_02/branch/main/graph/badge.svg?token=ZISTHFFZFW)](https://codecov.io/gh/Encode-Club-Solidity-Group-14/project_week_02)

# Trixie Token management 

description about the project goes here ...


**Getting Started**

Before everything, clone the project:

```
https://github.com/Encode-Club-Solidity-Group-14/token-management-smart-contract.git
```

**Building**

```
yarn install
```

```
yarn hardhat compile
```

**Tests**

```
yarn hardhat test
```

**Coverage check**

```
npx hardhat coverage
```

# Scritps Usage

**Deploying Tokens supported in our platform**

Script: ``deployERC20.ts``

```
yarn ts-node --files .\scripts\deployERC20.ts
```

- Trixie ER20 Contract deployed at [0xdD6bA18f33731147d759Fa2043d15E87c6e8F178](https://ropsten.etherscan.io/address/0xdD6bA18f33731147d759Fa2043d15E87c6e8F178)
- Trixie ERC20Mintable Contract deployed at [0xE531ebc66C6633c3332be20392a86e052fC76D97](https://ropsten.etherscan.io/address/0xE531ebc66C6633c3332be20392a86e052fC76D97)
- Trixie ERC20Burnable Contract deployed at [0x9c966Ae80A0e668A94C3322f705E5bceC8837BfC](https://ropsten.etherscan.io/address/0x9c966Ae80A0e668A94C3322f705E5bceC8837BfC)
- Trixie ERC20MintBurn Contract deployed at [0x5cFB7Fa8028b0e6f20Fe1030bAc455cFaB812Ce7](https://ropsten.etherscan.io/address/0x5cFB7Fa8028b0e6f20Fe1030bAc455cFaB812Ce7)
- Trixie ERC20AirDrop Contract deployed at [0x22c164521c5Da5C0E9140a6062a08599d537fdc4](https://ropsten.etherscan.io/address/0x22c164521c5Da5C0E9140a6062a08599d537fdc4)


**Factory Responsible for contract Cloning**

Script: ``deployFactory.ts``

```
yarn ts-node --files .\scripts\deployFactory.ts
```

- Trixie ER20 Factory deployed at [0x5E0f0240dE7Ff0d80a3eead4c1350C2a2Ba07fDe](https://ropsten.etherscan.io/address/0x5E0f0240dE7Ff0d80a3eead4c1350C2a2Ba07fDe)

**Cloning ERC20**

This script can be used to clone all ER20 tokens except by the ER20AirDrop. ER20AirDrop requires two additional parameters to be deployed

Script: ``cloneERC20.ts {factory_address} {token_to_be_clone_address} {new_token_name} {new_token_symbol} {new_token_decimals} {new_token_totalSupply}``

```
yarn ts-node --files .\scripts\clone_ERC20.ts 0x801C6E48a292789FaBA743AC6f1656dEc3DbBb97 0x30B868ea1E44676E0EFB61b91969F762402eb835 TRIXIE TRX 18 100000000000000
```

**Cloning ERC20 AirDrop**

TODO

