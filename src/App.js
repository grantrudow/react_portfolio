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
              <nav className="dt w-100 border-box pa3 ">
                <div className="dtc v-mid mid-gray link dim w-25">
                  <h1 className="dib w2 h2 br-100">GR</h1>   
                </div>
                <ul className="fe-flex pa2">
                  <li className="pa4">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="pa4">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="pa4">
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


