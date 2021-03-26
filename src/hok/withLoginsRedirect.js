import React from "react";
import { Redirect } from "react-router";

export const withLoginRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAutorized) return <Redirect to="/login" />

            return <Component {...this.props} />
        }
    }
    return RedirectComponent;
}