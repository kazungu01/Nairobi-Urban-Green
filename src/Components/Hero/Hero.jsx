import React from 'react'
import './Hero.css'
import nature1 from '../../assets/nature1.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <p className='hero-content'><strong>Nairobi Urban Green</strong> is a Community-Based Organization (CBO) focused on
           advancing sustainable urban agriculture by repurposing domestic waste and
            food scraps into valuable resources for growing crops and vegetables.
        </p>
        <p className='hero-content'>Through our community seed production project, we utilize environmentally 
          friendly practices to cultivate seeds and seedlings, which we distribute free 
          of charge to marginalized farmers and schools.
        </p>
        <p className='hero-content'>Our main objective is to promote urban farming and support the consumption
          of traditional, nutritious foods, ultimately leading to healthier communities
           and greener urban environments.
        </p>
        </div>
      <div className='hero-right'>
        <img src={nature1} alt="Nairobi's vision plan" id='nature1'/>
      </div>
    </div>
  )
}

export default Hero
