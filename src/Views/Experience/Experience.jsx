import React from 'react'
import './Experience.css'
import { ParallaxBanner } from "react-scroll-parallax";

export const Experience = () => {

    const title_exp = {
        translateY: [5, 25],
 
        scale: [0.3, 1.2, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className='experience-title'>Strong proficiency in</div>
        ),
      };
    return (
        <>
        <div class="container">
        <ParallaxBanner
       layers={[title_exp]}
       className="ab-container"
       />
<div class="horizontal-scrolling-items">

<img className="horizontal-scrolling-items__item" src='src/assets/images/Languages.png'></img>

<img className="horizontal-scrolling-items__item" src='src/assets/images/Languages.png'></img>

</div>

</div>
        </>
    )
}