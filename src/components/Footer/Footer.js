import React from 'react';
import github from './images/github.png';
import instagram from './images/instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-secondary flex h3">
            <div className="fl w-50 pa2">
                <p className="roboto-text">Copyright 2020 Grant Rudow</p>
                <p className="roboto-text f6 pt1">All Icons provided by <a target="_blank" href="https://www.icons8.com">Icons8</a></p>
            </div>
            <div className="w-50 flex align-right pl6">
                <a target="_blank" href="https://www.instagram.com/lodestardev" ><img className="footer-img" alt="Instagram" src={instagram}/></a>
                <a target="_blank" href="https://www.instagram.com/lodestardev" ><img className="footer-img" alt="Github" src={github}/></a>    
            </div>
        </footer>
    )
}

export default Footer;