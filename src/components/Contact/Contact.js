import React from 'react';
import './Contact.css';
import github from '../Footer/images/github.png';
import instagram from '../Footer/images/instagram.png';

const Contact = () => {
    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" required />
                
                <label for="email">Email</label>
                <input type="email" id="email" required />

                <label for="message">Message</label>
                <textarea id="message"></textarea>

                <button className="button">Submit</button>
            </form>

            <div className="lower-contact">
                <h3>Feel free to reach out with any questions or thoughts. I am always happy and willing to speak with you!</h3>
                <div className="social-links">
                    <img className="instagram" alt="instagram" src={instagram} />
                    <img className="github" alt="github" src={github} />
                </div>
            </div>
        </section>
    )
}

export default Contact;