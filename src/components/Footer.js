import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>DHRUV MISTRY</a>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://twitter.com'><BsTwitter/></a>
        <a href='https://instagram.com'><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;DHRUV MISTRY,All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer