import React, { useState, useEffect } from "react";
import "./Carousel.css";
import green_field_1 from "../../assets/green-field-1.png";
import green_field_2 from "../../assets/green-field-2.png";
import farm from "../../assets/farm.png";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import francis from "../../assets/francis.jpg"
import Wangari_maathai from "../../assets/wangari-maathai.jpg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const totalSlides = 3;
  const autoPlayInterval = 5000; // 5 seconds

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    // Pause autoplay when user interacts
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    // Pause autoplay when user interacts
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    // Pause autoplay when user interacts
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="carousel">
      {/* Navigation buttons */}
      <img
        src={back_icon}
        alt="back"
        className="back-btn"
        onClick={handleBack}
      />
      <img
        src={next_icon}
        alt="next"
        className="next-btn"
        onClick={handleNext}
      />

      <div className="slider">
        <div 
          className="slides-container"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          <div className="slide slide-1">
            <div className="slide-content">
              <img
                src={francis}
                alt="Francis Ilahaka weeding"
                className="slide-img"
              />
              <div className="slide-text">
                <h2>Together, We Can Transform Cities into Greener, Healthier, and More Sustainable Spaces</h2>
                <p>
                    At Nairobi Urban Green, we turn household waste into life — growing food, 
                    planting trees, and empowering communities to create greener, healthier cities. <br />
                    By working together, we're building sustainable urban spaces where nature thrives, 
                    traditions are revived, and future generations can flourish. <br />
                    <strong>Join us today in transforming today's cities into tomorrow's green legacy.</strong>
                </p>

                <button className="slide-btn">Learn More</button>
              </div>
            </div>
          </div>

          <div className="slide slide-2">
            <div className="slide-content">
              <img src={Wangari_maathai} alt="Urban Farm" className="slide-img"/>
              <blockquote>"We cannot tire or give up.We owe it to the present and future generations of all species to rise up and walk!" <br />
                <strong>Wangari Maathai<br /> Nobel Peace Laureate & Environmental Activist</strong>
              </blockquote>
              <p>Drawing Inspiration from <strong>Prof. Wangari Maathai, </strong>
              her words inspire our mission — to rise up, take action, and create greener, healthier cities. 
              Her legacy reminds us that real change begins in our communities. 
              Through urban farming, waste recovery, and seed sharing, we're helping shape a sustainable future for all generations.</p>
              <button className="slide-btn">Get Involved</button>
            </div>
          </div>

          <div className="slide slide-3">
            <div className="slide-content">
              <h2>Greening Cities, Growing Communities</h2>
              <p>
               At Nairobi Urban Green, we believe that transforming urban spaces starts with empowering the people who live in them. 
               By turning domestic waste and leftovers into life-sustaining resources, 
               we're making our cities greener — not just through trees and plants, but through community resilience and food security.
              </p>
              <p>
                Through our innovative urban farming programs, we grow fresh vegetables using recycled materials, 
                produce seeds and seedlings through our community seed initiative, 
                and distribute them freely to low-income farmers and schools. 
                These efforts not only reduce food waste and improve access to nutritious food, 
                but also reconnect people with nature — right in the heart of the city.
              </p>
              <p>
                We're more than just an environmental initiative. We're a movement. A movement that's growing gardens, 
                reviving traditions, creating opportunities, and most importantly — growing strong, connected communities from the ground up.             
              </p>
              <button className="slide-btn">Join Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="slide-indicators">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;