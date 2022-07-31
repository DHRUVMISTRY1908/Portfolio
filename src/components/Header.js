import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../assets/assets/hash.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5> WELCOME TO THE WORLD OF TECH WITH </h5>
        <h1 className='text-big'>DHRUV MISTRY</h1>
        <h5 className='text-light'>REACT JS DEVELOPER !! AI-ML ENTHUSIAST</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={me} alt='me'></img>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header