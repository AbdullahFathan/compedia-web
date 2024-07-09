import React from "react";
import Images from "../../../assets";

const Hero = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32 ">
      <div className="flex flex-col justify-between items-center xl:flex-row-reverse">
        <img
          src={Images.Hero}
          className="max-w-md rounded-lg mx-4 xl:mx-0 mb-10 xl:mb-0 hidden xl:flex   "
        />
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-primary">
            Maksimalkan Potensi,
            <br /> Raih Mimpi Sebagai
            <span className="text-orange-400">{" Juara!"}</span>
          </h1>
          <p className="py-6 text-neutral70">
            Hadirkan Kesetaraan pada Pendidikan dengan Personalisasi Karakter
            pada Kompetisi, Mentoring Online, & Komunitas Online dalam Aplikasi!
          </p>

          <a
            role="button"
            href="https://www.instagram.com/compedia_id?igsh=MWZqb2V0NGIxZ245Ng=="
            className="btn btn-primary text-white"
          >
            Support Kami Disini!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
