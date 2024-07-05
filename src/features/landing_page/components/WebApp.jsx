import React from "react";
import Images from "../../../assets";
import { webList } from "../../../constants/mainServices";
import { useNavigate } from "react-router-dom";

const WebApp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col max-w-lg ">
      <div className="items-center">
        <img
          src={Images.Web}
          alt="phone1.png"
          className=" h-96 w-9/12 md:h-[450px] md:w-[630px] self-center"
        />
        <h5 className="font-semibold text-lg text-textBlack my-5 text-center ">
          Untuk Pembuat Kompetisi, Universitas, Hingga Calon Mahasiswa
        </h5>
        <div className="max-w-lg">
          {webList.map((item, index) => (
            <li key={index} className="text-neutral80 text-base">
              {item}
            </li>
          ))}
        </div>
      </div>
      <div className="space-y-5  space-x-0 md:space-y-0  md:space-x-5 m-4">
        <button
          type="button"
          className="btn btn-primary text-white"
          onClick={() => navigate("/upload")}
        >
          Upload Lombamu Disini!
        </button>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => navigate("/upload")}
        >
          Cek Status Lombamu
        </button>
      </div>
    </div>
  );
};

export default WebApp;
