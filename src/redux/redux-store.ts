import {combineReducers, createStore} from "redux";
import profileUsersPageReducer from "./profileUsersPage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";



const reducer=combineReducers({
    profileUsersPageReducer,
    dialogsPageReducer
})

const store =createStore(reducer);
export type StoreType= typeof store
export default store;