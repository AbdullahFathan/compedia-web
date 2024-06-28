import React from "react";

const PriceSection = () => {
  return (
    <section className="mt-20 mx-4 md:mx-0 flex flex-col justify-center items-center ">
      <h2>Biaya Publish Lomba</h2>
      <h4 className="mt-4">
        Berikut adalah pilihan biaya publish lomba yang tersedia pada platform
        Compedia
      </h4>
      <div className="flex flex-col md:flex-row mt-5 md:mx-4 space-y-7 md:space-x-7">
        <div className=" flex flex-col items-start py-10 px-9 shadow-custom-shadow rounded-2xl w-[260px] ">
          <p className="text-6xl">🔥</p>
          <h3 className="font-bold text-textBlack text-lg my-4">Free/Hari</h3>
          <h4>
            Hanya berlaku selama 5 Hari dan terbatas hanya untuk 3 lomba
            perminggu. Hal ini untuk mendukung pendidikan yang accessible.
          </h4>
        </div>
        <div className=" flex flex-col items-start py-10 px-9 shadow-custom-shadow rounded-2xl w-[260px] ">
          <p className="text-6xl">💎</p>
          <h3 className="font-bold text-textBlack text-lg my-4">Rp8000/Hari</h3>
          <h4>
            Biaya ini berlaku kelipatan jika ingin mempublish lombanya selama 2
            bulan, cukup dikali dengan 60. Untuk minimal durasi paket ialah 5
            hari.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
