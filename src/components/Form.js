import React, { useState } from 'react'

function Form({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <h3 className="form-header">Иди и смотри</h3>
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

export default Form
