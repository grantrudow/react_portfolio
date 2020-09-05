import React from 'react';
import './Home.css'


const Home = () => {
	return (
      <div id="home">
        <div className="grid">
          <div className="hero-text">
            <h1>Hello, my name is Grant</h1>
            <h2>I design and build custom digital products</h2>
          </div>
          <div className="lower grid">
            <div className="lower-container">
              <h2>I am passionate about building software and user experiences that improve people's lives. I specialize in creating custom tailored digital products for individuals and small-businesses. I am ready and willing to help you grow your company in ways you never thought imaginable.</h2>
              <h3>Now the only question is...what are we going to build together?</h3>
              <div className="button">
                <a  href="#contact">Contact Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default Home;