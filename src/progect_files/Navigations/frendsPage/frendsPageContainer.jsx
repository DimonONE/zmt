import { connect } from "react-redux";
import FrendsPage from "./frendsPage" 
import React from "react";

import {statusFrend, statusUnFrend, setFrends, ClickNumPage, 
        setCountUserServer, isToggelLoad, disableButtonsFrends} from "../../../DataBase/FrendsReducer"
import { Preloader } from "../../common/preloader/Preloader";
import { getUsers, getUsersChanget } from "../../../API/API";

class FrendsAPIContainer extends React.Component {
    constructor(props) {
        super(props)
        this.props.isToggelLoad(true)
        getUsers(this.props.pageActive, this.props.sizeLinePage)
        .then( respons => {
            this.props.isToggelLoad(false)
            this.props.setFrends(respons.items)
            this.props.setCountUserServer(respons.totalCount)
        })
    }

    onClickChanget = (numPage) => {
        this.props.ClickNumPage(numPage)
        this.props.isToggelLoad(true)
        getUsersChanget(numPage, this.props.sizeLinePage)
        .then( respons => {
            this.props.isToggelLoad(false)
            this.props.setFrends(respons.items)
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
                            isDisablet={this.props.isDisablet}
                            disableButtonsFrends={this.props.disableButtonsFrends}      
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
        isDisablet: state.structurFrends.isDisablet,
    }
}

const FrendsPageContainer = connect(mapStateToProps, {statusFrend, statusUnFrend, setFrends, ClickNumPage, 
    setCountUserServer, isToggelLoad, disableButtonsFrends })(FrendsAPIContainer)

export default  FrendsPageContainer;