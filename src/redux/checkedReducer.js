import {CHECK_USER, UNCHECK_USER} from "./types"

const initialState = () => {
    if (JSON.parse(localStorage.getItem('state')) === null) {
        return {checkedUsers: []}
    } else return JSON.parse(localStorage.getItem('state'))
}

export const checkedReducer = (state = initialState(), action) => {
    switch (action.type) {
        default:
            return state
        case "CHECK_USER": {
            return {checkedUsers: state.checkedUsers.concat([action.payload])}
        }
        case "UNCHECK_USER": {
            return {checkedUsers: state.checkedUsers.filter(user => user.id !== action.payload)}
        }
    }
}
