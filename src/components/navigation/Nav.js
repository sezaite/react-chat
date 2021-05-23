import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import faker from 'faker';

function Nav({ user, Logout, backBtn }) {
    const navLinks = document.querySelectorAll(".nav-links *");
    const burger = document.querySelector('.burger');
    const navRight = document.querySelector('.nav-links');

    const toggleButton = () => {
        burger.classList.toggle('toggle');
        navRight.classList.toggle('nav-active');
        navLinks.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ""
            } else {
                item.style.animation = `navListFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    }

    return (
        <nav>
            <div className="left-nav">
                {/* <img src={faker.image.abstract()} alt="chat-logo" /> */}
                <h1>Matechat</h1>
            </div>

            <h3 className="logged">Logged as <span>{user.name}</span></h3>

            <div className="nav-links">
                <Link to="/account" className="btn btn-nav">Account</Link>
                <Link to='/' onClick={Logout} className="btn btn-nav">Exit</Link>
                {backBtn && <Link to="/" className="btn btn-nav">Back to chat</Link>}
                {/* <img src={faker.image.avatar()} alt="avatar" /> */}
            </div>

            <div className="burger active" onClick={() => toggleButton()}>

                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Nav

