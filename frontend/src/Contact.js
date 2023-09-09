import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

function Contact() {
    const [successMessage, setSuccessMessage] = useState(null);
    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tqugh2n', 'template_wtmz9sq', form.current, 'VrYvI9JBdkV8c7KOs')
        .then((result) => {
            console.log(result.text);
            setSuccessMessage('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
            setSuccessMessage('Email sending failed. Please try again later.');
        });
        e.target.reset()
    };
  return (
    <section className='d-flex vh-100 justify-content-center bg-black'>
        <div class="container mt-5" style={{backgroundColor: 'black', color: 'white', padding: '20px', borderRadius: '5px'}}>
            <h2 class="text-center">Contact Us</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                    <label for="user_name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="user_name" name="user_name" required />
                </div>
                <div class="mb-3">
                    <label for="user_email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="user_email" name="user_email" required />
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" required />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="5" name="message"></textarea>
                </div>
                <Link to='/' className='btn btn-primary me-2'>Back</Link>
                <button type="submit" class="btn btn-primary" style={{backgroundColor: '#28a745', borderColor: '#28a745'}}>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
