
import Head from "./Head"
import {AddPosts} from "../../../DataBase/PostReduser"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        structurPost: state.structurPost
    }
}


const HeadContainer = connect(mapStateToProps, {AddPosts})(Head)

export default HeadContainer;