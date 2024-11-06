import React from "react";
import "./globals.css"
import Hero from "@/components/organisims/Home/Hero/Hero"
import Cards from "@/components/organisims/Home/Cards/Cards"
import StatsBar from "@/components/organisims/Home/StatsBar/Statsbar"
import Specialities from "@/components/organisims/Home/Specialities/Specialities"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Cards/>
      <StatsBar/>
      <Specialities/>
    </div>
  );
}
