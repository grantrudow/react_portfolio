import React from 'react';
import './About.css'


const Home = () => {
	return (
        <section id="about">
            <h1 class="title">What I Do</h1>
            <ul class="grid">
                <li>
                    <h2>Relationships</h2>
                    <h4>Before we get started, I like to develop a relationship with each of my clients in order to better understand your business and what your goals are.</h4>
                </li>
                <li>
                    <h2>Design</h2>
                    <h4>Once we have determined your goals, I will design a product that I believe will insure an unforgettable user experience for your brand.</h4>
                </li>
                <li>
                    <h2>Develop</h2>
                    <h4>I will engineer a digital product, using the design and relationship we have built to produce a product for your customers.</h4>
                </li>
            </ul>
      </section>
	);
}

export default Home;