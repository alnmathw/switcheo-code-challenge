const { ethers } = require("ethers");

const ADDR = "0x967e8c3934757fCA58a32B7f874BFa1917d60E2E";   // your contract address
const ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "tokenAddresses",
        "type": "address[]"
      }
    ],
    "name": "getBalances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct UtilityContract.BalanceStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];    // your contract ABI

const ADDRESS = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x2170ed0880ac9a755fd29b2688956bd959f933f8 ", // TUSD
	"0xb8c77482e45f1f44de1745f52c74426c631bdd52", // BNB
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("https://mainnet.infura.io/v3/baacf4530bdd414eb0709a6523de4567");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);