import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../DataBase/authReducer";
import Header from "./Header";

class HeadeComponentAPI extends React.Component {

    componentDidMount(){
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then( respons => {
            if (respons.data.resultCode === 0) {
                let {id, email, login} = respons.data.data
                this.props.setAuthUser(id, email, login)
            }
        })
    }

    render(){
        return(
            <Header {...this.props.data} />
        )
    }
}

let mapStateToProps = (state) => ({
     data: state.auth
})
export const HeadeContainer = connect(mapStateToProps, {setAuthUser})(HeadeComponentAPI)
