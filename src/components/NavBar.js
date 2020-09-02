import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <nav className="sticky">
            <ul className="main-nav">
                <li className="logo">
                    <a href="#">Grant Rudow</a>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">What I Do</a>
                </li>
                <li>
                    <a id="contact-nav-button" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;