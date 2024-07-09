import React from "react";
import Images from "../../../assets";

const EkosistemLomba = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32">
      <h2>Layanan Utama Kami</h2>
      <h4 className="mt-4 text-center">
        Layanan utama kami tersedia dalam bentuk aplikasi mobile (untuk
        mahasiswa lomba dan mentor) serta web (untuk pembuat kompetisi)
      </h4>
      <div className="  my-4  md:h-3/4 md:w-3/4 flex justify-center items-center mx-auto">
        <img
          src={Images.FlowRegis}
          alt="flowRegis.png"
          className="max-w-full max-h-full"
        />
      </div>
    </section>
  );
};

export default EkosistemLomba;
