import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ Logout, user }) {
    return (
        <div>
            <Link to="/account">Account</Link>
            <h3>Logged as <span>{user.name}</span></h3>
            <button onClick={Logout}>Exit</button>
        </div>
    )
}

export default Dashboard
