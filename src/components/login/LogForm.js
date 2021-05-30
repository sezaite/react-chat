import React, { useState } from 'react'

function LogForm({ Login, emailError, passError, passErrorChanger, emailErrorChanger }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        passErrorChanger(false);
        emailErrorChanger(false);
        Login(details);
    }
    return (
        <div className="form-window">
            <form onSubmit={submitHandler} autoComplete="nope">
                <h2 className="form-header">Come and see</h2>
                <h3 className="form-subheader">But maybe log in first?</h3>
                {emailError || passError ? (
                    <div className="form-errors">
                        {emailError && <h4 className="error">Your email is invalid</h4>}
                        {passError && <h4 className="error">Your password must contain at least 8 characters at least 1 numeric character</h4>}
                    </div>
                ) : ""}
                <div className="form-body login">
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input type="name" autoComplete="nope" id="name" name="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" autoComplete="nope" id="email" name="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type="submit" value="Enter the void" className="enter btn" />
                </div>

            </form>
        </div>
    )
}

export default LogForm
