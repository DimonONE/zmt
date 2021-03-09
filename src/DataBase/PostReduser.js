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
      case ADD_POST: {
          let newPost = {
              Like: 1,
              POST: state.newNamePost,
              SurName: state.newSurName
          };
          
          let copyState = {...state}
          copyState.Post = [...state.Post]
          copyState.Post.push(newPost)
          return copyState;  
        }

      case UPDATE_POST: {
        let copyState = {...state}
        copyState.newNamePost = {...state.newNamePost}
        copyState.newNamePost = action.cteate.Posts;

        copyState.newSurName = {...state.newSurName};
        copyState.newSurName = action.cteate.SurName;
        
        return copyState;  
      }

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
