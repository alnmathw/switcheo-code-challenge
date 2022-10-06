const { ethers } = require("ethers");

const ADDR = "0xb469DF44C957b0f215Ae4A16d9e2757fa773D652";   // your contract address
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
        "internalType": "struct UtilityBalanceContract.BalanceStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];    // your contract ABI

const ADDRESS = "0xae08c571e771F360c35f5715E36407ECc89D91ed"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x321162Cd933E2Be498Cd2267a90534A804051b11",
	"0x2170ed0880ac9a755fd29b2688956bd959f933f8",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("http://127.0.0.1:9545/");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);