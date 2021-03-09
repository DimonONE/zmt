const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    MessagesData:[
        {name: "Dima", message: "helow"},
        {name: "Andre", message: "how are you?"},
        {name: "Miha", message: "how are you?"},
        {name: "Masha", message: "you?"},
        {name: "Siroga", message: "how are ?"},
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

            let copyState = {...state}
            copyState.MessagesData = [...state.MessagesData] // тут масив
            copyState.MessagesData.push(newsMesage);
            return copyState;
        }
        
        case UPDATE_MESSAGE_TEXT: {
            let copyState = {...state}
            copyState.newValues = {...state.newValues}
            copyState.newValues = action.newText;
            return copyState;
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