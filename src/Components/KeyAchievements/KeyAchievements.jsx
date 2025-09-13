import React from 'react';
import './KeyAchievements.css';

const KeyAchievements = () => {
  return (
    <section className="achievements-wrapper">
      <div className="container-left">
        <h2>Explore Some of our key achievements</h2>
        <p>
          Analyzing the impact of our efforts: a detailed look at the key metrics
          driving our environmental achievements.
        </p>
        <button className="more-btn">More information</button>
      </div>

      <div className="container-right">
        <div className="achievement-box">
          <h1>11+</h1>
          <h2>Years of Service</h2>
          <p>
            Over a decade of consistent community service in promoting urban
            farming and environmental sustainability.
          </p>
        </div>

        <div className="achievement-box">
          <h1>10+</h1>
          <h2>Community Projects</h2>
          <p>
            Successful implementation of community-driven urban farming
            initiatives across multiple regions.
          </p>
        </div>

        <div className="achievement-box">
          <h1>5+</h1>
          <h2>Partnerships</h2>
          <p>
            Building collaborations with local and international organizations
            to drive sustainable impact.
          </p>
        </div>
      </div>

      {/* Duplicate button for mobile, hidden on desktop */}
      <div className="more-btn-mobile">
        <button className="more-btn">More information</button>
      </div>
    </section>
  );
};

export default KeyAchievements;
