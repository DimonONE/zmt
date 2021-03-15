import React from "react";
import styles from "./frendsPage.module.css";
import * as axios from "axios"
import userAvatar from "../../../images/users.jpg"


class FrendsPage extends React.Component {
    constructor(props) {
        super(props)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.sizeLinePage}`).then( respons => {
            this.props.setFrends(respons.data.items)
            this.props.setCountUserServer(respons.data.totalCount)
        })
        
    }

    onClickChanget = (numPage) => {
        this.props.ClickNumPage(numPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.sizeLinePage}`).then( respons => {
            this.props.setFrends(respons.data.items)
        })
    }

    render() {
        let countPage = Math.ceil( this.props.countUserServer / this.props.sizeLinePage )
        let numPages = []

        for(let i=1; i <= countPage; i++){
            numPages.push(i);
        }


        return(
            <div className={styles.FrendsPage}>
                <div className={styles.navPage}>
                    {numPages.map( (page) => {
                       return <span key={page} 
                            className={ this.props.pageActive === page ? styles.numNavPage : undefined }
                            onClick={ (e) => this.onClickChanget(page) }>{page}</span>
                    } )}
                </div>
                <h1>Друзі</h1>
                <div className={styles.frendInformations}>
                    {this.props.dataFrends.map( f => 
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