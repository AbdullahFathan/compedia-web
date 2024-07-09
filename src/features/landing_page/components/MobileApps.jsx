import React from "react";
import Images from "../../../assets";
import { mahasiswaList, mentoList } from "../../../constants/mainServices";

const MobileApps = () => {
  return (
    <div className="flex flex-col ">
      <div className=" flex max-w-lg space-x-3  mb-5 md:mb-0 ">
        <div className="items-center">
          <img
            src={Images.Phone1}
            alt="phone1.png"
            className=" h-96 w-56 md:h-[450px] md:w-[212px]"
          />
          <h5 className="font-semibold text-lg text-textBlack my-5 ">
            Untuk Mahasiswa
          </h5>
          <div className="max-w-xs">
            {mahasiswaList.map((item, index) => (
              <li key={index} className="text-neutral80 text-base">
                {item}
              </li>
            ))}
          </div>
        </div>
        <div>
          <img
            src={Images.Phone2}
            alt="phone2.png"
            className=" h-96 w-56 md:h-[450px] md:w-[212px]"
          />
          <h5 className="font-semibold text-lg text-textBlack my-5 ">
            Untuk Mentor
          </h5>
          <div className="max-w-xs">
            {mentoList.map((item, index) => (
              <li key={index} className="text-neutral80 text-base">
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-5  space-x-0 md:space-y-0  md:space-x-5 m-4">
        <button type="button" className="btn btn-primary text-white">
          Download Aplikasi Disini!
        </button>

        <a
          role="button"
          href="https://youtu.be/JKwux7BFIVE"
          className="btn btn-outline btn-primary"
        >
          Lihat Demo Product
        </a>
      </div>
    </div>
  );
};

export default MobileApps;
