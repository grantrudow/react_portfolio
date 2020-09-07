import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
import github from '../Footer/images/github.png';
import instagram from '../Footer/images/instagram.png';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            sent: false,
            buttonText: 'Submit'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        axios({
            method: 'POST',
            url: 'http://localhost:4444/send',
            data: this.state
        })
        .then((response) => {
            if (response.data.status === 'success') {
                alert('Message Sent');
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert('Message failed to send')
            }
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

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onMessageChange = (event) => {
        this.setState({message: event.target.value})
    }
    
    render() {
        return (
            <section id="contact" className="grid">
                <div className="nav-background"></div>
                <div className="contact-form">
                    <h1>Contact Me</h1>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <label htmlFor="name">Name</label>
                        <input 
                        
                        onChange={this.onNameChange}
                        type="text" 
                        id="name" 
                        required 
                        />
                        
                        <label htmlFor="email">Email</label>
                        <input 
                        
                        onChange={this.onEmailChange}
                        type="email" 
                        id="email" 
                        required 
                        />
        
                        <label htmlFor="message">Message</label>
                        <textarea 
                        
                        onChange={this.onMessageChange}
                        id="message"
                        >
                        </textarea>
        
                        <button className="button">{ this.state.buttonText }</button>
                    </form>
                </div>
                
                <div className="contact-lower">
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