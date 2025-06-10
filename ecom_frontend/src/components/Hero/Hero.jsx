import React, { useState } from 'react'
import './Hero.css'


const Hero = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-left text-center text-md-start">
            <h1 className="display-4 fw-bold">{images[activeIndex].tagline}</h1>
            <p className="lead">Explore our wide range of fashion, electronics, and more.</p>
            <button className="btn btn-primary btn-lg mt-3">Shop Now</button>
          </div>
          <div className="col-md-6 hero-right d-none d-md-block">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {images.map((item, index) => (
                  <div
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    key={index}
                  >
                    <div className={`hero-image-container ${item.isCircular ? 'hero-image-circular' : ''}`}>
                      <img
                        src={item.image}
                        className={`d-block w-100 hero-image ${item.isCircular ? 'hero-image-circular' : ''}`}
                        alt={item.alt}
                        style={
                          item.isCircular
                            ? { objectFit: 'contain', objectPosition: 'center bottom' }
                            : { objectFit: 'cover', objectPosition: 'top' }
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
                onClick={() => handleSlide((activeIndex - 1 + images.length) % images.length)}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
                onClick={() => handleSlide((activeIndex + 1) % images.length)}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
