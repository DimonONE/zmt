import { profileAPI, userAPI } from "../API/API"

const SET_USER_INFO = "SET_USER_INFO"
const SET_STATUS = "SET_STATUS"
const SET_UPDATE_STATUS = "SET_UPDATE_STATUS"

const initiaState = {
    profile: null,
    status: null
}

const ProfileReduser = (state=initiaState, action) => {
    switch(action.type){
        case SET_USER_INFO:
            return {...state, profile: action.setProfile}
        
        case SET_STATUS:
            return {...state, status: action.status}
        
        case SET_UPDATE_STATUS:
            return {...state, status: action.status}

        default:
            return state
    }
}

export const setProfileUsers = (setProfile) => ({type: SET_USER_INFO, setProfile })
export const setStatus = (status) => ({type: SET_STATUS, status })
export const setUpdateStatus = (status) => ({type: SET_UPDATE_STATUS, status })


export const profileUsersThunk = (userId) => (dispath) => {
    userAPI.getProfile(userId).then( respons => {
        dispath( setProfileUsers(respons.data) )
    })
}

export const getStatus = (userId) => (dispath) => {
    profileAPI.getStatus(userId).then( respons => {
        dispath( setStatus(respons.data) )
    })
}

export const updateStatus = (status) => (dispath) => {
    profileAPI.UpdateStatus(status).then( respons => {
        if (respons.data.resultCode === 0){
            dispath( setUpdateStatus(status) )
        }
    })
}

export default ProfileReduser;