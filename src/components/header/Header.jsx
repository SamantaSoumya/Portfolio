import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/img1.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className='floating-particles'>
        {[...Array(20)].map((_, i) => (
          <span key={i} className='particle' style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${15 + Math.random() * 25}s`,
            '--delay': `${Math.random() * -20}s`,
            '--size': `${2 + Math.random() * 4}px`
          }} />
        ))}
      </div>

      <div className='container header__container'>
        <div className='header__content'>
          <div className='header__badge glass'>
            <span className='badge-dot' />
            Available for work
          </div>
          <h5 className='header__greeting'>Hello, I'm</h5>
          <h1 className='header__name'>
            <span className='name-line'>Soumya</span>
            <span className='name-line gradient-text'>Samanta</span>
          </h1>
          <h5 className='header__title text-light'>
            <span className='typing-wrapper'>
              <span className='typing-text'>Full Stack Developer</span>
              <span className='cursor' />
            </span>
          </h5>
          <p className='header__description text-light'>
            Full Stack Developer specializing in Java, Spring Boot, React, and cloud-native architectures.
            Proficient in Kafka, AWS, Git, and System Design. Building scalable, high-performance applications end-to-end.
          </p>
          <CTA />
          <HeaderSocials />
        </div>

        <div className='header__visual'>
          <div className='image-wrapper'>
            <div className='image-glow' />
            <div className='image-ring image-ring--1' />
            <div className='image-ring image-ring--2' />
            <div className='image-ring image-ring--3' />
            <img src={ME} alt='Soumya Samanta' className='header__image' />
          </div>
          <div className='geometric-shape geometric-shape--1' />
          <div className='geometric-shape geometric-shape--2' />
          <div className='geometric-shape geometric-shape--3' />
        </div>
      </div>

      <div className='scroll-indicator'>
        <div className='scroll-mouse'>
          <div className='scroll-wheel' />
        </div>
        <span>Scroll Down</span>
      </div>
    </header>
  )
}

export default Header
