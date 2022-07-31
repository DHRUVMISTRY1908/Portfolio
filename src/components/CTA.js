import React from 'react'
import CV from '../assets/assets/Resume-Dhruv-Mistry.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'> Lets talk</a>
    </div>
  )
}

export default CTA