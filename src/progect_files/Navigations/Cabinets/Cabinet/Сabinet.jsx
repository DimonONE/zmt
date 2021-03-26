import React from "react";
import styles from "./Cabinet.module.css";

import DialogsContainer from "../Dialogs/DialogsContainer";

let Cabinet = (props) => {

    return(
        <div className={styles.user_panel}>
            <div className="Dialogs_main">
                <DialogsContainer />
            </div>
            <div className={styles.info}>
                <div className={styles.Avatar}>
                    <img src="" alt=""/>
                </div>
                <h2>Name</h2>
                <h5>Last Name</h5>
                <h4>Age</h4>
                <h4>Posts</h4>
                <h4>Likes</h4>
            </div>
        </div>
    );
}

export default Cabinet;