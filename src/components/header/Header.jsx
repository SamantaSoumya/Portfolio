import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/img1.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <headers>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Soumya Samanta</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='my image'/>
        </div>
      </div>
    </headers>
  )
}

export default Header