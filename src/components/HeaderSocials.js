import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dhruv-mistry-862589207/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/DHRUVMISTRY1908' target='_blank'><BsGithub/></a>
        <a href='https://facebook.com' target='_blank'><BsFacebook/></a>
    </div>
    
  )
}

export default HeaderSocials