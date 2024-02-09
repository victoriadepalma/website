import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <div className='contact'>Contact me</div>
            <div className='number'>+58 414 253 8489</div>
            <div className='gmail'>victoria.e.depalma.rivas@gmail.com</div>
            <div className='linkedin'>
            <a href="https://www.linkedin.com/in/victoria-de-palma-b35a27281/" target="_blank">
                <img src="/assets/images/linkedin.png" className='linkedin-pic' />
            </a>
           
            </div>
            </div>
        </footer>
    )
}