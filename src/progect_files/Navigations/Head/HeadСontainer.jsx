
import Head from "./Head"
import {actionCreateAddPost, actionCreateUpdatePost} from "../../../DataBase/PostReduser"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        structurPost: state.structurPost
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        actionCreateUpdatePost: (post, Surname) => {
            dispatch(actionCreateUpdatePost(post, Surname))
        },
        
        actionCreateAddPost: () =>  {
            dispatch(actionCreateAddPost())
            dispatch(actionCreateUpdatePost("", ""))
        }
    }
}

const HeadContainer = connect(mapStateToProps, mapDispatchToProps)(Head)

export default HeadContainer;