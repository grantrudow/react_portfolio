import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav className="grid">
                <a className="nav-logo" href="" title="Home">
                    <h1>GR</h1>
                </a>
                <div className="nav-menu">
                    <a className="link" href="" title="About">Home</a>
                    <a className="link" href="">What I Do</a>
                    <a className='link' href="" title="Portfolio">My Work</a>
                    <a className="link" href="" title="Contact">Contact</a>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;