const URL = "https://yalantis-react-school-api.yalantis.com/api/task0/users"


export function fetchUsers(users) {
    return async dispatch => {
        const response = await fetch(URL)
        if (response.status === 200) {
            const json = await response.json()
            json.map(item => item.checked = false)
            dispatch({type: "FETCH_USERS", payload: json})
            users.map(user => dispatch({type: "DELETE_DUPLICATED", payload: user.id}))
            dispatch({type: "ADD_USERS", payload: users})
        } else {
            alert('Failed to load users, try again')
        }
    }
}

export function checkUser(user) {
    return {
        type: "CHECK_USER",
        payload: user
    }
}

export function uncheckUser(user) {
    return {
        type: "UNCHECK_USER",
        payload: user.id
    }
}





