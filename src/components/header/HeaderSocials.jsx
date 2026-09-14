import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/soumya-samanta-0393631a1/' target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
      <a href='https://github.com/SamantaSoumya' target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials
