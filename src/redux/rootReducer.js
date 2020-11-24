import {combineReducers} from "redux"
import {usersReducer} from "./usersReducer"
import {checkedReducer} from "./checkedReducer"



export const rootReducer = combineReducers({
    usersReducer,
    checkedReducer
})