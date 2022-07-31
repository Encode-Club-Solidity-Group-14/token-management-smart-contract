// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./ERC20.sol";

/**
 * TODO: describe here this contract 
 * @dev Extension of {ERC20} that allows token holders to destroy both their own
 * tokens and those that they have an allowance for, in a way that can be
 * recognized off-chain (via event analysis).
 */
contract ERC20AirDrop is ERC20 {

    bytes32 public _root;
    uint256 public _rewardAmount;
    mapping(address => bool) _claimed;

    /// TODO: add explanation here...
    function init(address owner_, string memory name_, string memory symbol_, uint8 decimals_, uint256 totalSupply_, bytes32 root_, uint256 rewardAmount_) external {
        super.init(owner_, name_, symbol_, decimals_, totalSupply_);
        _root = root_;
        _rewardAmount = rewardAmount_;
    }

    /// TODO: add explanation here...
    function claim(bytes32[] calldata proof_) external {
        require(!_claimed[msg.sender], "Already claimed air drop");
        _claimed[msg.sender] = true;
        bytes32 _leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(proof_, _root, _leaf),
            "Incorrect merkle proof"
        );
        _mint(msg.sender, _rewardAmount);
    }

}