import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="title">Contact</h1>
            <form>
                <input id="name" type="text" placeholder="Your Name" required></input>
                <input id="email" type="email" placeholder="Your Email" required></input>
                <textarea id="message" placeholder="Your message" required></textarea>
                <button class="button">Submit</button>
            </form>
        </div>
    )
}

export default Contact;