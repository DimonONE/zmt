import React from "react";
import { withRouter } from "react-router";
import * as axios from "axios"
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUsers } from "../../../DataBase/ProfileReduser";

class ProfileContainerAPI  extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( respons => {
            this.props.setProfileUsers(respons.data)
        })
    }

    render(){
        
        return <div>
                    <Profile profile={this.props.profile}/>
                </div>
    }
}

const mapStateToProps = (state) => ({
    profile: state.structurProfile.profile
})

let WintRouterContainer = withRouter(ProfileContainerAPI)
const ProfileContainer = connect(mapStateToProps, {setProfileUsers} )(WintRouterContainer)

export default  ProfileContainer;