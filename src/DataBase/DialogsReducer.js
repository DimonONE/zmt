const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    MessagesData:[
        {id: 1, name: "Dima", message: "helow"},
        {id: 2, name: "Andre", message: "how are you?"},
        {id: 3, name: "Miha", message: "how are you?"},
        {id: 4, name: "Masha", message: "you?"},
        {id: 5, name: "Siroga", message: "how are ?"},
    ],
      
    newValues:"",

    DialogData:[
        {id: 1, name: "Dima"},
        {id: 2, name: "Andre"},
        {id: 3, name: "Miha"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Siroga"},
      
    ],
}

const DialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newsMesage = {
                name: "Alisa", 
                message: state.newValues
            };

            return{...state, MessagesData: [...state.MessagesData, newsMesage]}

        }
        
        case UPDATE_MESSAGE_TEXT: {
            return{
                ...state,
                newValues: action.newText,
            }
        }

        default:
            return state;
    }
}

export const actionCreateAddMessage = () => ({type: ADD_MESSAGE})
export const actionCreateUpdateMessageText = (text) => {
    return ({type: UPDATE_MESSAGE_TEXT,
            newText: text})
}

export default DialogReducer;