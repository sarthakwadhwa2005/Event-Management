import React, { useState } from 'react';
import './App.css';

const Home = () => {
  const images = [
    "/images/h1.png",
    "/images/c2.jpg",
    "/images/sp4.png"
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prevSlide} className="slider-button">❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button onClick={nextSlide} className="slider-button">❯</button>
    </div>
  );
};

export default Home;
