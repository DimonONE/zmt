import PostReduser from "./PostReduser"
import DialogReducer from "./DialogsReducer"

const Store = {
  _RenderUpadate() {
    console.log("yo")
  },

  subscribe(observer) {
    this._RenderUpadate = observer;
  },

  _state: {
    structurePost:{
      Post: [
        {POST: "Milk", Like: 1, SurName: "Lomsi"},
     ],

    newNamePost: "",
    newSurName:"",
    },
      
    structurDialogs: {
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
    }},
  
  getState(){
    return this._state
  },
  

  dispatch(action) {
    this._state.structurePost = PostReduser(this._state.structurePost, action)
    this._state.structurDialogs = DialogReducer(this._state.structurDialogs, action)
    
    this._RenderUpadate(this._state)
  }
}

export default Store;

