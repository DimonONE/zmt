import React, { useState }  from "react";
import styles from "./Header.module.css";

import logo from '../.././images/logo.jpg'; 
import { NavLink } from "react-router-dom";

let UserAuth = (props) => {
    return(
        <div className={`${styles.proviles}`}>
            <p>{props.login}</p>
        </div>  
    )
}

let Header = (props) => {
    return(
        <header className={`${styles.site_header}`}>
                    <div className={`${styles.logo} `}>
                        <a href="/head">
                            <img src={logo} alt="logo"/>
                            <p>ЗПФК</p>  
                        </a>
                    </div>  

                    <div className={`${styles.nav} col-7`}> 
                        <div className={styles.nav_item}>
                            <NavLink to="/head">Головна</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/cabinet">Кабінет</NavLink>
                            
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/news">Новини</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/profile">Профиль</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/contact">Контакти</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/frends">Друзі</NavLink>
                        </div>
                    </div>    
                    {props.isAutorized ? <UserAuth login = {props.login} />  :  
                        <div className={`${styles.proviles}`}>
                            <NavLink to="/reg"><p>Регистрація</p></NavLink>
                            <NavLink to="/login"><p>Вхід</p></NavLink>
                        </div>  }
                                             
        </header>

    );
}

export default Header;