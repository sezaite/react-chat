import React from 'react'

function Message({ key, name, text }) {
    return (
        <li>
            <div className="message-box">
                <h5 className="message-sender">{name}:</h5>
                <p className="message-text">{text}</p>
            </div>
        </li>
    )
}

export default Message
