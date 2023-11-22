import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import "./contact.css"


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_gm2in0c',
        'template_tfsobyk',
        form.current,
        's3yNmvxGTnGZCbyzp'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <>
        <h1>Lets Connect</h1>

        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id='submit' />
    </form>
 

    </>
    )
}