import React from 'react'
import "./footer.css"
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='glass-footer'>
      <a href='#home' className='footer__logo gradient-text' aria-label='Go to top'>SOUMYA</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/soumya-samanta-0393631a1/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/SamantaSoumya' target="_blank" rel="noreferrer"><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; {new Date().getFullYear()} Soumya Samanta. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
