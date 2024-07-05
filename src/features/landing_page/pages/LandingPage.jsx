import React from "react";
import Navbar from "../../../components/Navbar";
import Fotter from "../../../components/Fotter";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import VisionMission from "../components/VisionMission";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <VisionMission />
      <Fotter />
    </>
  );
};

export default LandingPage;
