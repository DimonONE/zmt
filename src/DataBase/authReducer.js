import { authAPI } from "../API/API"

const SET_AUTH_USER = "SET_AUTH_USER"
const  NOT_AUTHORIZED = "NOT_AUTHORIZED"


const initiaState = {
    id: null,
    email: null,
    login: null,
    isAutorized: false,

}

const AuthReduser = (state=initiaState, action) => {
    switch(action.type){
        case SET_AUTH_USER:
            return {...state,
                    ...action.data,
                    isAutorized: true}

        case NOT_AUTHORIZED:
            return null

        default:
            return state
    }
}

export const setAuthUser = (id, email, login) => ({type:SET_AUTH_USER, data: {id, email, login}})
export const AuthMeThunk = () => (dispatch) => {
        authAPI.authMe().then( respons => {
            if (respons.data.resultCode === 0) {
                let {id, email, login} = respons.data.data
                dispatch( setAuthUser(id, email, login) )
            }
        })
    
}


export default AuthReduser;