import React from "react";
import "./globals.css"
import Hero from "@/components/organisims/Hero/Hero"
import Cards from "@/components/organisims/Cards/Cards"
import StatsBar from "@/components/organisims/StatsBar/Statsbar"
import Specialities from "@/components/organisims/Specialities/Specialities"

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
