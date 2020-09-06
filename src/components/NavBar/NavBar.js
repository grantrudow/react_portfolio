import React from 'react';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav className="dt w-100 border-box pa3 ph5-ns">
                <a className="dtc v-mid mid-gray link dim w-25" href="" title="Home">
                    <h1 className="dib w2 h2 br-100">GR</h1>
                    {/* <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" /> */}
                </a>
                <div className="dtc v-mid w-75 tr">
                    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="About">Home</a>
                    <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="" title="Store">What I Do</a>
                    <a className="link dim dark-gray f6 f5-ns dib" href="" title="Contact">Contact</a>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;