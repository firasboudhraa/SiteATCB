import React from "react";
import "./globals.css"
import Hero from "@/components/organisims/Hero/Hero"
import Cards from "@/components/organisims/Cards/Cards"
import StatsBar from "@/components/organisims/StatsBar/Statsbar"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Cards/>
      <StatsBar/>
    </div>
  );
}
