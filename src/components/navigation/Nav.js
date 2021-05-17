import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

function Nav({ user, Logout }) {
    return (
        <nav>
            <div className="left-nav">
                <img src={faker.image.abstract()} alt="chat-logo" />
                <h1>Chat Name</h1>
            </div>
            <div className="right-nav">
                <h3>Logged as <span>{user.name}</span></h3>
                <Link to="/account" className="btn btn-nav">Account</Link>
                <Link to='/' onClick={Logout} className="btn btn-nav">Exit</Link>
                <img src={faker.image.avatar()} alt="avatar" />
            </div>
        </nav>
    )
}

export default Nav
