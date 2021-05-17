import React from 'react';
import Nav from '../navigation/Nav';
import Messages from './Messages';
import TextForm from './TextForm';

function Dashboard({ Logout, user, messages, addMessage }) {
    return (
        <div className="dashboard">
            <Nav Logout={Logout} user={user} />
            <Messages messages={messages} user={user} />
            <TextForm addMessage={addMessage} />
        </div>
    )
}

export default Dashboard
