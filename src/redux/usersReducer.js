import {FETCH_USERS} from "./types"

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "FETCH_USERS": {
            return {...state, users: action.payload}
        }
        case "ADD_USERS": {
            return {users: state.users.concat(action.payload)}
        }
        case "DELETE_DUPLICATED": {
            return {users: state.users.filter(user => user.id !== action.payload)}
        }
        case "ADD_USER": {
            return {users: state.users.concat([action.payload])}
        }
        case "DELETE_USER": {
            return {users: state.users.filter(user => user.id !== action.payload)}
        }
    }
}
