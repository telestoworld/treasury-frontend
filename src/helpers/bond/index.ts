import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import MimTelestoIcon from "../../assets/tokens/TELO-CEUR.png";
import CELOTelestoIcon from "../../assets/tokens/TELO-wCELO.png";
import TeloIcon from "../../assets/tokens/TELESTO.png";
import wCeloIcon from "../../assets/tokens/wCELO.png";

import { StableBondContract, LpBondContract, WTELOBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const cEuro = new StableBond({
    name: "cEur",
    displayName: "CEUR",
    bondToken: "CEUR",
    bondIconSvg: TeloIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
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
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
        [Networks.CELO]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
    },
});

export const mimTelesto = new LPBond({
    name: "mim_time_lp",
    displayName: "TELESTO-CEUR LP",
    bondToken: "MIM",
    bondIconSvg: MimTelestoIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "",
            reserveAddress: "",
        },
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
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
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
        [Networks.CELO_ALFAJORES]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
    },
    lpUrl: "https://www.ubeswap.org/#/pool/TELO/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [ wTELO, mimTelesto, TELOTelesto];
