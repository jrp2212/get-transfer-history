// Import necessary modules
const { Alchemy, Network, fromHex } = require("alchemy-sdk");
require('dotenv').config();

// Configure Alchemy SDK with API key and network
const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// Main function to fetch transfer history of a NFT
const main = async () => {
  // Contract address of a NFT (replace with your own)
  const address = ["0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"];

  // Get all transactions for the NFT address specified above and store in response variable
  const response = await alchemy.core.getAssetTransfers({
    // Specifies starting block to search for transactions
    fromBlock: "0x0",
    
    // Specifies address of the NFT contract
    contractAddresses: address,

    // Paramaters filters to only include ERC721 tokens
    category: ["erc721"],

    // Will include transfers even if they have zero value
    excludeZeroValue: false,
  });

  // If there are multiple mints of a given NFT contract, you can filter by NFT ID
  const nftId = 3;
  let txns = response.transfers.filter(
    (txn) => fromHex(txn.erc721TokenId) === nftId
  );
    
  // Log transfer information for each transaction
  txns.forEach((transaction) => {
    console.log(`From: ${transaction.from}`);
    console.log(`To: ${transaction.to}`);
    console.log(`Transaction Hash: ${transaction.hash}`);
    console.log(`Unique ID: ${transaction.uniqueId}`);
    console.log(`Block Number: ${transaction.blockNum}`);
    console.log(`Asset: ${transaction.asset}`);
    console.log(`Value: ${transaction.value}`);
    console.log("---------------------------");
  });
};

main();
