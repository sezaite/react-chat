import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../navigation/Nav';
import Messages from './Messages';
import TextForm from './TextForm';

function Dashboard({ Logout, user, messages, addMessage }) {
    // console.log(messages);
    return (
        <div className="dashboard">
            <Nav Logout={Logout} user={user} />
            <Messages messages={messages} user={user} />
            <TextForm addMessage={addMessage} />
        </div>
    )
}

export default Dashboard
