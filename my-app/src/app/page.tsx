import React from "react";
import "./globals.css"
import TopBanner from "@/components/molecules/TopBanner/TopBanner"
import Navbar from "@/components/molecules/Navbar/Navbar"
import Hero from "@/components/organisims/Hero/Hero"
import Footer from "@/components/molecules/Footer/Footer"

export default function Home() {
  return (
    <div>
      <TopBanner/>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
