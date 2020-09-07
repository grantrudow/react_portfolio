import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import github from '../Footer/images/github.png';
import instagram from '../Footer/images/instagram.png';

class Contact extends Component {

    constructor() {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            sent: false,
            buttonText: 'Submit'
        }
    }

    formSubmit = (event) => {
        event.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('https://portfolio-api-gamma.vercel.app/', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch((err) => {
            console.log('Message not sent')
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            buttonText: 'Sent'
        })
    }
    
    redner() {
        return (
            <section id="contact">
                <h1>Contact Me</h1>
                <form>
                    <label for="name">Name</label>
                    <input 
                    onChange={event =>this.setState({name: event.target.value})}
                    type="text" 
                    id="name" 
                    required 
                    />
                    
                    <label for="email">Email</label>
                    <input 
                    onChange={event => this.setState({name: event.target.value})}
                    type="email" 
                    id="email" 
                    required 
                    />
    
                    <label for="message">Message</label>
                    <textarea 
                    onChange={event => this.setState({message: event.target.value})}
                     id="message"
                     >
                     </textarea>
    
                    <button className="button">{ this.state.buttonText }</button>
                </form>
    
                <div className="lower-contact">
                    <h3>Feel free to reach out with any questions or thoughts. I am always happy and willing to speak with you!</h3>
                    <div className="social-links">
                        <img className="instagram" alt="instagram" src={instagram} />
                        <img className="github" alt="github" src={github} />
                    </div>
                </div>
            </section>
        );
    }
    
}

export default Contact;