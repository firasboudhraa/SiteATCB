"use client";
import React, { useState } from 'react';

const Foire = () => {

  const images = [
    '/1.png',
    '/2.png',
    '/3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // État pour l'index de l'image actuelle pour "Nos Conférence"
  const [currentIndex1, setCurrentIndex_conf] = useState(0);

  const goToNext1 = () => {
    setCurrentIndex_conf((currentIndex1 + 1) % images.length);
  };

  const goToPrevious1 = () => {
    setCurrentIndex_conf((currentIndex1 - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Section Hero - Nos Foire */}
      <div className="hero relative bg-cover bg-center h-[20vh] flex items-center justify-center mt-3 ml-3 mr-3 rounded-3xl"
        style={{ backgroundImage: "linear-gradient(rgba(200,200,255,0.5), rgba(255,255,255,0.5)), url('/fond.jpg')" }}>
        <div className="overlay absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="container relative text-center text-white z-10">
          <div className="content">
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Nos Foire</h1>
            <p className="text-lg md:text-2xl mb-8"></p>
            <div className="buttons flex justify-center space-x-4">
              {/* Add buttons if necessary */}
            </div>
          </div>
        </div>
      </div>

      {/* Section Carousel - Nos Foire */}
      <div className="carousel-container mt-5 flex items-center justify-center">
        <button onClick={goToPrevious} className="text-2xl text-white bg-black bg-opacity-80 px-3 py-1 rounded-full mr-3">
          &#9664;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full max-w-4xl h-auto rounded-xl"
          style={{ maxHeight: "80vh" }} // Limite la hauteur pour ne pas dépasser l'écran
        />

        <button onClick={goToNext} className="text-2xl text-white bg-black bg-opacity-80 px-3 py-1 rounded-full ml-2">
          &#9654;
        </button>
      </div>

      {/* Section Hero - Nos Conférence */}
      <div className="hero relative bg-cover bg-center h-[20vh] flex items-center justify-center mt-3 ml-3 mr-3 rounded-3xl"
        style={{ backgroundImage: "linear-gradient(rgba(200,200,255,0.5), rgba(255,255,255,0.5)), url('/fond.jpg')" }}>
        <div className="overlay absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <div className="container relative text-center text-white z-10">
          <div className="content">
            <h1 className="text-4xl md:text-6xl font-bold mb-5">Nos Conférence</h1>
            <p className="text-lg md:text-2xl mb-8"></p>
            <div className="buttons flex justify-center space-x-4">
              {/* Add buttons if necessary */}
            </div>
          </div>
        </div>
      </div>

      {/* Section Carousel - Nos Conférence */}
      <div className="carousel-container mt-5 flex items-center justify-center">
        <button onClick={goToPrevious1} className="text-2xl text-white bg-black bg-opacity-80 px-3 py-1 rounded-full mr-3">
          &#9664;
        </button>

        <img
          src={images[currentIndex1]}
          alt={`Slide ${currentIndex1 + 1}`}
          className="w-full max-w-4xl h-auto rounded-xl"
          style={{ maxHeight: "80vh" }} // Limite la hauteur pour ne pas dépasser l'écran
        />

        <button onClick={goToNext1} className="text-2xl text-white bg-black bg-opacity-80 px-3 py-1 rounded-full ml-2">
          &#9654;
        </button>
      </div>

    </div>
  );
};

export default Foire;
