import React, {Component} from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
import DesktopVideo from "./DesktopVideo.mp4"
import MobileVideo from "./MobileVideo.mp4"

interface IProps {

}

interface IState {
    matches: boolean
}

export default class Main extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }

    componentDidMount() {
        const handler = (e: { matches: any; }) => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
      }

render() {
    return (
        <div className="landing-main">   
            {this.state.matches && (
                <video id="bgVideo"
                    loop
                    playsInline
                    muted
                    autoPlay 
                    src={DesktopVideo} 
                />)}
            {!this.state.matches && (
                <video id="bgVideo"
                    playsInline
                    loop 
                    muted
                    autoPlay 
                    src={MobileVideo} 
                />)
                }
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
}
