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
                <Link href="javascript:void(0)" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Treasury (Coming Soon)</p>
                    </div>
                </Link>
                <Link href="https://telesto.gitbook.io/telesto/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                <p>Telesto DAO</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>An eco friendly reserve currency for the metaverse</p>
                <p>earning compounding interest</p>
            </div>
        </div>
    );
}

export default Main;
