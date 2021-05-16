import React from 'react'

function Message({ key, name, text, user }) {
    return (
        <li>
            <div className="message-box" className={name === user.name ? 'currentName' : 'name'}>
                <h5 className="message-sender">{name}:</h5>
                <p className="message-text">{text}</p>
            </div>
        </li>
    )
}

export default Message
