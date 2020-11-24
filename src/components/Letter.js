import React from "react"
import User from "./User"
import {v4 as uuidv4} from "uuid"
import {useSelector} from "react-redux"


const Letter = ({letter}) => {
    const users = useSelector(state => state.usersReducer.users)
    let specificUsers = users.filter(item => item.lastName[0] === letter[0]);
    if (specificUsers.length < 1) {
        return (
            <div className="noUsers">
                <div className=""><b>{letter}</b></div>
                <div className="">-----</div>
            </div>
        )
    }
    return (
        <div className="letter">
            <div><b>{letter}</b></div>
            {specificUsers.map(user => <User user={user} key={uuidv4()}/>)}
        </div>

    )
}

export default Letter