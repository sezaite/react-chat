import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Dashboard({ Logout, user }) {
    return (
        <>
            <Nav Logout={Logout} user={user} />
        </>
    )
}

export default Dashboard
