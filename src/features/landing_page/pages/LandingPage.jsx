import React from "react";
import Navbar from "../../../components/Navbar";
import Fotter from "../../../components/Fotter";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Fotter />
    </>
  );
};

export default LandingPage;
