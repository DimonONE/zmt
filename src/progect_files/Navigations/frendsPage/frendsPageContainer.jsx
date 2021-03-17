import { connect } from "react-redux";
import FrendsPage from "./frendsPage" 
import React from "react";
import * as axios from "axios"

import {statusFrend, statusUnFrend, setFrends, ClickNumPage, 
        setCountUserServer, isToggelLoad,} from "../../../DataBase/FrendsReducer"
import { Preloader } from "../../common/preloader/Preloader";

class FrendsAPIContainer extends React.Component {
    constructor(props) {
        super(props)
        this.props.isToggelLoad(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageActive}&count=${this.props.sizeLinePage}`).then( respons => {
            this.props.isToggelLoad(false)
            this.props.setFrends(respons.data.items)
            this.props.setCountUserServer(respons.data.totalCount)
        })
    }

    onClickChanget = (numPage) => {
        this.props.ClickNumPage(numPage)
        this.props.isToggelLoad(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numPage}&count=${this.props.sizeLinePage}`).then( respons => {
            this.props.isToggelLoad(false)
            this.props.setFrends(respons.data.items)
        })
    }

    render() {
        return <>
                {this.props.isPageLoading ? <Preloader /> :  
                <FrendsPage dataFrends={this.props.dataFrends}
                            sizeLinePage={this.props.sizeLinePage}  
                            countUserServer={this.props.countUserServer}  
                            pageActive={this.props.pageActive}  
                            
                            statusFrend={this.props.statusFrend}  
                            statusUnFrend={this.props.statusUnFrend}  
                            setFrends={this.props.setFrends}  
                            ClickNumPage={this.props.ClickNumPage}  
                            setCountUserServer={this.props.setCountUserServer}     
                            isPageLoading={this.props.isToggelLoad}      
                            onClickChanget={this.onClickChanget}       
                            /> }
                </>
    }
}

const mapStateToProps = (state) => {
    return{
        dataFrends: state.structurFrends.frends,
        sizeLinePage: state.structurFrends.sizeLinePage,
        countUserServer: state.structurFrends.countUserServer,
        pageActive: state.structurFrends.pageActive,
        isPageLoading: state.structurFrends.isPageLoading,
    }
}

const FrendsPageContainer = connect(mapStateToProps, {statusFrend, statusUnFrend, setFrends, ClickNumPage, 
    setCountUserServer, isToggelLoad, })(FrendsAPIContainer)

export default  FrendsPageContainer;