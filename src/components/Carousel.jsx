'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

function Carousel() 
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sources, setSources] = useState([
    'https://picsum.photos/1799/800',
    'https://picsum.photos/1800/800',
    'https://picsum.photos/1801/800',
    'https://picsum.photos/1802/800'
  ]);

  const goToPrevSlide = () => 
  {
    setCurrentIndex((currentIndex - 1 + sources.length) % sources.length);
  };

  const goToNextSlide = () => 
  {
    setCurrentIndex((currentIndex + 1) % sources.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);

    return () => {
      clearInterval(interval); // Limpieza al desmontar el componente
    };
  }, [currentIndex]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-slides">

          {sources.map((source, index) =>
          
            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : 'hid'}`}>
              <img src={source} alt="img" className="carousel-img"/> 
            </div>
          )}
          <button className="carousel-prev-btn" onClick={goToNextSlide}>
            <MdOutlineArrowBackIosNew/>
          </button>
          <button className="carousel-next-btn" onClick={goToPrevSlide}>
            <MdOutlineArrowForwardIos/>
          </button>
        </div>
      </div>

      
    </>
  )
}

export default Carousel;