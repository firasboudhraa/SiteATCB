import React from "react";
import "./globals.css"
import TopBanner from "@/components/molecules/TopBanner/TopBanner"
import Navbar from "@/components/molecules/Navbar/Navbar"

export default function Home() {
  return (
    <div>
      <TopBanner/>
      <Navbar/>
    </div>
  );
}
