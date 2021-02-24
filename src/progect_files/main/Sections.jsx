import React from "react";
import styles from "./Sections.module.css";
import "./../Head/Head"
import Head from "./../Head/Head";
import { Route } from "react-router-dom";

let Section = () => {
    return(
        <div className={styles.section}>
            <Route path="/head" component={Head} />
            <Route path="/news" component={Head} />
        </div>
    );
}

export default Section;