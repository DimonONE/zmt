import React from "react";
import { Preloader } from "../../common/preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }  
    return(
        <div>{props.profile.map( (p) => 
            <div key={p.id}>
                <img src={p.photos.large !== null || undefined ? p.photos.large : <div>Nemae</div> } />
                <p>{p.name}</p>
            </div>)}
        </div>
    ) 
}

export default Profile;