import { Networks } from "./blockchain";

const CELO_MAINNET = {
    DAO_ADDRESS: "",
    STAKED_TELESTO_ADDRESS: "",
    TELESTO_ADDRESS: "",
    MIM_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    TELESTO_BONDING_CALC_ADDRESS: "",
    TREASURY_ADDRESS: "",
    ZAPIN_ADDRESS: "",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.CELO) return CELO_MAINNET;

    throw Error("Network don't support");
};
