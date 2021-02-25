import React from "react";
import styles from "./Dialogs.module.css";
import avatar from '../.././images/logo.jpg';
import { NavLink } from "react-router-dom";

const Dialog_with_user = (props) => {
    let path = "/cabinet/message_" + props.Id;

    return(
        <div className={styles.diialog_with_user}>
            <NavLink className={styles.active} to={path}><h4>{props.name}</h4></NavLink>
        </div> 
    )
}


const Messages = (props) => {
    return (
            <div className={styles.message_content}>
                    <div className={styles.row_info}>
                        <img  src={avatar} alt=""/>
                        <h5>{props.name}</h5>
                    </div>

                    <div className={styles.message}>
                        <p>{props.message}</p>
                    </div>
            </div>

    )
}



let Dialogs = (params) => {
    return(
        <div className={styles.Dialog}>
            <div>
                <Dialog_with_user name="Dimon" Id="1" />
                <Dialog_with_user name="Andre" Id="2" />
                <Dialog_with_user name="Miha" Id="3" />
                <Dialog_with_user name="Lamula" Id="4" />
                <Dialog_with_user name="Siroga" Id="5" />
            </div>
            

            <div className={styles.messages}>
                <div className="user_init">
                    <img src="" alt=""/>
                    <h3>User name</h3>
                    <p className="online"></p>
                </div>

                <Messages name="Vadim" message="helow"/>
                <Messages name="Dmon" message="how are you?"/>
                <Messages name="Dmon" message="how are you?"/>
                <Messages name="Dmon" message="how are you?"/>

            </div>
        </div>
    );
}

export default Dialogs;