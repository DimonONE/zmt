import React from "react";
import Dialogs from "./Dialogs"
import {actionCreateAddMessage, actionCreateUpdateMessageText} from "../../../../DataBase/DialogsReducer"
import { connect } from "react-redux";
import { withLoginRedirect } from "../../../../hok/withLoginsRedirect";


const mapStateToProps = (state) => {
    return{
        structurDialogs: state.structurDialogs,
        isAutorized: state.auth.isAutorized

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

const WithAuthRedirect = withLoginRedirect( Dialogs )
const DialogsConteyner = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect)

export default DialogsConteyner;