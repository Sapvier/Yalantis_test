import React from 'react'

const CheckedUser = ({user, month}) => {
    return (
        <div>{user.lastName} {user.firstName} - {user.dob.slice(6, 7)} {month}, {user.dob.slice(0, 4)} year</div>
    )
}

export default CheckedUser