import React from "react";
import { withRouter } from "react-router";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUsers, profileUsersThunk } from "../../../DataBase/ProfileReduser";

class ProfileContainerAPI  extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.profileUsersThunk(userId)
    }

    render(){
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.structurProfile.profile
})

let WintRouterContainer = withRouter(ProfileContainerAPI)
const ProfileContainer = connect(mapStateToProps, {setProfileUsers, profileUsersThunk} )(WintRouterContainer)

export default  ProfileContainer;