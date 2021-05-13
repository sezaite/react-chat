import React from 'react';
import Message from './Message';

function Messages({ messages }) {
    return (
        <ul className="messages">
            {
                messages.map((message) => (
                    <Message key={message.id} name={message.user} text={message.text} />
                ))
            }
        </ul>
    )
}

export default Messages
