import React from "react";
import { connect } from "react-redux";
import { AuthMeThunk, ExitUserAccount } from "../../DataBase/authReducer";
import Header from "./Header";

class HeadeComponentAPI extends React.Component {

    componentDidMount(){
        this.props.AuthMeThunk()
    }

    render(){
        return(
            <>
                <Header {...this.props.data} loginExit={this.props.ExitUserAccount} />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
     data: state.auth
})
export const HeadeContainer = connect(mapStateToProps, { AuthMeThunk, ExitUserAccount })(HeadeComponentAPI)
