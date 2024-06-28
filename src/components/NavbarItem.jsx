import React from "react";

const NavbarItem = () => {
  return (
    <>
      <li className="bg-neutural-white">
        <a className="navbarItem">Beranda</a>
      </li>
      <li className="navbarItem">
        <details>
          <summary>Tentang Kami</summary>
          <ul className="p-2 bg-neutural-white">
            <li>
              <a>Pengenalan</a>
            </li>
            <li>
              <a>Visi & Misi</a>
            </li>
            <li>
              <a>Kenapa Kami</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="navbarItem">
        <details>
          <summary>Produk</summary>
          <ul className="p-2 bg-neutural-white">
            <li>
              <a>Layanan Utama</a>
            </li>
            <li>
              <a>Skenario Layanan</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="navbarItem">
        <a>Kompetisi</a>
      </li>
      <li className="navbarItem">
        <details>
          <summary>Sorotan</summary>
          <ul className="p-2 bg-neutural-white">
            <li>
              <a>Statistika Juara</a>
            </li>
            <li>
              <a>Apresiasi Mentor</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="navbarItem">
        <a>Testimoni</a>
      </li>
    </>
  );
};

export default NavbarItem;
