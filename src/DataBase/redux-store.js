import { combineReducers, createStore } from "redux";
import PostReduser from "./PostReduser"
import DialogReducer from "./DialogsReducer"

let redusers = combineReducers({
    structurePost: PostReduser,
    structurDialogs: DialogReducer
})

let store = createStore(redusers);

export default store;