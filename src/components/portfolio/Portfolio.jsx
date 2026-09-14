import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio4.jpg'

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Music Player',
    description: 'A sleek, modern music player with playlist management and audio visualization.',
    github: 'https://github.com/SamantaSoumya/music-player',
    demo: 'https://happy-santi.netlify.app/',
    tags: ['React', 'Audio API']
  },
  {
    id: 2,
    image: IMG2,
    title: 'Code-First',
    description: 'An interactive learning platform for coding with structured curriculum.',
    github: 'https://github.com/SamantaSoumya/Code-First',
    demo: 'https://samantasoumya.github.io/Code-First/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    image: IMG3,
    title: 'WhatsApp Chat Analyzer',
    description: 'Data visualization tool that analyzes and presents WhatsApp chat statistics.',
    github: 'https://github.com/SamantaSoumya/whatsapp-chat-analyzer',
    demo: 'https://wp-ayz.streamlit.app/',
    tags: ['Python', 'Streamlit']
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {projects.map((project) => (
          <article className='portfolio__item glass' key={project.id}>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
              <div className='portfolio__item-overlay' />
            </div>
            <div className='portfolio__item-content'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='portfolio__item-tags'>
                {project.tags.map((tag, i) => (
                  <span className='portfolio__tag' key={i}>{tag}</span>
                ))}
              </div>
              <div className='portfolio__item-cta'>
                <a href={project.github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={project.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
