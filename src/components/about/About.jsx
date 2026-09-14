import React from 'react'
import "./about.css"
import ME from '../../assets/img2.png'
import { BiAward } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__image-section'>
          <div className='about__image-wrapper'>
            <div className='about__image-glow' />
            <img src={ME} alt='About Soumya' className='about__image' />
            <div className='about__image-border' />
          </div>
          <div className='about__floating-card glass about__floating-card--1'>
            <BiAward className='about__floating-icon' />
            <span>2+ Years</span>
          </div>
          <div className='about__floating-card glass about__floating-card--2'>
            <VscFolderLibrary className='about__floating-icon' />
            <span>10+ Projects</span>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card glass'>
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years at TCS</small>
            </article>
            <article className='about__card glass'>
              <FiUsers className='about__icon' />
              <h5>Domains</h5>
              <small>Full Stack & Backend</small>
            </article>
            <article className='about__card glass'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer with 2+ years of professional experience at TCS,
            specializing in backend development with Java, Spring Boot, and microservices architecture.
            Proficient in building scalable systems using Kafka, AWS, and designing robust solutions
            with strong system design principles. On the frontend, I craft modern interfaces with React.
            Passionate about end-to-end development and delivering high-performance applications.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
