const FREND = "FREND";
const UNFREND = "UNFREND";
const SET_USERS = "SET_USERS";

let initialState = {
    frends:[],
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
                    frends:  [...action.frends] }
        
        default:
            return state;
    }
}

export const actionFrendAC = (UserId) => ({type: FREND, UserId})
export const actionUnFrendAC = (UserId) => ({type: UNFREND, UserId})
export const setFrendsAC = (frends) => ({type: SET_USERS, frends})


export default FrendReducer;