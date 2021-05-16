import React from 'react';
import Message from './Message';

function Messages({ messages, user }) {
    return (
        <ul className="messages">
            {
                messages.map((message) => (
                    <Message key={message.id} name={message.user} text={message.text} user={user} />
                ))
            }
        </ul>
    )
}

export default Messages
