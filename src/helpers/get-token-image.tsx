import TelestoImg from "../assets/tokens/TELESTO.png";
import MemoImg from "../assets/tokens/STAKED_TELESTO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "telo") {
        return toUrl(TelestoImg);
    }

    if (name === "stelo") {
        return toUrl(MemoImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
