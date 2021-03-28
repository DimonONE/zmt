import { applyMiddleware, combineReducers, createStore } from "redux";
import PostReduser from "./PostReduser"
import DialogReducer from "./DialogsReducer"
import FrendsReducer from "./FrendsReducer"
import ProfileReduser from "./ProfileReduser";
import AuthReduser from "./authReducer";
import thunkMidleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let redusers = combineReducers({
    structurPost: PostReduser,
    structurDialogs: DialogReducer,
    structurFrends: FrendsReducer,
    structurProfile: ProfileReduser,
    auth: AuthReduser,
    form: formReducer,
})

let store = createStore(redusers, applyMiddleware( thunkMidleware ));

window.store = store

export default store;