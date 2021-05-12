import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Messages from './Messages';
import TextForm from './TextForm';

function Dashboard({ Logout, user, messages }) {
    console.log(messages);
    return (
        <>
            <Nav Logout={Logout} user={user} />
            <Messages messages={messages} />
            <TextForm />
        </>
    )
}

export default Dashboard
