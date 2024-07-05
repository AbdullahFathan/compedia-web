import React from "react";
import { visiMisionList } from "../../../constants/visiMision";

const VisionMission = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32">
      <h2>Visi & Misi Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {visiMisionList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start py-10 px-9 shadow-custom-shadow rounded-2xl"
          >
            <p className="text-base">{item.title} :</p>
            <h4>{item.content}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
