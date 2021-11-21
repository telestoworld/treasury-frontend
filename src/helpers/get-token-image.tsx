import TelestoImg from "../assets/tokens/TELESTO.svg";
import MemoImg from "../assets/tokens/STAKED_TELESTO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "time") {
        return toUrl(TelestoImg);
    }

    if (name === "memo") {
        return toUrl(MemoImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
