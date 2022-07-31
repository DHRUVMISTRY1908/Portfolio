import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactPage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {

  const [active, setactive] = useState('#')
 
  return (
    <nav>
      <a href='#' onClick={()=>setactive('#')} className={active==='#'? 'active':" "} ><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setactive('about')} className={active==='about'? 'active':" "} ><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setactive('experience')} className={active==='experience'? 'active':" "}  ><BiBook/></a>
      <a href='#portfolio' onClick={()=>setactive('portfolio')} className={active==='portfolio'? 'active':" "}  ><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setactive('contact')} className={active==='contact'? 'active':" "} ><MdOutlineContactPage/></a>
    </nav>
  )
}

export default Nav