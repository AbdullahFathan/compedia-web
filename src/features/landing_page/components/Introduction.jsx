import React from "react";
import Images from "../../../assets";

const Introduction = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32">
      <div className="flex justify-between flex-col xl:flex-row ">
        <img
          src={Images.Review}
          alt="review-img"
          className="max-w-lg rounded-lg px-4 md:px-0"
        />
        <div className="max-w-xl  ">
          <h2 className="text-start mb-8">Pengenalan Kami (Compedia)</h2>
          <p className="text-base text-neutral80">
            Compedia merupakan platform berbasis mobile dan web yang hadir untuk
            mendukung <b>equality education</b> dengan meningkatkan{" "}
            <b>accessible</b>
            mahasiswa terhadap informasi kompetisi, mentoring online, dan
            komunitas online yang terpersonalisasi untuk mendukung pengalaman
            dan kontribusi mahasiswa Indonesia terhadap kompetisi, terutama
            teman-teman mahasiswa yang berada pada lingkungan yang kurang
            eksposur terhadap dunia kompetisi sehingga ekosistem kompetisi yang
            informatif dapat tercipta demi meningkatkan pemerataan akses
            pendidikan mahasiswa indonesia.
          </p>
          <p className="text-base text-neutral80 mt-5">
            Support dan dukunganmu sangat berarti bagi kami untuk bisa
            mengembangkan platform ini!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
