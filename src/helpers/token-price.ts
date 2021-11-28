import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=celo&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["CELO"] = data["celo"].usd;
    //cache["TELO"] = data["telo"].usd;
    //cache["MCUSD"] = data["mcusd"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
