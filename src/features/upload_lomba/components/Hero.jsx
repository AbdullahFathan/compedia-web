import React from "react";
import Images from "../../../assets";

const Hero = () => {
  return (
    <section className="mx-8 my-8 xl:mx-14 xl:my-9">
      <h1 className="font-bold text-primary text-4xl mb-2">
        Selamat Datang Pada Menu Upload Lomba
      </h1>
      <h4>
        Pada menu ini, kamu dapat mempublish lombamu untuk dapat diketahui dan
        dijangkau oleh mahasiswa dari pengguna aplikasi compedia. Sebelum
        melakukan pengisian form harap perhatikan mekanisme aturan publish lomba
        pada compedia dibawah ini!
      </h4>

      <div className="  my-4 md:h-3/4 md:w-3/4 flex justify-center items-center mx-auto">
        <img
          src={Images.FLowUpload}
          alt="flow upload"
          className="max-w-full max-h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
