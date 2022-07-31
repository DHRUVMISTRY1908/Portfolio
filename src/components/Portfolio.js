import React from "react";
import "./Portfolio.css";
import IMG1 from "../assets/assets/portfolio1.jpg";
import IMG2 from "../assets/assets/portfolio2.jpg";
import IMG3 from "../assets/assets/portfolio3.jpg";
import IMG4 from "../assets/assets/portfolio4.jpg";
import IMG5 from "../assets/assets/portfolio5.png";
import IMG6 from "../assets/assets/portfolio6.jpg";

const data=[
  {
    id:1,
    image:IMG1,
    title: "Stock Analysis ",
    github:"https://github.com",
    
  },
  {
    id:2,
    image:IMG2,
    title: "Doctor Appointment System",
    github:"https://github.com",
    
  },
  {
    id:3,
    image:IMG3,
    title: "iNoteBook",
    github:"https://github.com",
   
  },
  {
    id:4,
    image:IMG4,
    title: "News API",
    github:"https://github.com",
    demo:"https://dribble.com"
  },
  {
    id:5,
    image:IMG5,
    title: "A Stay Fit Ecommerce Website",
    github:"https://github.com",
   
  },
  {
    id:6,
    image:IMG6,
    title: "A TO-DO SYSTEM",
    github:"https://github.com",
  
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio__container">

        {data.map((element)=>{
          return(
          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={element.image} alt="1"></img>
          </div>
          <h3>{element.title}</h3>
          <div className="portfolio__item-cta">
            <a href={element.github} className="btn">
              GitHub
            </a>
            
          </div>
        </article>
          ) })}
        
       </div>
    </section>
  );
};

export default Portfolio;
