import React from "react";
import Image from "../../../assets";
import DetailText from "./DetailText";

const DetailLomba = () => {
  return (
    <div className="custom-input px-6 py-8">
      <div className="flex justify-center items-center">
        <img src={Image.Poster} alt="poster" width={147} height={210} />
      </div>

      <div className="space-y-4 my-5 max-w-xl">
        <DetailText title={"Status Lomba"} detail={"Telah Approve"} />
        <DetailText
          title={"Biaya Publish Lomba di App"}
          detail={"Rp240.000 / 30 Hari"}
        />
        <DetailText
          title={"Nama Lomba"}
          detail={"Hology Competition National Brawijaya 2022"}
        />
        <DetailText title={"Kategori Lomba"} detail={"IT, Bisnis"} />
        <DetailText
          title={"Kampus Penyelenggara"}
          detail={"Universitas Brawijaya"}
        />
        <DetailText title={"Biaya Registrasi"} detail={"Rp100.000"} />
        <DetailText title={"Tingkat Kompetisi"} detail={"Nasional"} />
        <DetailText title={"Mulai Registrasi"} detail={"20 May 2023"} />
        <DetailText title={"Batas Registrasi"} detail={"20 Jun 2023"} />
        <DetailText title={"Pelaksanaan Kompetisi"} detail={"Hybrid"} />
        <DetailText title={"Lokasi Lomba"} detail={"Kota Malang"} />
        <DetailText title={"Nama Pihak Lomba"} detail={"Hology Team"} />
        <DetailText title={"Email Pihak Lomba"} detail={"hology@ub.ac.id"} />
        <DetailText
          title={"Link Instagram Pihak Lomba"}
          detail={"www.instagram.com/hology"}
        />
        <DetailText
          title={"Deskripsi Lomba"}
          detail={
            "Lorem ipsum dolor sit amet consectetur. Nunc proin nunc at non nisl gravida vel cursus dapibus. Ipsum quis sodales arcu dolor. Sollicitudin sit nec tristique aenean dignissim maecenas morbi aliquam. Sit sed sodales sed proin vitae semper fermentum volutpat."
          }
        />
        <DetailText
          title={"Deskripsi Hadiah Lomba"}
          detail={
            "Juara 1 - Rp500.000\nJuara 2 - Rp300.000\nJuara 3 - Rp100.000\nseluruh finalis dan peserta mendapatkan sertifikat"
          }
        />
        <DetailText
          title={"Link Guidebook Lomba"}
          detail={"https://drive.google.com/drive/folders/1-BeWfNXskX5J"}
        />
        <DetailText
          title={"Link Registrasi Lomba"}
          detail={"www.hologyUB.com"}
        />
      </div>
    </div>
  );
};

export default DetailLomba;
