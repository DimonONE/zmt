import { authAPI, userAPI } from "../API/API"

const EXIT_USER = "EXIT_USER"
const SET_AUTH_USER = "SET_AUTH_USER"
const  NOT_AUTHORIZED = "NOT_AUTHORIZED"


const initiaState = {
    id: null,
    email: null,
    password: null,
    login: null,
    isAutorized: false,

}

const AuthReduser = (state=initiaState, action) => {
    switch(action.type){
        case EXIT_USER :
            return {isAutorized: false}

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

export const ExitUser = () => ({type:EXIT_USER})
export const setAuthUser = (id, email, login) => ({type:SET_AUTH_USER, data: {id, email, login}})

export const AuthMeThunk = () => (dispatch) => {
    authAPI.authMe().then( respons => {
        if (respons.data.resultCode === 0) {
            let {id, email, login} = respons.data.data
            dispatch( setAuthUser(id, email, login) )
        }
    })

}

export const LoginingUser = ( dataLogin ) => (dispatch) => {
        userAPI.logining(dataLogin.login, dataLogin.password, dataLogin.rememberMe ).then( respons => {
           if(respons.data.resultCode === 0){
               dispatch(AuthMeThunk())
            }
        })
}

export const ExitUserAccount = () => (dispatch) => {
        userAPI.loginExit().then( respons => {
           if(respons.data.resultCode === 0){
               dispatch(ExitUser())
            }
        })
}




export default AuthReduser;