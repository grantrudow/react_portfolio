import React from 'react';
import './About.css';
import circle from './images/circle.png';
import abstractColumn from './images/abstractColumn.png';
import profilePicture from './images/profilePic.png';

const Home = () => {
	return (
    	<section id="about">
			<h1 className="tc">What I Do</h1>
			<div className="grid about-top">
				<div id="relationship" className="border-secondary about-grid">
					<h3>Relationships</h3>
					<p>I strive to develop relationships with all of my clients in order to better understand your business and your goals for your product.</p>
				</div>
				<div id="design" className="border-secondary about-grid">
					<h3>Design</h3>
					<p>Once we have determined your goals, we will work together to design a product that will insure an unforgettable user experience for you customers.</p>
				</div>
				<div id="develop" className="border-secondary about-grid">
					<h3>Develop</h3>
					<p>I will engineer a digital product using the design and relationship we have built to produce a custom tailored product for your business.</p>
				</div>
			</div>
			<div className="about-lower">
				<img className="circle-pattern" alt="circle pattern" src={circle} />
				<h1>Together we will create something great</h1>
				<div className="lower-image-container">
					<img className="profile-pic" alt="profile of Grant" src={profilePicture} />
					<img className = "abstract-column" alt="abstract column" src={abstractColumn} />
				</div>
			</div>
    	</section>
	);
}

export default Home;