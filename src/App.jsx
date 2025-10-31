import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 

// Components
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Carousel from "./Components/Carousel/Carousel"
import Gallery from './Components/Gallery/Gallery'
import KeyAchievements from './Components/KeyAchievements/KeyAchievements';
import Team from './Components/Team/Team';
import FAQ from './Components/FAQ/Faq';
import Invitation from './Components/Invitation/Invitation';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import BlogDetail from './Components/BlogDetail/BlogDetail';
import ContactUs from './Components/ContactUs/ContactUs';
import About from './Components/About/About';
import Donate from './Components/Donate/Donate';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <Hero />
              <Carousel /> 
              <KeyAchievements/>
              <Team/>
              <FAQ/>
              <Invitation/>
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>




    // <div>
    //   <Navbar />
    //   <Hero />
    //   <Gallery/>
    //   <About/>
      
    // </div>
  )
}

export default App
