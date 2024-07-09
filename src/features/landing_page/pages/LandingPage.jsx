import React from "react";
import Navbar from "../../../components/Navbar";
import Fotter from "../../../components/Fotter";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import VisionMission from "../components/VisionMission";
import WhyUs from "../components/WhyUs";
import MainServices from "../components/MainServices";
import EkosistemLomba from "../components/EkosistemLomba";
import BidangLomba from "../components/BidangLomba";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <VisionMission />
      <WhyUs />
      <MainServices />
      <EkosistemLomba />
      <BidangLomba />
      <Fotter />
    </>
  );
};

export default LandingPage;
