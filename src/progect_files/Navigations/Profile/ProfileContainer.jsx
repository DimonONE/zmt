import React from "react";
import { withRouter } from "react-router";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUsers, profileUsersThunk, getStatus, updateStatus } from "../../../DataBase/ProfileReduser";

class ProfileContainerAPI  extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId

        let myId = 15933

        this.props.profileUsersThunk(myId)

        this.props.getStatus(myId)

    }

    render(){
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.structurProfile.profile,
    status: state.structurProfile.status,
})

let WintRouterContainer = withRouter(ProfileContainerAPI)
const ProfileContainer = connect(mapStateToProps, {setProfileUsers, profileUsersThunk, getStatus, updateStatus} )(WintRouterContainer)

export default  ProfileContainer;