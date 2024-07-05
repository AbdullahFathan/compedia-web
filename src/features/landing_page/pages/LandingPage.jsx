import React from "react";
import Navbar from "../../../components/Navbar";
import Fotter from "../../../components/Fotter";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import VisionMission from "../components/VisionMission";
import WhyUs from "../components/WhyUs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <VisionMission />
      <WhyUs />
      <Fotter />
    </>
  );
};

export default LandingPage;
