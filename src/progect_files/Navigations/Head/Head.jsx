import React from "react";
import styles from "./Head.module.css";

import users_img from '../../../images/users.jpg'; 
import { Field, reduxForm } from "redux-form";


const CreateHTMLPost = (props) => {
    return(
    <div className={styles.users_info}>
        <div><img src={users_img} alt=""/>
            <div>
                <h3>{props.SurName}</h3>
                <div className={styles.user_like}>
                    <h4>POST:</h4>
                    <p>{props.post}</p>
                </div>
                <div className={styles.user_like}>
                    <p>Like: </p>
                    <p>{props.like}</p>
                </div>
            </div>
        </div>
    </div>     
    )}

const PostForm = (props) => {
    return <>
             <form onSubmit={props.handleSubmit}>
                    <h2>SurName</h2>  
                    <Field component={"input"} name={"SurName"}/>

                    <h2>Post</h2>
                    <Field  component={"input"} name={"NamePost"} />
                    <button className={styles.send_message}>Отправить</button>
                </form>
        </>
}
const PostFormRF = reduxForm({form: "posts"})(PostForm)

let Head = (props) => {
    let onSubmit = (postValue) => {
        console.log(postValue);
        props.AddPosts(postValue.SurName, postValue.NamePost )
    }
    

    return(
        <div className={styles.mainHead}>
        
            <div className={styles.send_menu}>
                <PostFormRF onSubmit={onSubmit} />
            </div>
            
            <div>
                {props.structurPost.Post.map( posts => 
                <CreateHTMLPost key={posts.id} post={posts.POST} like={posts.Like} SurName={posts.SurName} />)}
             </div>
        </div>
    );
}

export default Head;