import React from 'react'
import './skills.css'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaJava, FaAws
} from 'react-icons/fa'
import { SiTypescript, SiSpringboot, SiApachekafka } from 'react-icons/si'
import { MdOutlineAccountTree } from 'react-icons/md'

const skills = [
  { name: 'Java', icon: <FaJava />, level: 90, color: '#f89820' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 85, color: '#6db33f' },
  { name: 'React', icon: <FaReact />, level: 88, color: '#61dafb' },
  { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#f7df1e' },
  { name: 'Kafka', icon: <SiApachekafka />, level: 75, color: '#231f20' },
  { name: 'AWS', icon: <FaAws />, level: 78, color: '#ff9900' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#f05032' },
  { name: 'System Design', icon: <MdOutlineAccountTree />, level: 80, color: '#764abc' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#e34f26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#264de4' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 75, color: '#3178c6' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#68a063' },
]

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What I Work With</h5>
      <h2>Skills & Technologies</h2>
      <div className='container skills__container'>
        {skills.map((skill, index) => (
          <div
            className='skill-card glass'
            key={index}
            style={{ '--accent': skill.color, '--delay': `${index * 0.05}s` }}
          >
            <div className='skill-icon' style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className='skill-info'>
              <h4>{skill.name}</h4>
              <div className='skill-bar'>
                <div
                  className='skill-bar-fill'
                  style={{ '--width': `${skill.level}%`, '--color': skill.color }}
                />
              </div>
              <span className='skill-level'>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
