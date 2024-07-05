import React from "react";
import MobileApps from "./MobileApps";
import WebApp from "./WebApp";

const MainServices = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32">
      <h2>Layanan Utama Kami</h2>
      <h4 className="mt-4 text-center">
        Layanan utama kami tersedia dalam bentuk aplikasi mobile (untuk
        mahasiswa lomba dan mentor) serta web (untuk pembuat kompetisi)
      </h4>
      <div className="flex justify-between flex-col xl:flex-row mt-5">
        <MobileApps />
        <WebApp />
      </div>
    </section>
  );
};

export default MainServices;
