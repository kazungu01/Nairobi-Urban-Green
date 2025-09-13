import React from 'react'
import Footer from '../Footer/Footer';
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_2 from '../../assets/gallery-2.jpg';
import gallery_3 from '../../assets/gallery-3.jpg';
import gallery_4 from '../../assets/gallery-4.jpg';
import gallery_5 from '../../assets/gallery-5.jpg';
import Navbar from '../Navbar/Navbar';

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <div className='gallery-top'>
            <img src="" alt="" />
            {/* <h1>GALLERY</h1> */}
            <h3>A Journey Through Our Green Story</h3>
            <p>Our gallery is more than just photos, it’s a living record of moments
                that shaped <strong>Nairobi Urban Green</strong>. From hands in the soil to school garden smiles,
                from quiet afternoons on the farm to conversations with international partners, 
                these snapshots capture the spirit of community, growth, and resilience.</p>
            <p>Every photo here tells part of our journey — the progress, 
               the people, and the purpose behind it all. Whether it's a child 
               planting their first seedling or a quiet corner of our farm in bloom, 
               we invite you to explore the roots and reach of our work.</p>
            <h3>Step into our world, One photo at a time. </h3>

        </div>
        <div className='gallery'>
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_5} alt="" />
             <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_1} alt="" />
            <img src={gallery_5} alt="" />
        </div>
        < Footer/>
    </div>
    
  )
}

export default Gallery
