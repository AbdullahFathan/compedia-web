import React from "react";
import { categoryLomba } from "../../../constants/lomba";

const BidangLomba = () => {
  return (
    <section className="mt-20 mx-16 md:mx-32">
      <h2>Pilihan Bidang Lomba yang Tersedia</h2>
      <h4 className="mt-4 text-center">
        Berikut pilihan bidang lomba yang dapat dijangkau pada platform kami
      </h4>
      <div className="mt-4 flex flex-wrap justify-center gap-6">
        {categoryLomba.map((item, index) => {
          if (item.name != "Lainnya") {
            return (
              <div
                key={index}
                className={` flex items-center border-  justify-center border-2 ${item.color} rounded-lg h-14 w-24   xl:h-[100px] xl:w-[172px]`}
              >
                <p className="text-base text-center text-textBlack font-medium">
                  {item.name}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default BidangLomba;
