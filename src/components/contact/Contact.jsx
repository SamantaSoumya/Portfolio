import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_45vrpwd', 'template_5r5t0mm', form.current, 'nX819Ec3BxZDfzhWq')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        e.target.reset()
    };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>soumya@gmail.com</h5>
            <a href='mailto:soumyasamanta354@gmail.com' target='_blank'>Send a massage</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=+917318939350' target='_blank'>Send a massage</a>
          </article>
          <article className='contact__option'>
            <CiFacebook className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>Soumya Samanta</h5>
            <a href='https://www.facebook.com/soumya.samanta.9484/' target='_blank'>Send a massage</a>
          </article>
        </div>
        {/* ........end of contact option............ */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' id='send_message' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact