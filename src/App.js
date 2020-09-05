import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'signIn',
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;


