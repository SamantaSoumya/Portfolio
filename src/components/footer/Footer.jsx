import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from  'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SOUMYA</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/soumya-samanta-0393631a1/' target="_blank"><BsLinkedin /></a>
        <a href='https://www.facebook.com/soumya.samanta.9484' target="_blank"><BsFacebook /></a>
        <a href='https://github.com/SamantaSoumya' target="_blank"><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; SOUMYA All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer