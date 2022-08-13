const { expect } = require('chai');
const { accounts, contract, web3 } = require('@openzeppelin/test-environment');
const { expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
import { artifacts } from "hardhat";

const [owner, user1, user2, user3] = accounts;
const ColorTokenER20 = contract.fromArtifact('ERC20');
const BN = web3.utils.toBN;

describe('ColorToken ERC20 Contract Testing @kas', () => {
  const totalSupplyBN = BN(2000000000);
  const decimalBN = BN(18);


  beforeEach(async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
   
    await CT_Token.transfer(user1, 1000000000, { from: owner });
    await CT_Token.transfer(user2, 1000000000, { from: owner });
    await CT_Token.transfer(user3, 1000000000, { from: owner });
  }
  );
  it('should return total supply', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
    const totalSupply = await CT_Token.totalSupply();
    expect(totalSupply).to.be.bignumber.equal(totalSupplyBN);
  }
  );
  it('should return decimals', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
    const decimals = await CT_Token.decimals();
    expect(decimals).to.be.bignumber.equal(decimalBN);
  }
  );
  it('should return name', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
    const name = await CT_Token.name();
    expect(name).to.be.equal('Color Token');
  }
  );
  it('should return symbol', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
    const symbol = await CT_Token.symbol();
    expect(symbol).to.be.equal('CT');
  }
  );
  it('should return balance of user1', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
    const balance = await CT_Token.balanceOf(user1);
    expect(balance).to.be.bignumber.equal(1000000000);
  }
  );
  it('should return balance of user2', async () => {
    const CT_Token = await ColorTokenER20.new('Color Token', 'CT', 2000000000, 18, {
      from: owner,
    });
  }); 
}); 
