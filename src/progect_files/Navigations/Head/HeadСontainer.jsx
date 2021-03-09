import React from "react";
import Head from "./Head"
import {actionCreateAddPost, actionCreateUpdatePost} from "../../../DataBase/PostReduser"
import { connect } from "react-redux";


// let HeadContainer = (props) => {

//     let OnChangenPostTextElements = (post, Surname) => {
//         props.dispatch(actionCreateUpdatePost(post, Surname))
//     }

//     let addPost = () => {
//         props.dispatch(actionCreateAddPost())
//         props.dispatch(actionCreateUpdatePost("", ""))
//     }

//     return(
//         <Head structurePost={props.state.structurePost}
//         actionCreateAddPost={addPost}
//         actionCreateUpdatePost={OnChangenPostTextElements}/>
//     );
// }

const mapStateToProps = (state) => {
    return {
        structurePost: state.structurePost
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        actionCreateUpdatePost: (post, Surname) => {
            dispatch(actionCreateUpdatePost(post, Surname))
        },
        
        actionCreateAddPost: () =>  {
            dispatch(actionCreateAddPost())
            dispatch(actionCreateUpdatePost("", ""))
        }
    }
}


const HeadContainer = connect(mapStateToProps, mapDispatchToProps)(Head)

export default HeadContainer;