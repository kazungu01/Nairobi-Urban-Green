import React from 'react'
import './Donate.css';
const Donate = () => {
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
    <div className='donate'>
      <h2>Support Our Mission</h2>
      <h3>Help Us Grow Greener Cities, One Garden at a Time</h3>
      <p>At Nairobi Urban Green, we believe that every seed planted is a step toward food security, sustainability, and self-reliance. <br /> 
         What started with just a few kale suckers has grown into a movement that empowers communities, transforms schoolyards into gardens, and turns waste into life.
        But we can’t do it alone.
      </p>
      <h3>💚 Why Your Donation Matters</h3>
      <p>🌿 Start new community and school gardens in urban neighborhoods<br />
        🌾 Distribute free seeds, seedlings, and farming knowledge to families and schools<br />
        🌍 Promote sustainable agriculture and environmental awareness<br />
        🏫 Equip students with practical farming skills and food education<br />
        🧺 Turn waste into wealth by teaching organic composting and recycling methods</p><br />
<h3>📦How You Can Give</h3>
<p>You can support Nairobi Urban Green through:<br /></p>
<ul>
  <li>One-time or monthly donations</li>
  <li>Sponsoring a school garden</li>
  <li>In-kind contributions (e.g., seeds, tools, soil, watering cans)</li>
  <li>Corporate or group partnerships</li>
  <li>Volunteering your time or skills</li>
</ul>
<p>Every coin, seed, or act of kindness planted makes a difference.</p>
<h3>🔐 Safe & Transparent Giving</h3>
<p>We’re committed to accountability and transparency. <br />
   Every donation goes directly toward expanding our impact, and we’re always happy to share updates on where your support goes.</p>
<h3>🙌 Be Part of the Change</h3>
<p>Join us in cultivating a greener, healthier, and more food-secure Nairobi.<br />
Whether you're giving big or small, you're helping us plant hope — and harvest change.
</p>
<div className='donate-container'>
  <div className='donate-img'>

  </div>
  <div className='donate-right'>
    <h3>Pledge a Donation <br />💚</h3>
    <p>Small or Huge, your Contribution could make a huge impact in pushing the cause.</p>
    <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
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
                <label>Pledge Amount *</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Enter Amount" 
                  required 
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Comment *</label>
              <textarea 
                rows="6" 
                name="message"
                placeholder="Type your Comment here..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
            <span className="result-message">{result}</span>
          </form>
  </div>
</div>
    </div>
    
  )
}

export default Donate
