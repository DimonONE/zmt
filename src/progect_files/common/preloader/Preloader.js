import React from "react";
import gifLoad from "../../../images/Preloaders.svg" 

export const Preloader = (props) => {
    return <div className="preloader">
                <img src={gifLoad} />
            </div>
}