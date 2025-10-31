import React from "react";
import "./ContactUs.css";
import caller_image from '../../assets/caller-image.jpg'

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5c5ff037-d858-43ce-b989-70c434b3c5b6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className='contact-banner'>
        {/* <h2>Contact Us</h2> */}
      </div>
      <div className="contact-container">
        <div className="contact-container-left">  
          <h3>
            Contact us for anything about our Company or services. <br />
            We'll do our best to get back to you as soon as possible.
          </h3>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input 
                  type="text" 
                  name="phone"
                  placeholder="+254" 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Enter subject" 
                  required 
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Question *</label>
              <textarea 
                rows="6" 
                name="message"
                placeholder="Type your question here..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
            <span className="result-message">{result}</span>
          </form>
        </div>
        
        <div className="contact-container-right">
          <img src={caller_image} alt="Contact us" />
          <h1>Let's Talk</h1>
          <p>
            Have questions about our programs, volunteer opportunities, or how you can get involved with Nairobi Urban Green ? <br /> 
            We'd love to hear from you! <br />Use the form below or any of our contact 
            details to reach out, and a member of our team will get back to 
            you as soon as possible.
          </p>
          {/* <h1>Our Address</h1> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;