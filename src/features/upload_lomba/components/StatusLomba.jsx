import React from "react";
import SearchInput from "../../../components/SearchInput";
import LombaCard from "./LombaCard";
import DetailLomba from "./DetailLomba";

const StatusLomba = () => {
  return (
    <section className="mt-20 mx-4 md:mx-0 flex flex-col justify-center items-center">
      <h2>Cek Status Lomba</h2>
      <h4 className="mt-4">
        Untuk melihat bagaimana status lombamu saat ini, kamu dapat memasukkan
        unique code yang kamu terima disini untuk mengeceknya
      </h4>
      <div className="w-full md:w-1/2 my-8">
        <SearchInput textHolder={"Masukkan Unique Code Disini"} />
      </div>
      <div className="w-full md:w-1/2 mb-8">
        <LombaCard
          buttonTitle={"Lihat Detail Status"}
          title={"Hology Competition National Brawijaya 2022"}
        />
      </div>
      <DetailLomba />
    </section>
  );
};

export default StatusLomba;
