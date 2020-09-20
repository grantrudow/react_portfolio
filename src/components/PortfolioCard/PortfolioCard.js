import React from 'react';
import './PortfolioCard.css';

function PortfolioCard({name, skill, image, link}) {
	return (
		<div className="portfolioCard">
			<a className="portfolioCard" href={link} target="blank_">
				<img src={image} alt="" />
				<div className="portfolioCard__info">
					<h3 className="portfolioCard_name">{name}</h3>
					<h5 className="portfolioCard_skill">Built with: {skill}</h5>
				</div>
			</a>
	</div>
	)
}

export default PortfolioCard
