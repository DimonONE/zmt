import { connect } from "react-redux";
import FrendsPage from "./frendsPage" 
import React from "react";

import { getFrendsThunkCreater, clickNewPage,  deliteFrend, addFrend } from "../../../DataBase/FrendsReducer"
import { Preloader } from "../../common/preloader/Preloader";

class FrendsAPIContainer extends React.Component {
    constructor(props) {
        super(props)
        this.props.getFrendsThunkCreater(this.props.pageActive, this.props.sizeLinePage)
    }
    
    onClickChanget = (numPage) => {
        this.props.clickNewPage(numPage, this.props.sizeLinePage)
    }

    render() {
        return <>
                {this.props.isPageLoading 
                ? <Preloader /> 
                : <FrendsPage dataFrends={this.props.dataFrends}
                            sizeLinePage={this.props.sizeLinePage}  
                            countUserServer={this.props.countUserServer}  
                            pageActive={this.props.pageActive}  
                            isDisablet={this.props.isDisablet}
                            onClickChanget={this.onClickChanget}     
                            deliteFrend={this.props.deliteFrend}  
                            addFrend={this.props.addFrend}  
                            
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

const FrendsPageContainer = connect(mapStateToProps, { 
      getFrendsThunkCreater, clickNewPage, deliteFrend, addFrend })(FrendsAPIContainer)

export default  FrendsPageContainer;