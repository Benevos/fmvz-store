/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

function Carousel() 
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);

  const [sources, setSources] = useState([
    {img: 'https://picsum.photos/799/1300', title: 'Tarjeta 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus est excepturi illum rem libero fugit porro! Vel fugiat maiores accusamus corporis iste eum iusto corrupti soluta amet, enim deleniti'},
    {img: 'https://picsum.photos/800/800', title: 'Tarjeta 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus est excepturi illum rem libero fugit porro! Vel fugiat maiores accusamus corporis iste eum iusto corrupti soluta amet, enim deleniti'},
    {img: 'https://picsum.photos/1500/800', title: 'Tarjeta 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus est excepturi illum rem libero fugit porro! Vel fugiat maiores accusamus corporis iste eum iusto corrupti soluta amet, enim deleniti'},
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
          
            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active-slide' : 'hidden-slide'}`}>
              <img src={source.img} alt="img" className="carousel-img-background"/>
              <img src={source.img} alt="img" className="carousel-img"/>
              <div className="slide-legend-container">
                <div className="slide-legend">
                  <label>{source.title}</label>
                  <p>{source.description}</p>
                </div>
              </div>
            </div>
          )}
          <button className="carousel-prev-btn" onClick={goToPrevSlide}>
            <MdOutlineArrowBackIosNew/>
          </button>
          <button className="carousel-next-btn" onClick={goToNextSlide}>
            <MdOutlineArrowForwardIos/>
          </button>
        </div>
      </div>

      
    </>
  )
}

export default Carousel;