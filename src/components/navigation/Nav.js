import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ user, Logout }) {
    return (
        <nav>
            <div className="left-nav">
                <img src="/" alt="chat-logo" />
                <h1>Chat Name</h1>
            </div>
            <div className="right-nav">
                <img src="/" alt="avatar" />
                <h3>Logged as <span>{user.name}</span></h3>
                <Link to="/account">Account</Link>
                <button onClick={Logout}>Exit</button>
            </div>
        </nav>
    )
}

export default Nav
