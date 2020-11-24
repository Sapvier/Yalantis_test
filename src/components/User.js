import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {checkUser, uncheckUser} from "../redux/actions"


const User = ({user}) => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(user.checked)

    const onChange = () => {
        if (!checked) {
            dispatch(checkUser({
                ...user,
                checked: true
            }))
            setChecked(state => !state)
        } else {
            dispatch(uncheckUser(user))
            setChecked(state => !state)
        }
    }

    if (user.checked) {
        return (
            <div className="user">
                <label htmlFor={"u_" + user.id}>{user.lastName} {user.firstName}</label>
                <input id={"u_" + user.id} type="checkbox" onChange={onChange} checked={checked}/>
            </div>
        )
    } else return (
        <div className="user">
            <label htmlFor={"u_" + user.id}>{user.lastName} {user.firstName}</label>
            <input id={"u_" + user.id} type="checkbox" onChange={onChange}/>
        </div>
    )
}

export default User