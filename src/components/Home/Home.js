import React from 'react';
import largeGrid from './images/largeGrid.png';
import columnDot from './images/ColumnDot.png';
import developer from './images/developer-50.png';
import api from './images/api-50.png';
import html from './images/html-5-50.png';
import web from './images/web-50.png';
import responsive from './images/responsive-50.png';
import internet from './images/internet-50.png';
import SkillCard from './SkillCard';


const Home = () => {
	return (
    <div className=" h-100">
      <div className="flex ph3-ns">
        <div className="hero-text w-70 pa2 pt6">
          <h2 className="roboto-text">Hello, my name is Grant</h2>
          <h1>I design and build custom digital products</h1>
        </div>
        <div className="w-40 pa2 pt5 horizontal-center-flex">
          <img id="dot-grid" alt="dot grid" src={largeGrid} />
        </div>
      </div>

      <div className="flex pb5">
        <div className="fl w-30 pa2">
          <img className="column-dot" alt="abstract art" src={columnDot} />
        </div>
        <div className="horizontal-center-flex w-70 pa2 pt5">
          <h3 className="f2 lower-hero-text">I am passionate about building software and user experiences that improve people's lives.</h3>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex flex-column pt3 pb3">
          <div className="fl w-100 pa2 tc">
              <h1>My Skills</h1>
          </div>  
          <div className="skills">
            <div className = "grid">
            <SkillCard skillName={'HTML & CSS'} skillDesc={'Website Design & Production'} skillPic = {html}/>
            <SkillCard skillName={'Javascript'} skillDesc={'Website Development'} skillPic = {responsive}/>
            <SkillCard skillName={'React'} skillDesc={'Custom Web Applications'} skillPic = {web}/>
            <SkillCard skillName={'Node.js & Express'} skillDesc={'Server and Database Integration'} skillPic = {api}/>
            <SkillCard skillName={'Python'}  skillDesc={'Automation/Backend Frameworks'} skillPic = {developer}/>
            <SkillCard skillName={'Responsive Websites'} skillDesc={'Production websites built for all devices'} skillPic = {internet}/>
            </div>
          </div>
        </div> 
      </div>
    </div>
	);
}

export default Home;