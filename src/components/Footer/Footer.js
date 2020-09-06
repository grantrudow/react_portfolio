import React from 'react';
import github from './images/github.png';
import instagram from './images/instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
                <div className="footer-left">
                    <p className="pa1">Copyright 2020 Grant Rudow</p>
                    <div className="pa1">Icons made by <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> & <a target="_blank" href="https://www.icons8.com">Icons8</a></div>
                </div>
                <div className="footer-right flex footer-social">
                    <a target="_blank" href="https://www.instagram.com/lodestardev" ><img className="footer-img" alt="Instagram" src={instagram}/></a>
                    <a target="_blank" href="https://www.instagram.com/lodestardev" ><img className="footer-img" alt="Github" src={github}/></a>    
                </div>
        </footer>
    )
}

export default Footer;