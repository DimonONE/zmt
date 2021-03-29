import React from "react";
import Dialogs from "./Dialogs"
import {AddMessage} from "../../../../DataBase/DialogsReducer"
import { connect } from "react-redux";
import { withLoginRedirect } from "../../../../hok/withLoginsRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
    return{
        structurDialogs: state.structurDialogs,
        isAutorized: state.auth.isAutorized

    }}

export default compose(
                connect(mapStateToProps, {AddMessage}),
                withLoginRedirect)
                (Dialogs)

