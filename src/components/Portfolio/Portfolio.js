import React from 'react';
import './Portfolio.css';

import PortfolioCard from '../PortfolioCard/PortfolioCard';

import weatherApp from './images/weatherAppScreenshot.PNG';

function Portfolio() {
	return (
		<div className="portfolio grid">
			<h1>My Portfolio</h1>
			<div className="portfolio__work grid">
				<div className="portfolio__card">
					<PortfolioCard
					name='My.Weather'
					skill='React'
					image = {weatherApp} 
					link ='https://romantic-torvalds-b4c044.netlify.app/'
					/>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
