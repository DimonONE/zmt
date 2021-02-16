import React from "react";
import styles from "./Headers.module.css";

import logo from '.././images/logo.jpg'; 

let Header = () => {
    return(
        <header className={styles.site_header}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src={logo} alt="logo"/>
                            <p>ЗПФК</p>  
                        </a>
                    </div>  

                    <div className={styles.nav}> 
                        <div className={styles.nav_item}>
                            <a href="#">Головна</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Кабінет</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Спеціальності</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Студенту</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Дистанційно</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Абітуріенту</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Контакти</a>
                        </div>
                        <div className={styles.nav_item}>
                            <a href="#">Новини</a>
                        </div>
                    </div>    

                    <div className={styles.proviles}>
                        <a href=""><p>Registration</p></a>
                        <p>/</p>
                        <a href=""><p>Vhod</p></a>
                    </div>                           
        </header>

    );
}

export default Header;