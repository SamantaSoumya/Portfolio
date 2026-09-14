import React from 'react'
import Resume from "../../assets/resume.pdf"

const CTA = () => {
  return (
    <div className='cta'>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      <a href={Resume} download className='btn'>Download CV</a>
    </div>
  )
}

export default CTA
