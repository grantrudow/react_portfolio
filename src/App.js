import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'

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
      </div>
    );
  }
}

export default App;


