import React from "react";
import styles from "./Sections.module.css";
import HeadContainer from "../Head/HeadСontainer";
import Cabinet from "../Cabinets/Cabinet/Сabinet";
import { Route } from "react-router-dom";

let Section = (props) => {
    return(
        <div className={styles.section}>
            <Route path="/head" render={ () => <HeadContainer {...props}/>} />
            <Route path="/cabinet" render={ () => <Cabinet {...props}/>} />
        </div>
    );
}

export default Section;