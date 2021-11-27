import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
//import TELOIcon from "../../assets/tokens/TELO.svg";
import MimTelestoIcon from "../../assets/tokens/TELESTO-MIM.svg";
import TELOTelestoIcon from "../../assets/tokens/TELESTO-TELO.svg";

import { StableBondContract, LpBondContract, WTELOBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "0x694738E0A438d90487b4a549b201142c1a97B556",
            reserveAddress: "0x130966628846BFd36ff31a822705796e8cb8C18D",
        },
    },
});

export const wTELO = new CustomBond({
    name: "wTELO",
    displayName: "wTELO",
    bondToken: "TELO",
    bondIconSvg: "",
    bondContractABI: WTELOBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "0xE02B1AA2c4BE73093BE79d763fdFFC0E3cf67318",
            reserveAddress: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
        },
    },
});

export const mimTelesto = new LPBond({
    name: "mim_time_lp",
    displayName: "TELESTO-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTelestoIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "0xA184AE1A71EcAD20E822cB965b99c287590c4FFe",
            reserveAddress: "0x113f413371fc4cc4c9d6416cf1de9dfd7bf747df",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/0x130966628846BFd36ff31a822705796e8cb8C18D/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export const TELOTelesto = new CustomLPBond({
    name: "TELO_time_lp",
    displayName: "TELESTO-TELO LP",
    bondToken: "",
    bondIconSvg: TELOTelestoIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.CELO]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
    },
    lpUrl: "https://www.traderjoexyz.com/#/pool/TELO/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

export default [mim, wTELO, mimTelesto, TELOTelesto];
