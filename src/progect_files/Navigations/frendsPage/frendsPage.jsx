import React from "react";
import styles from "./frendsPage.module.css";
import { NavLink } from "react-router-dom";
import userAvatar from "../../../images/users.jpg"

const FrendsPage = (props) => {
    let countPage = Math.ceil( props.countUserServer / props.sizeLinePage )
    let numPages = []

    for(let i=1; i <= countPage; i++){
        numPages.push(i);
    }
    return(
        <div className={styles.FrendsPage}>
            <div className={styles.navPage}>
                    {numPages.map( (page) => {
                       return <span key={page} 
                            className={ props.pageActive === page ? styles.numNavPage : undefined }
                            onClick={ (e) => props.onClickChanget(page) }>{page}</span>
                    })}
            </div>
            <h1>Друзі</h1>
            <div className={styles.frendInfos}>
                {props.dataFrends.map( f => 
                <div key={f.id} className={styles.frendInfo}> 
                                        <span>
                                            <NavLink to={`/profiles/${f.id}`}>
                                                <div className={styles.photo}><img src={f.photos.small != null ? f.photos.small : userAvatar} alt="NoneFhoto"/></div>
                                            </NavLink>
                                            <div className={styles.statusFrends}>
                                                {f.statusFrend ?
                                                <button disabled={props.isDisablet.some( (id) => id === f.id)} 
                                                onClick={ () => { props.deliteFrend(f.id)}} >Удалить</button> : 

                                                <button disabled={props.isDisablet.some( (id) => id === f.id)} 
                                                onClick={ () => {props.addFrend(f.id)}} >Добавить</button> }
                                            </div>
                                        </span>
                                        <span>
                                            <NavLink to={`/profiles/${f.id}`}>
                                                <div className={styles.name}>{f.name}</div>   
                                            </NavLink>
                                            <div className={styles.lastName}>{f.lastName}</div>
                                            <div className={styles.lastName}>{f.status}</div>
                                        </span>
                                        <span>
                                            <div className={styles.lastName}>{"f.location.country"}</div>
                                            <div className={styles.lastName}>{"f.location.city"}</div>
                                        </span>
                </div>)}
            </div>
        </div>
    )
} 

export default  FrendsPage;