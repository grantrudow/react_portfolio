import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Home.css';


const SkillCard = ({ skillName, skillDesc, skillPic}) => {
	return (
		<Tilt className="skills-grid"
		glareEnable={true} 
		glareMaxOpacity={0.8} 
		glareColor="#ffffff" 
		glarePosition="bottom"
		>
			<img src={skillPic} className="skills-img" alt="Avatar" />
			<div className="skills-text">
				<h1>{skillName}</h1>
				<h2>{skillDesc}</h2>
			</div>
	  </Tilt>
	)
}

export default SkillCard;