import React from "react"
import { connect } from "react-redux";
import { LoginingUser } from "../../../DataBase/authReducer";
import LoginPage from "./Login"


class Logins extends React.Component {
 render(){
     return <LoginPage LoginingUser={this.props.LoginingUser}/>
 }   
}

let mapDispatchToProps = (state) => {
}

const LoginContainer = connect(mapDispatchToProps, {LoginingUser })(Logins)

export default LoginContainer;