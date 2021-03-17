import React from "react";
import gifLoad from "../../../images/loading.gif" 

export const Preloader = (props) => {
    return <div>
                <img src={gifLoad} />
            </div>
}