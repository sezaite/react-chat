import React, { useState } from 'react';
import Nav from '../navigation/Nav';
import { useHistory } from 'react-router-dom';

function Edit({ Logout, user, setUser, emailError, passError }) {

    const [details, setDetails] = useState({ name: user.name, email: user.email, location: user.location ? user.location : "", about: user.about ? user.about : "" });

    const history = useHistory();

    const submitHandler = e => {
        e.preventDefault();
        setUser(details);
        history.push('/account');
    }

    return (
        <div className="profile-area">
            <Nav Logout={Logout} user={user} backBtn={true} />
            <div className="profile-window">
                <h1 className="profile-header">Edit profile</h1>
                <div className="form-errors">
                    {/* {emailError && <h4 className="error">Your email is invalid</h4>} */}
                </div>
                <form onSubmit={e => { submitHandler(e) }} autoComplete="nope" className="profile-body">
                    <div className="profile-section">
                        <h4>User name:</h4>
                        <input type="name" id="name" name="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className="profile-section">
                        <h4>User email:</h4>
                        <input type="email" id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="profile-section">
                        <h4>User location:</h4>
                        <input type="text" id="location" name="location" onChange={e => setDetails({ ...details, location: e.target.value })} value={details.location} />
                    </div>
                    <div className="profile-section">
                        <h4>About user:</h4>
                        <textarea name="about-area" id="about-area" placeholder="Tell something about yourself..." onChange={e => setDetails({ ...details, about: e.target.value })} value={details.about}></textarea>
                    </div>
                    <input type="submit" value="Save" className="enter btn" />
                </form>
            </div>
        </div>
    )
}

export default Edit
