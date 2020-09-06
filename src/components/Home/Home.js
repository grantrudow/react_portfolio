import React from 'react';
import largeGrid from './images/largeGrid.png';
import columnDot from './images/ColumnDot.png';
import developer from './images/developer-50.png';
import api from './images/api-50.png';
import html from './images/html-5-50.png';
import web from './images/web-50.png';
import responsive from './images/responsive-50.png';

const Home = () => {
	return (
    <div className=" h-100">
      <div className="flex ph3-ns">
        <div className="w-70 pa2 pt6">
          <h2 className="roboto-text">Hello, my name is Grant</h2>
          <h1>I design and build custom digital products</h1>
        </div>
        <div className="w-40 pa2 pt5 horizontal-center-flex">
          <img id="dot-grid" alt="dot grid" src={largeGrid} />
        </div>
      </div>

      <div className="flex pb5">
        <div className="fl w-30 pa2">
          <img className="" alt="abstract art" src={columnDot} />
        </div>
        <div className="horizontal-center-flex w-70 pa2 pt5">
          <h3 className="f2">I am passionate about building software and user experiences that improve people's lives.</h3>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex flex-column pt3 pb3">
          <div className="fl w-100 pa2 tc">
              <h1>My Skills</h1>
          </div>
          <div className = "pl5 center-flex">
            <ul className="">
              <li>
                <div className="fs-flex pa3">
                  <img src={html} className="pa1 h3 w3" alt="Avatar" />
                  <div className="ph3">
                    <h1 className="f3 f4-ns-fw6 white ">HTML & CSS</h1>
                    <h2 className="f6 white fw2 ttu tracked roboto-text">Website Design & Production</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="fs-flex pa3">
                  <img src={responsive} className="pa1 h3 w3" alt="Avatar" />
                  <div className="ph3">
                    <h1 className="f3 f4-ns-fw6 white ">Javascript</h1>
                    <h2 className="f6 white fw2 ttu tracked roboto-text">Website Development</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="fs-flex pa3">
                  <img src={web} className="pa1 h3 w3" alt="Avatar" />
                  <div className="ph3">
                    <h1 className="f3 f4-ns-fw6 white ">React</h1>
                    <h2 className="f6 white fw2 ttu tracked roboto-text">Custom Web Applications</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="fs-flex pa3">
                  <img src={api} className="pa1 h3 w3" alt="Avatar" />
                  <div className="ph3">
                    <h1 className="f3 f4-ns-fw6 white ">Node.js & Express</h1>
                    <h2 className="f6 white fw2 ttu tracked roboto-text">Server and Database Integration</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="fs-flex pa3">
                  <img src={developer} className="pa1 h3 w3" alt="Avatar" />
                  <div className="ph3">
                    <h1 className="f3 f4-ns-fw6 white ">Python</h1>
                    <h2 className="f6 white fw2 ttu tracked roboto-text">Automation/Backend Frameworks</h2>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </div>
	);
}

export default Home;