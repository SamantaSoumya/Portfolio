import React from 'react'
import "./about.css"
import ME from '../../assets/img2.jpg'
import { BiAward } from 'react-icons/bi'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BiAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <AiOutlineUsergroupDelete className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>
          <p>
            I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.
          </p>
          <a href='#contact' className='btn btn primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About