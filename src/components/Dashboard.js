import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Dashboard({ Logout, user, messages }) {
    console.log(messages);
    return (
        <>
            <Nav Logout={Logout} user={user} />

        </>
    )
}

export default Dashboard
