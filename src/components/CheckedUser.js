import React from 'react'

const CheckedUser = ({user, month}) => {
    return (
        <div>&#8226; {user.lastName} {user.firstName} - {parseInt(user.dob.slice(5, 7))} {month}, {user.dob.slice(0, 4)} year</div>
    )
}

export default CheckedUser