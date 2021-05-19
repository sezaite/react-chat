import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navigation/Nav';

function Account({ Logout, user, backToDashboard }) {
    return (
        <div className="profile-area">
            <Nav Logout={Logout} user={user} backToDashboard={backToDashboard} backBtn={true} />
            <div className="profile-window">
                <h1 className="profile-header">Profile info</h1>
                <div className="profile-body">
                    <div className="profile-section">
                        <h4>User name:</h4>
                        <p>{user.name}</p>
                    </div>
                    <div className="profile-section">
                        <h4>User email:</h4>
                        <p>{user.email}</p>
                    </div>
                    {user.location && <div className="profile-section"><h4>User location:</h4><p>{user.location}</p></div>}
                    {user.about && <div className="profile-section"><h4>About user:</h4><p>{user.about}</p></div>}
                    <Link to="/edit">Edit</Link>

                </div>
                {/* <Link onClick={Logout} to="/">Exit</Link> */}
            </div>
        </div>
    )
}

export default Account
