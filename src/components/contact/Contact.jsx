import React, { useRef, useState } from 'react'
import "./contact.css"
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_45vrpwd', 'template_5r5t0mm', form.current, 'nX819Ec3BxZDfzhWq')
      .then(() => {
        setStatus('success');
        e.target.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option glass'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>soumyasamanta354@gmail.com</h5>
            <a href='mailto:soumyasamanta354@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option glass'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Message me on WhatsApp</h5>
            <a href='https://api.whatsapp.com/send?phone=+917318939350' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option glass'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Soumya Samanta</h5>
            <a href='https://www.linkedin.com/in/soumya-samanta-0393631a1/' target='_blank' rel='noreferrer'>Connect</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='glass contact__form'>
          <div className='form-group'>
            <input type="text" name='name' placeholder='Your Full Name' required />
          </div>
          <div className='form-group'>
            <input type="email" name='email' placeholder='Your Email' required />
          </div>
          <div className='form-group'>
            <textarea name='message' rows='7' placeholder='Your Message' required />
          </div>
          {status === 'success' && <p style={{ color: '#6db33f', marginBottom: '1rem' }}>✅ Message sent successfully!</p>}
          {status === 'error' && <p style={{ color: '#e34f26', marginBottom: '1rem' }}>❌ Failed to send. Please try again.</p>}
          <button type='submit' className='btn btn-primary contact__btn' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

