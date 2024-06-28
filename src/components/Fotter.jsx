import React from "react";
import Images from "../assets";

const Fotter = () => {
  return (
    <footer className="footer mt-20 footer-center bg-[#EEF2FF] text-primary-content p-10">
      <aside>
        <a className="h-[48px] w-[145px] bg-primary p-2 rounded flex items-center justify-center">
          <img src={Images.Logo} alt="logo" />
        </a>
        <p className="font-bold text-textBlack my-6">
          Compedia - Competition Encyclopedia
        </p>
        <p className="text-textBlack">
          Copyright © ${new Date().getFullYear()} - All right reserved by
          Compedia
        </p>
      </aside>
    </footer>
  );
};

export default Fotter;
