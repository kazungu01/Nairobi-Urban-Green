import React from 'react'
import { Routes, Route } from "react-router-dom"

// Components
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Carousel from "./Components/Carousel/Carousel"
import Gallery from './Components/Gallery/Gallery'
import KeyAchievements from './Components/KeyAchievements/KeyAchievements'
import Team from './Components/Team/Team'
import FAQ from './Components/FAQ/Faq'
import Invitation from './Components/Invitation/Invitation'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'
import BlogDetail from './Components/BlogDetail/BlogDetail'
import ContactUs from './Components/ContactUs/ContactUs'
import About from './Components/About/About'
import Donate from './Components/Donate/Donate'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminBlogs from './Components/Admin/AdminBlogs'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Carousel />
              <KeyAchievements />
              <Team />
              <FAQ />
              <Invitation />
            </>
          }
        />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
