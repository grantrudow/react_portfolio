import React from 'react';
import github from './github.png';
import instagram from './instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="grid">
                <p className="copyright">Copyright 2020 Grant Rudow</p>
                <ul class="social">
                    <li><a href="https://github.com/grantrudow"><img src={github} alt="github"></img></a></li>
                    <li><a href="https://www.instagram.com/lodestardev/"><img src={instagram} alt="instagram"></img></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;