const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const actionCreateAddMessage = () => ({type: ADD_MESSAGE})
export const actionCreateUpdateMessageText = (text) => {
    return ({type: UPDATE_MESSAGE_TEXT,
            newText: text})
}


const Store = {
    _RenderUpadate() {
    console.log("yo")
  },

  subscribe(observer) {
    this._RenderUpadate = observer;
  },

  _state: {
       MessagesData:[
          {name: "Dima", message: "helow"},
          {name: "Andre", message: "how are you?"},
          {name: "Miha", message: "how are you?"},
          {name: "Masha", message: "you?"},
          {name: "Siroga", message: "how are ?"},
  
        ],
        
      newValues:"message",
  
      DialogData:[
          {id: 1, name: "Dima"},
          {id: 2, name: "Andre"},
          {id: 3, name: "Miha"},
          {id: 4, name: "Masha"},
          {id: 5, name: "Siroga"},
        
        ]
  },
  
  getState(){
    return this._state
  },
  

  dispatch(action) {
    if (action.type === ADD_MESSAGE) {
        let newsMesage = {
          name: "Alisa", 
          message: this._state.newValues
        };
    
        this._state.MessagesData.push(newsMesage);
        this._RenderUpadate(this._state);
    
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        this._state.newValues = action.newText;
        this._RenderUpadate(this._state);
    }  
  }
}

export default Store;

