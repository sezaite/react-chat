import React from 'react'

function Form({ Login, error }) {
    return (
        <form>
            <h3 className="form-header">Login to the chat</h3>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <input type="submit" value="Enter the void" />
        </form>
    )
}

export default Form
