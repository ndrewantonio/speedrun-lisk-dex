// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockLSK
 * @notice A simple ERC20 token for DEX trading
 */
contract MockLSK is ERC20 {
    constructor() ERC20("Mock Lisk", "MLSK") {
        // Mint 1,000,000 tokens to deployer
        _mint(msg.sender, 1_000_000 * 10**decimals());
    }

    /**
     * @notice Public minting function for testing
     */
    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
