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

export function addUsers(users) {

    return
    // type: "ADD_USERS",
    // payload: users
    console.log(users)

}

export function uncheckUser(user) {
    return {
        type: "UNCHECK_USER",
        payload: user.id
    }
}

export function addUser(user) {
    let newUser = {
        id: user.id,
        lastName: user.lastName,
        firstName: user.firstName,
        dob: user.dob,
        checked: true
    }
    return {
        type: "ADD_USER",
        payload: newUser

    }
}

export function deleteUser(user) {
    return {
        type: "DELETE_USER",
        payload: user.id

    }
}




