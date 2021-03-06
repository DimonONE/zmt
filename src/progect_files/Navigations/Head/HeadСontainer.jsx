import React from "react";
import Head from "./Head"
import {actionCreateAddPost, actionCreateUpdatePost} from "../../../DataBase//PostReduser"


let HeadContainer = (props) => {

    let OnChangenPostTextElements = (post, Surname) => {
        props.dispatch(actionCreateUpdatePost(post, Surname))
    }

    let addPost = () => {
        props.dispatch(actionCreateAddPost())
        props.dispatch(actionCreateUpdatePost("", ""))
    }

    return(
        <Head structurePost={props.state.structurePost}
        actionCreateAddPost={addPost}
        actionCreateUpdatePost={OnChangenPostTextElements}/>
    );
}

export default HeadContainer;