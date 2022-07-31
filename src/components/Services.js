import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>More About Me</h5>
      <h2>My Other Skills</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Hobbies</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>DANCING
 
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> PLAYING GUITAR
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SPORTS
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>VOLUNTEERING
              </p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Interests</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I love reading books
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Animal loving human
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Workoholic
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Passionate
              </p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ddddddddd
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ddddddddd
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ddddddddd
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ddddddddd
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>ddddddddd
              </p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services