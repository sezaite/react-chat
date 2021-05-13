import React from 'react';
import { Link } from 'react-router-dom';

function Account({ Logout, user }) {
    return (
        <div className="profile-area">
            <h1>Profile info</h1>
            <h4>User name: {user.name}</h4>
            <Link onClick={Logout} to="/">Exit</Link>
        </div>
    )
}

export default Account
