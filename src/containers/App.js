import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Hello, my name is Grant</h1>
          <h2>I design and build custom digital products</h2>
        </div>
      </div>
      <div className="primary-background">
        <div className="lower-container-centered">
            <h2>I am passionate about building software and user experiences that improve people's lives. I specialize in creating custom tailored digital products for individuals and small-businesses. I am ready and willing to help you grow your company in ways you never thought imaginable.</h2>
            <h3>Now the only question is...what are we going to build together?</h3>
            <a href="#">
                <button>
                    <h4>Interested?</h4>
                    <h2>Contact Me</h2>
                </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
