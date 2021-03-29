const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    MessagesData:[
        {id: 1, name: "Dima", message: "helow"},
        {id: 2, name: "Andre", message: "how are you?"},
        {id: 3, name: "Miha", message: "how are you?"},
        {id: 4, name: "Masha", message: "you?"},
        {id: 5, name: "Siroga", message: "how are ?"},
    ],


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
                message: action.message
            };

            return{...state, MessagesData: [...state.MessagesData, newsMesage]}

        }

        default:
            return state;
    }
}

const setAddMessage = (message) => ({type: ADD_MESSAGE, message} )

export const AddMessage = (message) => (dispatch) => (
    dispatch( setAddMessage(message) )
)


export default DialogReducer;