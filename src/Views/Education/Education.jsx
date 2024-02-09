import React from 'react'
import "./Education.css"
import { ParallaxBanner } from "react-scroll-parallax";

export const Education = () => {
  const quote = {
    translateY: [5, 25],
    
    scale: [0.7, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="about-info">

    <p className='intro'>I am Victoria</p>
    <p className='intro-p'>My passion for 
        technology and engineering has shaped my entire journey. From a young age, I found myself
        drawn to the possibilities and innovations that this field offers. Now, as I approach the culmination
         of my degree in Software Engineering, I am filled with a profound sense of excitement for the future.</p>
      </div>
    ),
  };
   return(
    <>
<div className='quote-container'>
  <div className='quote'>"Dedicated to delivering excellence and exceeding expectations"</div>
</div>
<div className='education-container'>
  <div className='education-info'>
    <p>Education</p>
    <p className='unimet'>Software Engineering - Universidad Metropolitana (2020-2024)</p>
    <img src="/assets/images/unimet.png"></img>
  </div>
  
</div>
</>
   )
      
    
}