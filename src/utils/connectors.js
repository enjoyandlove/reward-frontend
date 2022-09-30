import { InjectedConnector } from '@web3-react/injected-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { MathWalletConnector } from '@harmony-react/mathwallet-connector';

const infura_key = process.env.REACT_APP_INFURA_KEY || '8e09516377c84767b271d0a681ead189';

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

export const bsc = new BscConnector({
    supportedChainIds: [1, 56, 97], // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
});

export const Wallet_Connect = new WalletConnectConnector({
    supportedChainIds: [1, 56, 97],
    rpc: {
        1: `https://mainnet.infura.io/v3/${infura_key}`,
        56: 'https://bsc-dataseed.binance.org',
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
});

export const mathwallet = new MathWalletConnector({
    chainId: [1, 56, 97],
});