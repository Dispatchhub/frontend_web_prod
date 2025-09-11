"use client";

import React from "react";
import Hero from "./components/home/Hero";
import Logistics from "./components/home/Logistics";
import Services from "./components/home/Services";
import OurJob from "./components/home/OurJob";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logistics />
      <Services />
      <OurJob />
    </div>
  );
};

export default Home;
