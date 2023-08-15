## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch the historical transaction for an address which can be filtered by token types (i.e. ERC20, ERC721, etc.). For each transfer, the fields below are printed, however, to see all fields refer to the [Alchemy API reference](https://docs.alchemy.com/reference/sdk-getassettransfers):

- the from address of the transfer
- the to address of the transfer
- transaction hash of the transfer
- unique id of transfer
- block number where transfer occurred
- token symbol
- asset transfer value


## Steps to Run

Before running the script, ensure that you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/alchemyplatform/get-transfer-history`


2. Navigate to the project folder: `cd get-transfer-history`

3. Install the Alchemy SDK and the dotenv package running either of the following commands:
   * `yarn add`
   * `npm i`

4. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`. If you don't have an Alchemy API Key yet you can [create one for free here](https://alchemy.com/?a=starter-code). Simply make an account and find the "Access Keys" section in the dashboard to generate your own key!

5. Open `getTransferHistory.js` and update the contract address found within the main function to reflect the NFT that you will be querying. 

6. Run the script in the terminal: `node getTransferHistory.js`


By following these steps, the script will get the transfer history of an NFT, printing out the desired fields to the console.


## Frequently Used Options and Best Practices
When working with the Alchemy SDK, there are several options and best practices that you can consider:

### Pagination
By default, the request for NFTs has a page size of 100. If you have a large number of transfers and want to retrieve all of them, you can implement pagination. Alchemy's API supports pagination using the `page` and `size` parameters. You can adjust the `size` parameter to specify the number of NFTs to retrieve per page and use the `page` parameter to iterate through the pages of results.

### Filtering and Excluding NFTs
The Alchemy API allows you to apply filters to your NFT requests. For example, you can exclude certain NFTs based on specific criteria. The exact filtering options depend on the available fields and operators supported by Alchemy's API. Please refer to the linked API reference doc above for more information on how to apply filters to your requests.
