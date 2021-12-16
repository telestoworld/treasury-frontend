import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loader.scss";
import Globe_loader from "../../assets/icons/Globe_loader.mp4";

function Loader() {
    return (
        <div className="loader-wrap">
            <video 
                className="loader"
                autoPlay 
                loop 
                muted 
                src={Globe_loader} 
            />
        </div>
    );
}

export default Loader;
