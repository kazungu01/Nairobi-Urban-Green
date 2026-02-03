import React, { useState, useEffect } from 'react'
import './Gallery.css'

import gallery_1 from '../../assets/gallery-1.jpg';
import gallery_3 from '../../assets/gallery-3.jpg';
import gallery_4 from '../../assets/gallery-4.jpg';
import gallery_5 from '../../assets/gallery-5.jpg';
import gallery_6 from '../../assets/gallery-6.jpg';
import gallery_7 from '../../assets/gallery-7.jpg';
import gallery_9 from '../../assets/gallery-9.jpg';
import gallery_10 from '../../assets/gallery-10.jpg';
import gallery_11 from '../../assets/gallery-11.jpg';
import gallery_12 from '../../assets/gallery-12.jpg';
import gallery_13 from '../../assets/gallery-13.jpg';
import gallery_14 from '../../assets/gallery-14.jpg';
import gallery_15 from '../../assets/gallery-15.jpg';
import gallery_16 from '../../assets/gallery-16.jpg';
import gallery_17 from '../../assets/gallery-17.jpg';
import gallery_19 from '../../assets/gallery-19.jpg';
import gallery_20 from '../../assets/gallery-20.jpg';
import gallery_21 from '../../assets/gallery-21.jpg';
import gallery_22 from '../../assets/gallery-22.jpg';
import gallery_23 from '../../assets/gallery-23.jpg';
import gallery_24 from '../../assets/gallery-24.jpg';
import gallery_25 from '../../assets/gallery-25.jpg';
import gallery_26 from '../../assets/gallery-26.jpg';
import gallery_27 from '../../assets/gallery-27.jpg';
import gallery_29 from '../../assets/gallery-29.jpg';
import gallery_30 from '../../assets/gallery-30.jpg';

const images = [
  gallery_1, gallery_17, gallery_3, gallery_4, gallery_5,
  gallery_6, gallery_7, gallery_9, gallery_12, gallery_13,
  gallery_14, gallery_15, gallery_16, gallery_19, gallery_20,
  gallery_21, gallery_22, gallery_23, gallery_24, gallery_25,
  gallery_29, gallery_30, gallery_10, gallery_11, gallery_26,
  gallery_27
]

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  // 🔒 Lock background scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  const closeViewer = () => setActiveIndex(null)
  const nextImage = () => setActiveIndex((activeIndex + 1) % images.length)
  const prevImage = () =>
    setActiveIndex((activeIndex - 1 + images.length) % images.length)

  return (
    <div className="gallery-container">
      <div className="gallery-top">
        <h3>A Journey Through Our Green Story</h3>
        <p>
          Our gallery is more than just photos, it’s a living record of moments
          that shaped <strong>Nairobi Urban Green</strong>.
        </p>
        <h3>Step into our world, one photo at a time.</h3>
      </div>

      <div className="gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={closeViewer}>
          <span className="close" onClick={closeViewer}>×</span>
          <span
            className="nav prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            ‹
          </span>

          <img
            src={images[activeIndex]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />

          <span
            className="nav next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
          >
            ›
          </span>
        </div>
      )}
    </div>
  )
}

export default Gallery
