import React from "react";
import { connect } from "react-redux";
import { AuthMeThunk } from "../../DataBase/authReducer";
import Header from "./Header";

class HeadeComponentAPI extends React.Component {

    componentDidMount(){
        this.props.AuthMeThunk()
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
export const HeadeContainer = connect(mapStateToProps, { AuthMeThunk })(HeadeComponentAPI)
