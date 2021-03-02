const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const actionCreateAddMessage = () => ({type: ADD_MESSAGE})
export const actionCreateUpdateMessageText = (text) => {
    return ({type: UPDATE_MESSAGE_TEXT,
            newText: text})
}

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const actionCreateAddPost = () => ({type: ADD_POST})
export const actionCreateUpdatePost = (post, SurName) => {
  return (
    {type: UPDATE_POST,
    cteate:{
      Posts:post,
      SurName: SurName,
    }}
    )
}


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
        // {POST: "milani", Like: 1321, SurName: "Lomsi"},
        // {POST: "Fuuf", Like: 14232, SurName: "Lomsi"},
        // {POST: "string", Like: 221, SurName: "Lomsi"},
        // {POST: "Milk", Like: 1235, SurName: "Lomsi"},
        // {POST: "mihaello", Like: 1235, SurName: "Lomsi"},
        // {POST: "nums", Like: 1253, SurName: "Lomsi"},
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
    if (action.type === ADD_MESSAGE) {
        let newsMesage = {
          name: "Alisa", 
          message: this._state.structurDialogs.newValues
        };
    
        this._state.structurDialogs.MessagesData.push(newsMesage);
        this._RenderUpadate(this._state);
    
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
        this._state.structurDialogs.newValues = action.newText;
        this._RenderUpadate(this._state);
    
    } else if (action.type === ADD_POST){
      let newPost = {
        Like: 1,
        POST: this._state.structurePost.newNamePost,
        SurName: this._state.structurePost.newSurName
      }

      this._state.structurePost.Post.push(newPost)
      this._RenderUpadate(this._state)
    
    } else if (action.type === UPDATE_POST){
      this._state.structurePost.newNamePost = action.cteate.Posts;
      this._state.structurePost.newSurName = action.cteate.SurName;
      this._RenderUpadate(this._state)
    }

  }
}

export default Store;

