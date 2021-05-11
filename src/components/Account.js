import React from 'react';

function Account({ Logout, user }) {
    return (
        <div>
            <h1>Profile info</h1>
            <h4>User name: {user.name}</h4>
            <button onClick={Logout}>Exit</button>
        </div>
    )
}

export default Account
