import React from "react";
import Dialogs from "./Dialogs"
import {actionCreateAddMessage, actionCreateUpdateMessageText} from "../../../../DataBase/DialogsReducer"



let DialogsConteyner = (props) => {
    let createOnChange = (text) => {
        props.dispatch(actionCreateUpdateMessageText(text))
        console.log(text)
    }

    let addMessageElement = () => {
        props.dispatch(actionCreateAddMessage())
        props.dispatch(actionCreateUpdateMessageText(""))
    }
    
    return(
        <Dialogs structurDialogs={props.state.structurDialogs}  
        actionCreateUpdateMessageText={createOnChange} 
        actionCreateAddMessage={addMessageElement}/>
    );
}

export default DialogsConteyner;