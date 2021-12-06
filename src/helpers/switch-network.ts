import { DEFAULT_NETWORK, Networks } from "../constants/blockchain";

const switchRequest = () => {
    return window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "" + DEFAULT_NETWORK }],
    });
};

const addChainRequest = (isTestNet:boolean) => {
    return window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [isTestNet?  
            
            {
                chainId: "44787",
                chainName: "Celo Alfajores Testnet",
                rpcUrls: ["https://alfajores-forno.celo-testnet.org","wss://alfajores-forno.celo-testnet.org/ws"],
                blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org//"],
                nativeCurrency: {
                    name: "ACELO",
                    symbol: "ACELO",
                    decimals: 18,
                },
            }:
            {
                chainId: "42220",
                chainName: "Celo Mainnet",
                rpcUrls: ["https://forno.celo.org."],
                blockExplorerUrls: ["https://explorer.celo.org/"],
                nativeCurrency: {
                    name: "CELO",
                    symbol: "CELO",
                    decimals: 18,
                },
            },
        ],
    });
};

export const swithNetwork = async () => {
    if (window.ethereum) {
        try {
            await switchRequest();
        } catch (error: any) {
            if (error.code === 4902) {
                try {
                    await addChainRequest(true);
                    await switchRequest();
                } catch (addError) {
                    console.log(error);
                }
            }
            console.log(error);
        }
    }
};
