import React from "react";
import { whyUsList } from "../../../constants/whyUs";

const WhyUs = () => {
  return (
    <section className="mt-20 mx-16 xl:mx-0 flex flex-col justify-center items-center ">
      <h2>Kenapa Memilih Kami?</h2>
      <h4 className="mt-4">
        Karena kami ingin membangun & mensupport ekosistem kompetisi pada
        mahasiswa secara end-to-end untuk mewujudkan <b>equality education</b>
      </h4>
      <div className="flex flex-wrap mt-5 ">
        {whyUsList.map((item, index) => (
          <div
            key={index}
            className=" flex flex-col items-start py-10 px-9 shadow-custom-shadow rounded-2xl w-[260px] mb-5 ml-5 "
          >
            <p className="text-6xl">{item.icon}</p>
            <h3 className="font-bold text-textBlack text-lg my-4">
              {item.title}
            </h3>
            <h4>{item.content}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
