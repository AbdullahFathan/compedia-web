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
import StatistikPrestasi from "../components/StatistikPrestasi";
import BestMentor from "../components/BestMentor";
import FeedbackUser from "../components/FeedbackUser";

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
      <StatistikPrestasi />
      <BestMentor />
      <FeedbackUser />
      <Fotter />
    </>
  );
};

export default LandingPage;
