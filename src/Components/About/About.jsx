import React from 'react'
import './About.css'
import Francisc_ilahaka from "../../assets/Francis-Ilahaka.jpg" 
import Lilian_Ingato from "../../assets/Lilian-Ingato.jpg"
import Praise_Ivanna from "../../assets/Praise-Ivanna.jpg"
import Joseph_Kombo from "../../assets/Joseph-kombo.jpeg"
import core_values from '../../assets/core-values.png';
import achievements from '../../assets/achievements.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-banner'>
        <h2>FROM WASTE TO WONDER</h2>
        <h3>LEARN ABOUT THE KEY DECISIONS THAT SHAPED OUR DESTINY.</h3>
      </div>
      <div className='about-body'>
        <h2>Our Story & Background</h2>
        <p>
          Nairobi Urban Green began with just seven kale suckers, planted at a local church using leftover water — only five germinated. <br />
          What started as a small kitchen garden quickly grew into a movement rooted in innovation, sustainability, and community.
        </p>
        <p>
          In those early days, I began experimenting with domestic waste materials discarded along the railway line 
          and discovered that many Nairobians unknowingly throw away viable seeds and seedlings. I saw potential in what others considered waste.
        </p>
        <p>
          With time, our garden blossomed into a rich mix of traditional vegetables, herbs, fruits, and flowers. 
          A professor from Wageningen University helped me define what I was doing as using "domestic leftovers", a term that captured both the spirit and the science behind the project.
        </p>
        <p>
          As our organic garden thrived, people from the community started showing up, not just for vegetables, but for knowledge. 
          I began distributing free suckers and seedlings to aspiring urban farmers, many of whom now run their own thriving gardens across Nairobi and beyond.
        </p>
        <h2>💡 Growth & Recognition</h2>
        <p>Our work soon attracted the attention of Lions Club International, who supported the launch of our School Garden Project. 
          Thanks to the leadership of Dr. M. Shah, we've helped establish over 10 school gardens in Nairobi donating not just our expertise, but free seeds and seedlings to plant fruit trees and vegetables.
        </p>
        <p>
          Another turning point came through support from IFRA (French Institute for Research in Africa), the French Government, and the French Cultural Center, who invited us to take part in their Science Café series. 
          This platform brought together global scholars, journalists, and the public to share ideas and led to our participation in the 2014 Family Farming Exhibition, part of the UN's International Year of Family Farming.
        </p>
        <p>
          We've also received community-focused support from Strathmore University, which further fueled our mission to green Nairobi from the ground up.
        </p>
        <h2>🌍 Inspired by Experience</h2>
        <p>Before founding Nairobi Urban Green, I worked as a journalist and served as Media Adviser on Agriculture and Farming in East Africa to Dr. Prof. 
          Paul Mwaluko, a UN Envoy and scholar educated at Makerere, Oxford, and Cambridge. Attending conferences, farmer field days, and workshops with thought leaders like him greatly shaped the values that now guide our work.
        </p>
        <h2>💚 Today</h2>
        <p>Nairobi Urban Green is more than just a garden, it's a growing network of schools, homes, and communities reclaiming sustainability and food security through urban farming.
          We're proudly rooted in the soil of Nairobi and deeply committed to helping others grow.
        </p>
      </div>
      <section className="mission-vision-approach">
        <h2>Our Mission, Vision & Approach</h2>
        <div className="mva-cards">
          <div className="mva-card">
            <h3>Vision Statement</h3>
            <p>
              To create greener, healthier, and more self-sustaining cities by transforming 
              domestic waste into tools for urban farming, nutrition, and environmental education 
              through community-driven workshops, school gardens, and strong collaborations with 
              local government and grassroots partners.
            </p>
          </div>
          <div className="mva-card">
            <h3>Our Mission</h3>
            <p>
              To expand our impact beyond Nairobi by building partnerships with global garden 
              networks such as the Royal Horticultural Society and the British Botanic Gardens — 
              and to inspire the establishment of thriving, sustainable gardens across communities worldwide.
            </p>
          </div>
          <div className="mva-card">
            <h3>Our Approach</h3>
            <p>
              We turn domestic waste and leftovers into fertile solutions — growing food and vegetables 
              while producing quality seeds and seedlings through our community seed production model. 
              These are distributed freely to under-resourced farmers and schools, with the core goal of 
              promoting urban farming, sustainable nutrition, and a return to traditional, culturally-rooted foods.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="core-values">
        <div className="core-values-container">
          <div className="core-values-left">
            <h2>Our Core Values</h2>
            <div className="core-values-image-mobile">
              <img src={core_values} alt="Core Values" />
            </div>
            <ul>
              <li>
                <h3>Sustainability</h3>
                <p>We are committed to practices that ensure long-term environmental balance.</p>
              </li>
              <li>
                <h3>Community Empowerment</h3>
                <p>We work to uplift and empower communities by providing access to knowledge, skills, and resources that improve livelihoods.</p>
              </li>
              <li>
                <h3>Innovation</h3>
                <p>We embrace creativity and modern solutions to tackle the challenges facing farmers and communities.</p>
              </li>
              <li>
                <h3>Integrity</h3>
                <p>We value honesty, transparency, and accountability in all our actions and partnerships.</p>
              </li>
              <li>
                <h3>Collaboration</h3>
                <p>We believe in the power of working together with farmers, schools, organizations, and stakeholders to achieve sustainable impact.</p>
              </li>
            </ul>
          </div>
          <div className="core-values-right core-values-image-desktop">
            <img src={core_values} alt="Core Values" />
          </div>
        </div>
      </section>

      {/* Key Milestones & Achievements */}
      <div className="milestones">
        <div className="milestones-container">
          <div className="milestones-left milestones-image-desktop">
            <img src={achievements} alt="Key Milestones" />
          </div>
          <div className="milestones-right">
            <h2>🌟 Key Milestones & Achievements</h2>
            <div className="milestones-image-mobile">
              <img src={achievements} alt="Key Milestones" />
            </div>
            <ul>
              <li>
                <h3>11+ Years of Impact</h3>
                <p>
                  Over a decade of consistent community service in promoting urban
                  farming and environmental sustainability.
                </p>
              </li>
              <li>
                <h3>10+ School Gardens Established</h3>
                <p>
                  Launched and supported over ten school gardens across Nairobi on
                  a charitable basis — empowering students with practical
                  agricultural skills.
                </p>
              </li>
              <li>
                <h3>5+ Counties Reached with Free Planting Materials</h3>
                <p>
                  Distributed free sukuma wiki suckers, cassava cuttings, and sweet
                  potato vines to farmers in Kakamega, Murang'a, Kitengela, Vihiga,
                  and Nakuru — and over 40 urban farmers within Nairobi.
                </p>
              </li>
              <li>
                <h3>Recognition in Global Events</h3>
                <p>
                  Collaborated with Strathmore University and Lions Club
                  International to create a sustainable format for seed and
                  seedling production, shared freely through community networks.
                </p>
              </li>
              <li>
                <h3>Partnerships for Seed Production Innovation</h3>
                <p>
                  We take responsibility for protecting nature, promoting tree
                  planting, and reviving traditional farming practices.
                </p>
              </li>
              <li>
                <h3>Global Networking for Sustainable Growth</h3>
                <p>
                  Established connections with gardening and environmental
                  organizations worldwide — reinforcing our commitment to global
                  sustainable development goals.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="team-container" id="team-section">
        <h1>Some Faces Behind Our Operations</h1> 
        <div className='team-wrapper'>
          <div className='team-member'>
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
          <div className='team-member'>
            <img src={Lilian_Ingato} alt="Lilian Ing'ato" />
            <h3>Lilian Ing'ato</h3>
            <h4>Nutritionist Researcher</h4>
            <p>
              With a focus on public health and the nutritional value of 
              plants in agriculture, her work bridges the gap between food 
              systems and health outcomes, aiming to educate and empower 
              students from junior levels to higher learning institutions 
              on the importance of nutrition in daily life.
            </p>
            <p>
              Lilian is passionate about making nutrition science accessible, promoting healthy eating 
              habits, and highlighting the role of plant-based foods in preventing 
              disease and supporting community well-being.
            </p>
          </div>
          <div className='team-member'>
            <img src={Praise_Ivanna} alt="Praise Ivanna" />
            <h3>Praise Ivanna</h3>
            <h4>IT Specialist - Urban Farming</h4>
            <p>
              A tech-savvy and solutions-driven IT professional with a passion for sustainable agriculture and smart farming technologies. 
              Responsible for managing digital infrastructure, automating farm operations, and supporting data-driven decision-making in an urban farming environment.
            </p>
            <p>
              Skilled in network systems, IoT integration, farm management software, and troubleshooting hardware/software issues to ensure smooth and efficient farm operations.
            </p>   
          </div>
          <div className='team-member'>
            <img src={Joseph_Kombo} alt="Joseph Kombo" />
            <h3>Joseph Kombo</h3>
            <h4>Secretary in charge of Mobilization and Organizing</h4>
            <p>
              A trained teacher with a strong background in science and environmental education. 
              He has nurtured and mentored countless students in the informal settlements of Kibera and beyond.
            </p>
            <p>
              As a passionate educator, Kombo brings fresh perspective and inspiration to the team, helping to shape young minds and green spaces alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About