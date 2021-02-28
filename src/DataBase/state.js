const Store = {
//Render 
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
  
  addMessage() {
    debugger
    let newsMesage = {
      name: "Alisa", 
      message: this._state.newValues
    };

    this._state.MessagesData.push(newsMesage);
    this._RenderUpadate(this._state);
  },
  
   updateMessageText(newText) {
    this._state.newValues = newText;
    this._RenderUpadate(this._state);
  }

}

export default Store;

