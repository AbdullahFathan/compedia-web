import React, { useState } from "react";
import Images from "../assets";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar bg-white shadow-custom-shadow px-4 xl:px-12">
      <div className="navbar-start">
        <a className="h-[48px] w-[145px] bg-primary p-2 rounded flex items-center justify-center">
          <img src={Images.Logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavbarItem />
        </ul>
      </div>

      {/*Navbar Mobile */}

      <div className="dropdown flex md:hidden flex-1 justify-end items-end z-10 relative">
        <button
          type="button"
          onClick={() => {
            console.log("tekan ");
            setOpen((prev) => !prev);
            console.log(open);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-12 right-0 bg-neutural-white px-5 w-screen shadow-custom-shadow hover:bg-primary`}
        >
          <div className="navbar-center flex flex-col">
            <ul className="menu menu-sm dropdown-content">
              <NavbarItem />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
