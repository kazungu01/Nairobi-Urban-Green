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


const App = () => {
  return (
    <Router>
      {/* Navbar stays visible on all pages */}
      <Navbar />

      {/* Links for navigation (you can also put these inside Navbar.jsx) */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/about">About</Link>
      </nav> */}

      {/* Routes decide which component to show */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Carousel /> 
              <KeyAchievements/>
              <Team/>
              <FAQ/>
              <Invitation/>
              <Footer/>

            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
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
