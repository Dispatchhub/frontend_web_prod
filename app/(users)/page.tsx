"use client";

import React from "react";
import Hero from "./components/home/Hero";
import Logistics from "./components/home/Logistics";
import Services from "./components/home/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Logistics />
      <Services />
    </div>
  );
};

export default Home;
