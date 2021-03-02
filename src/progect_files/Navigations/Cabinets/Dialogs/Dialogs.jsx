import React from "react";
import styles from "./Dialogs.module.css";
import avatar from '../../../../images/logo.jpg';
import { NavLink } from "react-router-dom";

import {actionCreateAddMessage, actionCreateUpdateMessageText} from "../../../../DataBase/DialogsReducer"


const DialogWithUser = (props) => {
    let path = "/cabinet/chat_id_" + props.Id;

    return(
        <div className={styles.diialog_with_user}>
            <NavLink className={styles.active} to={path}><h4>{props.name}</h4></NavLink>
        </div> 
    )
}


const Messages = (props) => {
    return (
            <div className={`${styles.message_content} ${styles.nav_messages}`}>
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


let Dialogs = (props) => {
    let createOnChange = (e) => {
        let text = e.target.value;
        props.dispatch(actionCreateUpdateMessageText(text))
        // console.log(text)
    }

    let addMessageElement = () => {
        props.dispatch(actionCreateAddMessage())
        props.dispatch(actionCreateUpdateMessageText(""))
    }


    return(
        <div className={styles.Dialog}>
            <div>
                {props.state.structurDialogs.DialogData.map( dialog => <DialogWithUser name={dialog.name} Id={dialog.id} /> )}
            </div>
            
            <div className={styles.messages}>
                <div className={styles.info_for_user}>
                    <div className={`${styles.nav_messages} `}>
                        <img src={avatar} alt=""/>
                        <h3>User name</h3>
                        <p className="online"></p>
                    </div>

                    <div className={styles.item_poisk_message}>
                       <p>Поіск</p> 
                    </div>
                </div>
                <div>
                    {props.state.structurDialogs.MessagesData.map( message => <Messages name={message.name} message={message.message}/>)}

                    <div className={styles.send_menu}>
                        <input onChange={createOnChange} 
                        placeholder="Enter you message"
                        value={props.state.structurDialogs.newValues}/>
                        <button className={styles.send_message} onClick={ addMessageElement }>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;