import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    

    return (
      <div>
        <Router>
          <div>
              <nav className="grid">
                <div className="nav-logo">
                  <Link to="/"><h1>GR</h1></Link>
                </div>
                <ul className="nav-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>    
          </div>
        </Router>

        <Footer />
      </div>  
      
    );
  }
}

export default App;


