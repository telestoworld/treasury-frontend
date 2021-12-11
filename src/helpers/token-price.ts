import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=moss-carbon-credit&vs_currencies=usd";
    const { data } = await axios.get(url);
    console.log(data);
    cache["moss-carbon-credit"] = data["moss-carbon-credit"].usd;
    cache["TELO"] = data["moss-carbon-credit"].usd;
    //cache["MCUSD"] = data["mcusd"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
