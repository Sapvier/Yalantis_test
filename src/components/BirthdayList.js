import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Month from "./Month"
import {useSelector} from "react-redux"


const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const BirthdayList = () => {
    const [months] = useState(monthNames)
    const checkedUsers = useSelector(state => state.checkedReducer.checkedUsers)

    if (checkedUsers.length) {
        return (
            <div className="monthContainer">
                <p className="monthListTitle"><b>Employees birthday</b></p>
                <div className="monthList">
                    {months.map(month => <Month month={month} number={(months.indexOf(month) + 1)} key={uuidv4()}/>)}
                </div>
            </div>
        )
    }
    return <div className="monthContainer">
        <p className="monthListTitle"><b>Employees birthday</b></p>
        <p className="emptyTitle">No selected employees</p>
    </div>
}

export default BirthdayList