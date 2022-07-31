import React from 'react'
import './About.css'
import ME from '../assets/assets/image.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import { BsFillPatchCheckFill } from "react-icons/bs";
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years of experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>EDUCATION</h5>
              <small>Currently in 3rd year (BTech)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ completed projects</small>
            </article>
          </div>

          <p>A frontend Developer , always in search for creative ideas for dealing with problems. I have build various projects to showcase my skills in this domain.
            Worked under marketing for the council to get knowledge of the non-tech field too. A fun-loving person adn absolutely easy to work with. I always give my 100 percent in whatever I'm doing
            to provide great output to the company.
          </p>
          

          <div className="about__box">
          <h3>My Qualities</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Leader Qualitites</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Team Member</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Good convincing capability</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Social Person</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Creative</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Hard worker</h4>
              </div>
            </article>
          </div>
        </div>
       
          <a href='#contact' className='btn btn-primary button' >Lets Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About