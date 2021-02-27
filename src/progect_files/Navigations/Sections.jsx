import React from "react";
import styles from "./Sections.module.css";
import Head from "./Head/Head";
import Cabinet from "./Cabinet/Сabinet";
import { Route } from "react-router-dom";

let Section = (props) => {
    return(
        <div className={styles.section}>
            <Route path="/head" render={ () => <Head />} />
            <Route path="/cabinet" render={ () => <Cabinet {...props}/>} />
        </div>
    );
}

export default Section;