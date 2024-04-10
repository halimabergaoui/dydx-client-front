import { ValidatorClient, Network,
    BECH32_PREFIX,
    LocalWallet,
} from "@dydxprotocol/v4-client-js";
import { IndexerConfig, ValidatorConfig } from "@dydxprotocol/v4-client-js";


export async function initDydxClient(){

  // For the deployment by DYDX token holders, use below:
 
 
  const NETWORK: Network = new Network(
    'mainnet',
    new IndexerConfig(
      'https://indexer.dydx.trade',
      'wss://indexer.dydx.trade',
    ),
    new ValidatorConfig(
      'https://dydx-ops-rpc.kingnodes.com', // or other node URL
      'dydx-mainnet-1',
      {
        CHAINTOKEN_DENOM: 'adydx',
        CHAINTOKEN_DECIMALS: 18,
        USDC_DENOM: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
        USDC_GAS_DENOM: 'uusdc',
        USDC_DECIMALS: 6,
      },
    ),
  );
//const NETWORK = Network.testnet();
 
const client = await ValidatorClient.connect(NETWORK.validatorConfig);

console.log(client?.config)

//const wallet = await LocalWallet()
return client
}