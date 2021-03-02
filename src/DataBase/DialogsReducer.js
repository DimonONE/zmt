const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const DialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newsMesage = {
                name: "Alisa", 
                message: state.newValues
            };
            state.MessagesData.push(newsMesage);
            return state;

        
        case UPDATE_MESSAGE_TEXT:
            state.newValues = action.newText;
            return state;
        
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