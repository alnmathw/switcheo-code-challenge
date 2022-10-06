// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

interface ERC20 {
    function balanceOf(address _owner) external view returns (uint256);
}

contract UtilityBalanceContract {
  struct BalanceStruct {
    address token;
    uint256 amount; 
  }

  function getBalances(address owner, address[] memory tokenAddresses) public view returns(BalanceStruct[] memory) {

    uint256 tokenAddressesLength = tokenAddresses.length;

    BalanceStruct[] memory tokenBalances = new BalanceStruct[](tokenAddressesLength);

    for (uint256 i = 0; i < tokenAddressesLength; i++) {
      uint256 senderBalance = ERC20(tokenAddresses[i]).balanceOf(owner);
      tokenBalances[i] = BalanceStruct(tokenAddresses[i], senderBalance);
    }
    
    return tokenBalances; 
  }
}
