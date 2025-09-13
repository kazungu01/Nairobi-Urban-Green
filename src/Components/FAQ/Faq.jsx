import React, { useState } from 'react';
import './Faq.css';
import faq from "../../assets/faq.png"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who benefits from NUG's work?",
      intro: "Our initiatives primarily benefit:",
      answer: [
        "Low-income and small-scale farmers",
        "Urban growers",
        "Public schools and students",
        "Communities working toward food and environmental sustainability"
      ]
    },
    {
      question: "How can individuals or organizations get involved?",
      intro: "You can support or participate by:",
      answer: [
        "Joining our tree planting or school garden activities",
        "Donating seeds, materials, or funding",
        "Partnering with us on community-based projects",
        "Sharing and promoting our mission on social media platforms"
      ]
    },
    {
      question: "Why does NUG focus on traditional foods like cassava, sweet potatoes, and arrowroot?",
      answer: "Traditional foods such as cassava, sweet potatoes, and nduma (arrowroot) are rich in nutrients, drought-tolerant, and deeply connected to our cultural heritage. Ironically, while they are cheap and easy to grow, they’ve become increasingly expensive in the market, making them unaffordable for many families. By encouraging communities and schools to grow these staples, we reduce reliance on market prices, improve household nutrition, and empower people to produce healthy, affordable food using simple, sustainable methods."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-left">
          <h2>Frequently asked questions</h2>
          <p>In this section, you can address common inquiries effectively.</p>
          
          <div className="faq-items">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <svg 
                    className={`faq-arrow ${activeIndex === index ? 'active' : ''}`}
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      d="M5 7.5L10 12.5L15 7.5" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    />
                  </svg>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                  {Array.isArray(item.answer) ? (
                    <>
                      <p>{item.intro}</p>
                      <ul>
                        {item.answer.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-right">
          <img src={faq} alt="FAQ Illustration" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
