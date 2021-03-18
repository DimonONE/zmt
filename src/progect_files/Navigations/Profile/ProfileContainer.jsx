import React from "react";
import * as axios from "axios"
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUsers } from "../../../DataBase/ProfileReduser";

class ProfileContainerAPI  extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.sizeLinePage}`).then( respons => {
            this.props.setProfileUsers(respons.data.items)
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

const ProfileContainer = connect(mapStateToProps, {setProfileUsers} )(ProfileContainerAPI)

export default  ProfileContainer;