import React, { useState } from 'react'

function LogForm({ Login, emailError, passError, emailErrorChanger, passErrorChanger }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        emailErrorChanger(false);
        passErrorChanger(false);
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <h3 className="form-header">Иди и смотри</h3>
            {emailError && <h3 className="error">Your email is invalid</h3>}
            {passError && <h3 className="error">Your password must contain at least 8 characters at least 1 numeric character</h3>}
            <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="name" id="name" name="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
            </div>
            <input type="submit" value="Enter the void" />
        </form>
    )
}

export default LogForm
