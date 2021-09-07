import React from 'react'
import "./UserDetaillist.css"
export default function UserDetailList(props) {
    return (
        <div className="user-detail">
                <ul className="user__detail-field">
                    {props.users.map((user, index) => (
                    <li>
                        key={index}{user.name} ({user.age} years old)
                    </li>
                    ))}
                </ul>
        </div>
    )
}
