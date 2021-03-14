import React from "react";
import styles from "./Dialogs.module.css";
import avatar from '../../../../images/logo.jpg';
import { NavLink } from "react-router-dom";

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
        props.actionCreateUpdateMessageText(text)
        // console.log(text)
    }

    let addMessageElement = () => {
        props.actionCreateAddMessage()
    }

    return(
        <div className={styles.Dialog}>
            <div>
                {props.structurDialogs.DialogData.map( dialog =>
                    <div key={dialog.id} className={styles.diialog_with_user}>
                        <NavLink className={styles.active} to={"/cabinet/chat_id_" + dialog.id}><h4>{dialog.name}</h4></NavLink>
                    </div>     
                )}
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
                    {props.structurDialogs.MessagesData.map( m => 
                        <div key={m.id} className={`${styles.message_content} ${styles.nav_messages}`}>
                                <div className={styles.row_info}>
                                    <img  src={avatar} alt=""/>
                                    <h5>{m.name}</h5>
                                </div>
            
                                <div className={styles.message}>
                                    <p>{m.message}</p>
                                </div>
                        </div>    
                    )}

                    <div className={styles.send_menu}>
                        <input onChange={createOnChange} 
                        placeholder="Enter you message"
                        value={props.structurDialogs.newValues}/>
                        <button className={styles.send_message} onClick={ addMessageElement }>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;