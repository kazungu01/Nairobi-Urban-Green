import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Invitation.css'

const Invitation = () => {
  const navigate = useNavigate();
  return (
    <div className='invitation-wrapper'>
        <div className='invitation-left'>
            <h3>Join us and make a positive impact on the planet.</h3>
        <p>
            With support from local farmers, schools, and environmental partners,<br /> 
            we're building a sustainable future together.
        </p>
        </div>
        
        <div className='invitation-right'>
            <h3>What you will get</h3>
            <ul>
                <li>Hands on Impact</li>
                <li>Learning & Growth</li>
                <li>A much greener Legacy</li>
            </ul>
            <button className='contact-us-btn' onClick={() => navigate('/contact-us')}> Contact Us</button>
        </div>
      
    </div>
  )
}

export default Invitation
