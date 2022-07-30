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

Script: ``deploy_ERC20.ts``

```
yarn ts-node --files .\scripts\deploy_ERC20.ts
```

- Trixie ER20 Contract deployed at [0x30B868ea1E44676E0EFB61b91969F762402eb835](TODO)


**Factory Responsible for contract Cloning**

Script: ``deploy_factory.ts``

```
yarn ts-node --files .\scripts\deploy_factory.ts
```

- Trixie ER20 Factory deployed at [0x801C6E48a292789FaBA743AC6f1656dEc3DbBb97](TODO)

**Cloning ERC20**

Script: ``clone_ERC20.ts {factory_address} {token_address} {new_token_name} {new_token_symbol} {new_token_totalSupply}``

```
yarn ts-node --files .\scripts\clone_ERC20.ts 0x801C6E48a292789FaBA743AC6f1656dEc3DbBb97 0x30B868ea1E44676E0EFB61b91969F762402eb835 TRIXIE TRX 100000000000000
```
