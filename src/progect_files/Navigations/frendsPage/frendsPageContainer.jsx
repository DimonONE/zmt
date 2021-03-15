import { connect } from "react-redux";
import FrendsPage from "./frendsPageCopy" 
import {actionFrendAC, actionUnFrendAC, ClickNumPageAC, setCountUserServerAC, setFrendsAC} from "./../../../DataBase/FrendsReducer"

const mapStateToProps = (state) => {
    return{
        dataFrends: state.structurFrends.frends,
        sizeLinePage: state.structurFrends.sizeLinePage,
        countUserServer: state.structurFrends.countUserServer,
        pageActive: state.structurFrends.pageSee,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        statusFrend: (UserId) => {
            dispatch(actionFrendAC(UserId) )
        },

        statusUnFrend: (UserId) => {
            dispatch(actionUnFrendAC(UserId) )
        },

        setFrends: (frends) => {
            dispatch(setFrendsAC(frends))
        },

        ClickNumPage: (page) => {
            dispatch(ClickNumPageAC(page))
        },

        setCountUserServer: (count) => {
            dispatch(setCountUserServerAC(count))
        }
    }
}

const FrendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FrendsPage)

export default  FrendsPageContainer;