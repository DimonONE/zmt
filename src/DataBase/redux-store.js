import { combineReducers, createStore } from "redux";
import PostReduser from "./PostReduser"
import DialogReducer from "./DialogsReducer"
import FrendsReducer from "./FrendsReducer"
import ProfileReduser from "./ProfileReduser";
import AuthReduser from "./authReducer";

let redusers = combineReducers({
    structurPost: PostReduser,
    structurDialogs: DialogReducer,
    structurFrends: FrendsReducer,
    structurProfile: ProfileReduser,
    auth: AuthReduser,
})

let store = createStore(redusers);

window.store = store

export default store;