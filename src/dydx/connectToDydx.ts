// connectToDydx.ts
import Web3 from 'web3';
import { initDydxClient } from './initClient';


const connectToDydx = async (): Promise<string | undefined> => {
  //@ts-ignore
  if (window.ethereum) {
    try {
        //@ts-ignore
      await window.ethereum.request({ method: 'eth_requestAccounts' });
       //@ts-ignore

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();

      if (accounts.length === 0) {
        console.log('No account found');
        return;
      }

      const accountAddress = accounts[0]; // The connected wallet address
      console.log('Connected', accountAddress);

      const client = await initDydxClient(); // Initialize the dYdX client
      const balances = await client.get.getAccountBalances("dydx1t6c6q0y9r5x3s4qu92xqpyc3z5wjsm5pj8jfyy"); // Fetch balances for the connected account
      console.log({balances}); // Log or process the fetched balances

      return accountAddress; // Return the connected account address
    } catch (error) {
      console.error('Error connecting to dYdX:', error);
    }
  } else {
    console.log('Please install MetaMask!');
  }
};

export default connectToDydx;
