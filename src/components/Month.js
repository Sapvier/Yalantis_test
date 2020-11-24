import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {useSelector} from "react-redux"
import CheckedUser from "./CheckedUser"


const Month = ({month, number}) => {
    const checkedUsers = useSelector(state => state.checkedReducer.checkedUsers)
    let users = checkedUsers.filter(item => parseInt(item.dob.slice(5, 7)) === number);

    if (users.length < 1) {
        return <span/>
    }
    return (
        <div>
            <div className='month'><b>{month}</b></div>
            {users.map(user => <CheckedUser user={user} month={month} key={uuidv4()}/>)}
        </div>
    )
}

export default Month