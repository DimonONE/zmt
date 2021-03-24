import { userAPI } from "../API/API"

const SET_USER_INFO = "SET_USER_INFO"

const initiaState = {
    profile: null,
}

const ProfileReduser = (state=initiaState, action) => {
    switch(action.type){
        case SET_USER_INFO:
            return {...state, profile: action.setProfile}

        default:
            return state
    }
}

export const setProfileUsers = (setProfile) => ({type: SET_USER_INFO, setProfile })


export const profileUsersThunk = (userId) => (dispath) => {
    userAPI.getProfile(userId).then( respons => {
        dispath( setProfileUsers(respons.data) )
    })
}

export default ProfileReduser;