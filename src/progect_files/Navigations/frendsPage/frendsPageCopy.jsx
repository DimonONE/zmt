import React from "react";
import styles from "./frendsPage.module.css";
import * as axios from "axios"
import userAvatar from "../../../images/users.jpg"


class FrendsPage extends React.Component {
    constructor(props) {
        super(props)

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( respons => {
                this.props.setFrends(respons.data.items)
            })
    }



    render() {
        return(
            <div className={styles.FrendsPage}>
                <h1>Друзі</h1>
                <div className={styles.frendInfos}>
                    {this.props.dataFrends.frends.map( f => 
                    <div key={f.id} className={styles.frendInfo}> 
                                            <span>
                                                <div className={styles.photo}><img src={f.photos.small != null ? f.photos.small : userAvatar} alt="NoneFhoto"/></div>
                                                <div className={styles.statusFrends}>
                                                    {f.statusFrend ?
                                                    <button onClick={ () => {this.props.statusUnFrend(f.id)} } >Удалить</button> : 
                                                    <button onClick={ () => {this.props.statusFrend(f.id)} } >Добавить</button> }
                                                </div>
                                            </span>
                                            <span>
                                                <div className={styles.name}>{f.name}</div>   
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
}

export default  FrendsPage;