import React from "react";
import styles from "./Header.module.css";

import logo from '../.././images/logo.jpg'; 
import { NavLink } from "react-router-dom";

let Header = (params) => {
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
                            <NavLink to="/specificals">Спеціальності</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/student">Студенту</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/contact">Контакти</NavLink>
                        </div>
                        <div className={styles.nav_item}>
                            <NavLink to="/news">Новини</NavLink>
                        </div>
                    </div>    

                    <div className={`${styles.proviles} col-3`}>
                        <a href=""> <p>{params.user}</p></a>

                        <a href=""><p>Регистрація</p></a>
                        <p>/</p>
                        <a href=""><p>Вхід</p></a>
                    </div>                           
        </header>

    );
}

export default Header;