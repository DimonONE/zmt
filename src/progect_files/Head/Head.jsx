    import React from "react";
    import styles from "./Head.module.css";

    import users_img from '../../images/users.jpg'; 

    let Head = () => {
        return(
            <div >
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>2</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>101</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>232</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>1012</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>2</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>2</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>2</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <div className={styles.users_info}>
                    <div><img src={users_img} alt=""/>
                        <div>
                            <h3>Sur Name</h3>
                            <div className={styles.user_like}>
                                <h4>POST: </h4>
                                <p>2</p>
                            </div>
                            <div className={styles.user_like}>
                                <p>Like: </p>
                                <p>10</p>
                            </div>
                        </div>
                    </div>
                </div>    
                 
            </div>
        );
    }

    export default Head;