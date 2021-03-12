import { combineReducers, createStore } from "redux";
import PostReduser from "./PostReduser"
import DialogReducer from "./DialogsReducer"
import FrendsReducer from "./FrendsReducer"

let redusers = combineReducers({
    structurPost: PostReduser,
    structurDialogs: DialogReducer,
    structurFrends: FrendsReducer,
    
})

let store = createStore(redusers);

export default store;