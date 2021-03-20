import React from "react";
import { Preloader } from "../../common/preloader/Preloader";

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }  
    console.log("Profile")
    return(
        <div>
            <h2>YOU ID: {props.profile.userId}</h2>
            <img src={props.profile.photos.large !== null || undefined ? props.profile.photos.large : <div>Nemae</div> } />
            <p>Name: {props.profile.fullName}</p>
        </div>
    ) 
}

export default Profile;