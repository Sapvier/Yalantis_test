import React, {useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import Letter from './Letter'
import {fetchUsers} from "../redux/actions"
import {useDispatch} from "react-redux"

const str = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
const strArray = str.split("")


const AlphabetList = () => {
    const dispatch = useDispatch()
    let checkedUsers
    if (JSON.parse(localStorage.getItem('state'))) {
        checkedUsers = JSON.parse(localStorage.getItem('state'))
    } else checkedUsers = []

    useEffect(() => {
        dispatch(fetchUsers(checkedUsers.checkedUsers))
    }, [])

    return (
        <div className="userContainer">
            <div className="userListTitle"><b>Employees</b></div>
            <div className="userList">
                {strArray.map(letter => <Letter letter={letter} key={uuidv4()}/>)}
            </div>
        </div>
    )
}

export default AlphabetList