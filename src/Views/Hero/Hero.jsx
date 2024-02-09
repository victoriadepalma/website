import React from 'react'
import './Hero.css'

import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

export const Hero = () => {
    const background = {
        image: "public/assets/images/hero.jpeg",
        translateY: [0, 1.1],
        opacity: [1, 0],
        scale: [1, 0.8, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
      };
      const headline = {
        translateY: [0, 50],
        translateX: [0,20],
        scale: [1, 0.5, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl text-white font-thin">VICTORIA DE PALMA</h1>
            <h2 className="welcome">Welcome!</h2>
          </div>
        ),
      };
      const welcometext = {
        translateY: [30, 50],
        translateX: [0,-20],
        scale: [1, 0.8, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 flex items-center justify-center">
 
            {/* <h2 className="welcome">Welcome!</h2> */}
          </div>
        ),
      };
  return (
    // <div className='hero-image'>
    //   <div className="name" >VICTORIA DE PALMA</div>
    //   <div className="welcome">Welcome!</div>
    // </div>
     <div className="container-hero">
     <ParallaxBanner
       layers={[background, headline, welcometext]}
       className="bg-container"
     />
   </div>
  );
}