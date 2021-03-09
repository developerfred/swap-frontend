export const APP_SLUG = 'ditto_swaptobsc';

export const APP_TITLE = 'DITTO redemption for REB2 users    |    Swap to BSC';

export const CACHE_WALLET_KEY = 'wallet';

export const BORDER_RADIUS = 8;

export const SWAP_CONTRACT_ADDRESS_ROPSTEN = '0xFDaCD496EfFB198C81Fb5E74F156e889f4ecCF91';
export const SWAP_CONTRACT_ADDRESS_MAINNET = '0xC621C5dc44Eb12cacEBd5959E07D8FeC508f868E';

export const IS_TESTNET = SWAP_CONTRACT_ADDRESS_MAINNET === '';
export const IS_DEV = IS_TESTNET;

export const SWAP_CONTRACT_ADDRESS = IS_TESTNET || IS_DEV ? SWAP_CONTRACT_ADDRESS_ROPSTEN : SWAP_CONTRACT_ADDRESS_MAINNET;

export const NETWORK_NAME = IS_TESTNET || IS_DEV ? 'Ethereum Testnet Ropsten' : 'Ethereum Mainnet';


export const NETWORK_CHAIN_ID = IS_TESTNET || IS_DEV ? 3 : 1;

export const SECONDARY_COLOR = '#ed7ac0';
