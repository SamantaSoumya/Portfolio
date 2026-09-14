import React from 'react'
import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBook, BsBriefcase } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { HiOutlineCode } from 'react-icons/hi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav className='glass-nav'>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><HiOutlineCode /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBriefcase /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
