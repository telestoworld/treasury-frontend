import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import CeurIcon from "../../assets/tokens/CEUR.png";
import MimTelestoIcon from "../../assets/tokens/TELO-CEUR.png";
import CELOTelestoIcon from "../../assets/tokens/TELO-wCELO.png";
import TeloIcon from "../../assets/tokens/TELESTO.png";
import wCeloIcon from "../../assets/tokens/wCELO.png";

import { StableBondContract, LpBondContract, WTELOBondContract, StableReserveContract, LpReserveContract } from "../../abi";
import { CELO_ALFAJORES, CELO_MAINNET } from "src/constants";

export const cEuro = new StableBond({
    name: "cEur",
    displayName: "CEUR",
    bondToken: "CEUR",
    bondIconSvg: CeurIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xe709DFa3dc50175f9c6FB039A4F005D2b916652A",
            reserveAddress: CELO_ALFAJORES.CEUR_ADDRESS,
        },
        [Networks.CELO]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
});

export const cMC02 = new StableBond({
    name: "cMC02",
    displayName: "cMC02",
    bondToken: "cMC02",
    bondIconSvg: TeloIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0x39abd8C055d95a64e81C60718f81e9422e4c8a39",
            reserveAddress: CELO_ALFAJORES.CMC02_ADDRESS,
        },
        [Networks.CELO]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
});

export const wTELO = new CustomBond({
    name: "wCELO",
    displayName: "wCELO",
    bondToken: "WCELO",
    bondIconSvg: wCeloIcon,
    bondContractABI: WTELOBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: CELO_ALFAJORES.WCELO_ADDRESS,
        },
        [Networks.CELO]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: CELO_MAINNET.WCELO_ADDRESS,
        },
    },
});

export const ceurTelesto = new LPBond({
    name: "mim_time_lp",
    displayName: "TELESTO-CEUR LP",
    bondToken: "EUR",
    bondIconSvg: MimTelestoIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "",
            reserveAddress: CELO_MAINNET.CEUR_ADDRESS,
        },
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: CELO_ALFAJORES.CEUR_ADDRESS,
        },

    },
    lpUrl: "https://www.ubeswap.org/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export const TELOTelesto = new CustomLPBond({
    name: "TELO_time_lp",
    displayName: "TELESTO-WCELO LP",
    bondToken: "",
    bondIconSvg: CELOTelestoIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: CELO_MAINNET.WCELO_LP_ADDRESS,
        },
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: CELO_ALFAJORES.WCELO_LP_ADDRESS,
        },
    },
    lpUrl: "https://www.ubeswap.org/#/pool/TELO/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [cMC02];
