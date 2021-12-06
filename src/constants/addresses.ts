import { Networks } from "./blockchain";

const CELO_MAINNET = {
    DAO_ADDRESS: "",
    STAKED_TELESTO_ADDRESS: "",
    TELESTO_ADDRESS: "",
    CEUR_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    TELESTO_BONDING_CALC_ADDRESS: "",
    TREASURY_ADDRESS: "",
    ZAPIN_ADDRESS: "",
};

const CELO_ALFAJORES = {
    DAO_ADDRESS: "",
    STAKED_TELESTO_ADDRESS: "",
    TELESTO_ADDRESS: "",
    CEUR_ADDRESS: "",
    STAKING_ADDRESS: "",
    STAKING_HELPER_ADDRESS: "",
    TELESTO_BONDING_CALC_ADDRESS: "",
    TREASURY_ADDRESS: "",
    ZAPIN_ADDRESS: "",
};



export const getAddresses = (networkID: number) => {
    if (networkID === Networks.CELO_ALFAJORES) return CELO_ALFAJORES;

    throw Error("Switch to Alfajores");
};
