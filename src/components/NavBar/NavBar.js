import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className="site-nav grid">
            <h1>Grant Rudow</h1>
            <ul className="main-nav">
                <li>
                    <p>Home</p>
                </li>
                <li>
                    <p>What I Do</p>
                </li>
                <li>
                    <p>Contact</p>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;