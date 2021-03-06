import React from "react";
import styles from "./Head.module.css";

import users_img from '../../../images/users.jpg'; 


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


let Head = (props) => {
    let newPostElements = React.createRef();
    let newSurnameElements = React.createRef();

    let OnChangenPostTextElements = () => {
        let post = newPostElements.current.value;
        let Surname = newSurnameElements.current.value;
        props.actionCreateUpdatePost(post, Surname)
        
        console.log(post)
        console.log(Surname)

    }

    let addPost = () => {
        props.actionCreateAddPost()
    }
    
    return(
        <div className={styles.mainHead}>
        
            <div className={styles.send_menu}>
                <h2>SurName</h2>  
                    <input 
                        onChange={OnChangenPostTextElements}
                        ref={newSurnameElements} 
                        value={props.structurePost.newSurName}/>

                    <h2>Post</h2>
                    <input 
                        onChange={OnChangenPostTextElements}
                        ref={newPostElements} 
                        value={props.structurePost.newNamePost}/><br/>

                    <button className={styles.send_message} onClick={addPost} >Отправить</button>
            </div>
            
            <div>
                {props.structurePost.Post.map( posts => <CreateHTMLPost post={posts.POST} like={posts.Like} SurName={posts.SurName} />)}
             </div>
        </div>
    );
}

export default Head;