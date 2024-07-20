import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='music img'/>
          </div>
          <h3>Music player</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/music-player' className='btn' target='_blank'>Github</a>
          <a href='https://happy-santi.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='Classroom img'/>
          </div>
          <h3>Code-First</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/Code-First' className='btn' target='_blank'>Github</a>
          <a href='https://samantasoumya.github.io/Code-First/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='Calculator'/>
          </div>
          <h3>Calculator</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/calculator' className='btn' target='_blank'>Github</a>
          <a href='https://samantasoumya.github.io/calculator/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt='music img'/>
          </div>
          <h3>Wp-Chat-Analyzer</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/whatsapp-chat-analyzer' className='btn' target='_blank'>Github</a>
          <a href='https://wp-ayz.streamlit.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt='Classroom img'/>
          </div>
          <h3>Weather App</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/Weather-App' className='btn' target='_blank'>Github</a>
          <a href='https://samantasoumya.github.io/Weather-App/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt='Calculator'/>
          </div>
          <h3>Secret Message</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/SamantaSoumya/Secret-Message' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio