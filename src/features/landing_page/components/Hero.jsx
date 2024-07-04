import React from "react";
import Images from "../../../assets";

const Hero = () => {
  return (
    <div className="py-16 px-8 md:px-28  min-h-screen">
      <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse">
        <img src={Images.Hero} className="max-w-sm rounded-lg px-4 md:px-0 " />
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-primary">
            Maksimalkan Potensi,
            <br /> Raih Mimpi Sebagai{" "}
            <span className="text-orange-400">Juara!</span>
          </h1>
          <p className="py-6 text-neutral70">
            Hadirkan Kesetaraan pada Pendidikan dengan Personalisasi Karakter
            pada Kompetisi, Mentoring Online, & Komunitas Online dalam Aplikasi!
          </p>
          <button className="btn btn-primary text-white">
            Support Kami Disini!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
