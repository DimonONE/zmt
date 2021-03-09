import React from "react";
import Dialogs from "./Dialogs"
import {actionCreateAddMessage, actionCreateUpdateMessageText} from "../../../../DataBase/DialogsReducer"
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return{
        structurDialogs: state.structurDialogs
    }}

const mapDispatchToProps = (dispatch) => {
    return{
        actionCreateUpdateMessageText: (text) => {
            dispatch(actionCreateUpdateMessageText(text))
        },

        actionCreateAddMessage: () => {
            dispatch(actionCreateAddMessage())
            dispatch(actionCreateUpdateMessageText(""))
        }}
}

const DialogsConteyner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteyner;