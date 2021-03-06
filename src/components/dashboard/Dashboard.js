import React from 'react';
import Nav from '../navigation/Nav';
import Messages from './Messages';
import TextForm from './TextForm';

function Dashboard({ Logout, user, messages, addMessage }) {

    return (
        <div className="dashboard">
            <Nav Logout={Logout} user={user} backBtn={false} />
            <div className="chat-window">
                <Messages messages={messages} user={user} />
                <TextForm addMessage={addMessage} />
            </div>
        </div>
    )
}

export default Dashboard
