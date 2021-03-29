const ADD_POST = "ADD_POST";

let initailState = {
    Post: [{id:1, POST: "Milk", Like: 1, SurName: "Lomsi"}],
    
  }

const PostReduser = (state=initailState, action) => {
  switch (action.type){
      case ADD_POST: {
        let newsPost = {
          POST: action.post,
          SurName: action.SurName
        }
        return{...state, Post: [...state.Post, newsPost] }
      }

      default:
          return state;    
  }
}

const setAddPosts = (post, SurName) => ({type: ADD_POST, post, SurName})

export const AddPosts = (post, SurName) => (distatch) => {
    distatch( setAddPosts(post, SurName) )
}


export default PostReduser;
