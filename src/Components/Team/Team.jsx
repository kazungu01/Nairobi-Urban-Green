import React from 'react'
import './Team.css' 
import Francisc_ilahaka from "../../assets/Francis-Ilahaka.jpg" 
import Lilian_Ingato from "../../assets/Lilian-Ingato.jpg"

const Team = () => {
  return (
    <div className="team-container">
        <h1>Some Faces Behind Our Operations</h1> 
        <div className='team-wrapper'>
          <div className='Member-1'>
              <img src={Francisc_ilahaka} alt="Francis Ilahaka" />
              <h3>Francis Ilahaka</h3>
              <h4>CEO & Founder</h4>
              <p>A former <strong>arts and culture journalist</strong> who now leads groundbreaking 
                 work in <strong>urban agriculture</strong>, focusing on the use of <strong>domestic leftovers</strong> 
                 to grow organic fruits and vegetables. His expertise is supported by 
                 international training, holding certifications in:</p>
                 <ul>
                  <li><strong>Nutrition, Health, and Food Safety</strong> from <strong>Wageningen University</strong></li>
                  <li><strong>The Age of Sustainable Development</strong> from <strong>SDG Academy</strong></li>
                 </ul>
              <p>Mr. Francis envisions urban gardens as vital to <strong>21st-century 
                 cities</strong>—not only for food production but also for community healing, 
                 climate resilience, and environmental education.</p>   
          </div>
          
          <div className='Member-2'>
              <img src={Lilian_Ingato} alt="Lilian Ing'ato" />
              <h3>Lilian Ing'ato</h3>
              <h4>Nutritionist Researcher</h4>
              <p>
                  With a focus on public health and the nutritional value of 
                  plants in agriculture. Her work bridges the gap between food 
                  systems and health outcomes, aiming to educate and empower 
                  students from junior levels to higher learning institutions 
                  on the importance of nutrition in daily life. Lilian is passionate 
                  about making nutrition science accessible, promoting healthy eating 
                  habits, and highlighting the role of plant-based foods in preventing 
                  disease and supporting community well-being.
              </p>
          </div>
        </div>
        <button className="see-more-btn">See more</button>
    </div>
  )
}

export default Team