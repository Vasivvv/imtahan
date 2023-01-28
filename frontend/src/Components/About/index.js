import React from 'react'
import './style.scss'

function About() {
  return (
    <div className='about'>

      <div className='about-header'>About Us</div>

      <div className='about-items'>
        <div className='about-left'>
          <img className='about-img' src='https://preview.colorlib.com/theme/nitro/images/hero_1.jpg.webp' alt='person' />
        </div>
        <div className='about-right'>
          <div className='about-right-head'>For the next great business</div>
          <div className='about-right-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</div>
          <div className='about-right-options'>
            <ul>
            <li className='about-li'><i class="fa-solid fa-check"></i>Officia quaerat eaque neque</li>
            <li className='about-li'><i class="fa-solid fa-check"></i>Possimus aut consequuntur incidunt</li>
            <li className='about-li'><i class="fa-solid fa-check"></i>Lorem ipsum dolor sit amet</li>
            <li className='about-li'><i class="fa-solid fa-check"></i>Consectetur adipisicing elit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About