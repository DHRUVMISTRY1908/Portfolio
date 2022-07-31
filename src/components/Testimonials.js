import React from 'react'
import './Testimonials.css'
import AVTR1 from '../assets/assets/avatar1.jpg'
import AVTR2 from '../assets/assets/avatar2.jpg'
import AVTR3 from '../assets/assets/avatar3.jpg'
import AVTR4 from '../assets/assets/avatar4.jpg'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data=[
  {
    avatar:AVTR1,
    name:"KAJAL PANCHAL",
    review:"Very creative and a fun loving person. Really important asset for a company because of his skills "

},
{
  avatar:AVTR2,
  name:"Vipul Dalal",
  review:"Really proffesional when it comes to work and very helping in nature."

},
{
  avatar:AVTR3,
  name:"Rajesh Mistry",
  review:"Absolutely wonderful with outputs. Have really good understanding about his job."

},
{
  avatar:AVTR4,
  name:"Urvashi Panchal",
  review:"Good in extra-curricular activities along with maintaing job deadlines."

}

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container' 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
      
     

        {data.map((user)=>{
          return (
            <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={user.avatar} alt='avatar1'></img>
            </div>
            
            
            <h5 className='client__name'> {user.name}</h5>
            <small className='client__review'>{user.review}</small>
            
          </SwiperSlide>
          )
        })}
       

        
      </Swiper>
    </section>
  )
}

export default Testimonials