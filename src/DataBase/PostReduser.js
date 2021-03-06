const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

let initailState = {
    Post: [
      {POST: "Milk", Like: 1, SurName: "Lomsi"},
   ],

    newNamePost: "",
    newSurName:"",
  }

const PostReduser = (state=initailState, action) => {
     switch (action.type){
         case ADD_POST:
            let newPost = {
                Like: 1,
                POST: state.newNamePost,
                SurName: state.newSurName
            }
            state.Post.push(newPost)
            return state;  

        case UPDATE_POST:
            state.newNamePost = action.cteate.Posts;
            state.newSurName = action.cteate.SurName;
            return state;  

        default:
            return state;    
    }
}

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

export default PostReduser;
