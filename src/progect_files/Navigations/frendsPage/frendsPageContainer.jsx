import { connect } from "react-redux";
import FrendsPage from "./frendsPage" 
import {actionFrendAC, actionUnFrendAC, setFrendsAC} from "./../../../DataBase/FrendsReducer"

const mapStateToProps = (state) => {
    return{
        dataFrends: state.structurFrends
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
        }
    }
}

const FrendsPageContainer = connect(mapStateToProps, mapDispatchToProps)(FrendsPage)

export default  FrendsPageContainer;