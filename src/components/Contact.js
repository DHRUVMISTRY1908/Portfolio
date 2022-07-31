import React from 'react'
import './Contact.css'
import {MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import { useState } from 'react'
import {TiCancel} from'react-icons/ti'

const Contact = () => {

  const [show, setShow] = useState("alert alert-warning alert-dismissible fade none")
 


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_08v470l', 'template_9xa5x54', form.current, 'ir6Q-kNVZQYD3bdX7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

    setShow("alert alert-warning alert-dismissible fade ")


  }
   
    

  

  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-cta'/>
            <h4>Email</h4>
            <h5>mistrydhruv73@gmail.com</h5>
            <a href='mailto:mistrydhruv39@gmail.com' target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-cta'/>
            <h4>Messenger</h4>
            <h5>Dhruv Mistry</h5>
            <a href='https://m/me/dhruvmistry19' target="_blank">Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-cta'/>
            <h4>Whatsapp</h4>
            <h5>9082519987</h5>
            <a href='https://api.whatsapp.com/send?phone+919082519987' target="_blank">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your fullname' required></input>
          <input type="email" name='email' placeholder='Enter your eMail' required></input>
          <textarea rows='7 ' name='message' placeholder='Your Message' required></textarea>

          <button type="submit" className='btn btn-primary'>Send Message</button>

          <div className={show} role="alert">
            <strong>Congratulations!!</strong> Your email is succesfully sent.
            <button class="btn-close" onClick={()=>{setShow("alert alert-warning alert-dismissible fade none")}} aria-label="Close"><TiCancel/></button>
          </div>


        </form>
      </div>
    </section>
  )
}

export default Contact