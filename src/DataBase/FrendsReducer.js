const FREND = "FREND";
const UNFREND = "UNFREND";
const SET_USERS = "SET_USERS";
const CLICK_NUP_PAGE = "CLICK_NUP_PAGE"
const COUNT_USER_SERVER = "COUNT_USER_SERVER"

let initialState = {
    frends:[],
    sizeLinePage: 5,
    countUserServer: 5,
    pageActive: 1,

}

const FrendReducer = (state=initialState, action) => {
    switch (action.type) {
        case FREND:
            return {...state, 
                    frends: state.frends.map( (f) => {
                        if (f.id === action.UserId) {
                            return {...f, statusFrend: true}
                        }
                        return f
                    }) 
                }
        
        case UNFREND:
            return {...state, 
                frends: state.frends.map( (f) => {
                    if (f.id === action.UserId) {
                        return {...f, statusFrend: false}
                    }
                    return f
                }) 
            }
        case SET_USERS:
            return {...state,
                    frends: [...action.frends] }
        
        case CLICK_NUP_PAGE:
            return {...state,
                    pageSee: action.page }

        case COUNT_USER_SERVER:

            return {...state, countUserServer: action.count}                    
        
        default:
            return state;
    }
}

export const actionFrendAC = (UserId) => ({type: FREND, UserId})
export const actionUnFrendAC = (UserId) => ({type: UNFREND, UserId})
export const setFrendsAC = (frends) => ({type: SET_USERS, frends})
export const ClickNumPageAC = (page) => ({type: CLICK_NUP_PAGE, page})
export const setCountUserServerAC = (count) => ({type:  COUNT_USER_SERVER, count})


export default FrendReducer;