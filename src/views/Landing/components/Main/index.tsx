import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import SplashImg from "../../../../assets/icons/telo-fam.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={SplashImg} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="https://app.telesto.finance" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter Treasury</p>
                    </div>
                </Link>
                <Link href="https://wonderland.gitbook.io/wonderland/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>Telesto Dao</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>A reserve currency for the metaverse</p>
                <p>earning compounding interest</p>
            </div>
        </div>
    );
}

export default Main;
