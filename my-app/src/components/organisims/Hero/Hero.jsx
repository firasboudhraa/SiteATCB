"use client";
import React from 'react';

const Hero = () => {
  return (
    <div className="hero relative bg-cover bg-center h-screen flex items-center justify-center mt-3 ml-3 mr-3 rounded-3xl" style={{ backgroundImage: "linear-gradient(rgba(8,0,5,0.7), rgba(0,0,100,0.7)), url('/hero.jpg')" }}>
      <div className="overlay absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
      <div className="container relative text-center text-white z-10">
        <div className="content">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Vous prevoyez des travaux chez vous?</h1>
          <p className="text-lg md:text-2xl mb-8">OTCB  vous met en relation avec les professionnels du bâtiment</p>
          <div className="buttons flex justify-center space-x-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
