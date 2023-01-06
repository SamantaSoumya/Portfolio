import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from  'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/soumya-samanta-0393631a1/' target="_blank"><BsLinkedin /></a>
        <a href='https://www.facebook.com/soumya.samanta.9484' target="_blank"><BsFacebook /></a>
        <a href='https://github.com/SamantaSoumya' target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials