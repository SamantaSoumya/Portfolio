import React from 'react'
import './experience.css'
import { FaJava, FaReact } from 'react-icons/fa'

const experiences = [
  {
    title: 'Backend Developer',
    company: 'TCS (Tata Consultancy Services)',
    period: 'Aug 2024 — Present',
    description: 'Working as a Backend Developer building scalable microservices with Java and Spring Boot. Designing and implementing event-driven architectures using Kafka. Deploying and managing cloud infrastructure on AWS. Applying system design principles to build high-performance, distributed systems.',
    icon: <FaJava />,
    tags: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Microservices', 'System Design']
  },
  {
    title: 'Full Stack Developer',
    company: 'Health Vector, Bangalore',
    period: 'Mar 2024 — May 2024',
    description: 'Developed full-stack web applications for the healthcare domain. Built RESTful APIs with Spring Boot on the backend and interactive dashboards with React on the frontend. Worked with databases, CI/CD pipelines, and agile development practices.',
    icon: <FaReact />,
    tags: ['React', 'Spring Boot', 'REST API', 'SQL', 'Git']
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Journey</h5>
      <h2>Experience</h2>
      <div className='container experience__container'>
        <div className='timeline'>
          <div className='timeline-line' />
          {experiences.map((exp, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className='timeline-dot'>
                <span className='timeline-icon'>{exp.icon}</span>
              </div>
              <div className='timeline-card glass'>
                <div className='timeline-header'>
                  <h3>{exp.title}</h3>
                  <span className='timeline-company'>{exp.company}</span>
                </div>
                <span className='timeline-period'>{exp.period}</span>
                <p>{exp.description}</p>
                <div className='timeline-tags'>
                  {exp.tags.map((tag, i) => (
                    <span className='timeline-tag' key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
