import React from 'react'
import "./Education.css"
import { ParallaxBanner } from "react-scroll-parallax";

export const Education = () => {
    const quote_b = {
        translateY: [5, 25],
        
        scale: [0.7, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="quote-info">
              Dedicated to delivering excellence and exceeding expectations
          </div>
        ),
      };
    return (
        <>
        <div className='quote-container'>
        
        <ParallaxBanner
       layers={[quote_b]}
       className="q-container"
       
     />
          
        </div>
        <div className="education-container">Unimet</div>
        </>
    )
}