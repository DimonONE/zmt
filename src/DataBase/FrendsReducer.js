const FREND = "FREND";
const UNFREND = "UNFREND";
const SET_USERS = "SET_USERS";
const CLICK_NUP_PAGE = "CLICK_NUP_PAGE"
const COUNT_USER_SERVER = "COUNT_USER_SERVER"
const IS_LOADING_TOGGLE = "IS_LOADING_TOGGLE"
const DISABLE_BUTTON_FRENDS = "DISABLE_BUTTON_FRENDS"

let initialState = {
    frends:[],
    sizeLinePage: 5,
    countUserServer: 5,
    pageActive: 1,
    isPageLoading: false,
    isDisablet: [],
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
            return {...state, frends: [...action.frends] }
        
        case CLICK_NUP_PAGE:
            return {...state, pageSee: action.page }

        case COUNT_USER_SERVER:

            return {...state, countUserServer: action.count}      
            
        case IS_LOADING_TOGGLE:
            return {...state, isPageLoading: action.isLoading}

        case IS_LOADING_TOGGLE:
            return {...state, isPageLoading: action.isLoading}

        case DISABLE_BUTTON_FRENDS:
            return {...state, isDisablet: action.isDisablet 
                ? [...state.isDisablet, action.userId]
                : state.isDisablet.filter( (id) => id != action.userId)}
        
     
        
        default:
            return state;
    }
}

export const statusFrend = (UserId) => ({type: FREND, UserId})
export const statusUnFrend = (UserId) => ({type: UNFREND, UserId})
export const setFrends = (frends) => ({type: SET_USERS, frends})
export const ClickNumPage = (page) => ({type: CLICK_NUP_PAGE, page})
export const setCountUserServer = (count) => ({type:  COUNT_USER_SERVER, count})
export const isToggelLoad = (isLoading) => ({type:  IS_LOADING_TOGGLE, isLoading})
export const disableButtonsFrends = (isDisablet, userId) => ({type: DISABLE_BUTTON_FRENDS, isDisablet, userId})


export default FrendReducer;