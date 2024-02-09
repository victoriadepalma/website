import React from 'react'
import './About.css'
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

export const About = () => {
    const background = {
        image: "/assets/images/about-b.png",
        translateY: [0, 1.1],
        opacity: [0.8, 1],
        scale: [0.8, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        
      };
    const image = {
        image: "/assets/images/result.png",
        translateY: [0, 1.1],
        translateX:[-16,-13],
        opacity: [1, 1],
        scale: [0.2, 0.55, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
      };
    const intro1 = {
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
      return (
 
        <>
        <div className='about-container'>
      
        <ParallaxBanner
       layers={[background, intro1, image]}
       className="ab-container"
     />
            
        </div>
        </>

      );
    };
    
   