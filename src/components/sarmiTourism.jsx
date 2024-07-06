import React from "react";
import Frame42 from "/public/images/Frame 42.png";
import Image from "next/image";

const gallery = [
  {
    gambar: Frame42,
    lokasiDestinasi: "lokasiDestinasi 1",
    namaDestinasi: "NamaDestinasi 1",
  },
  {
    gambar: Frame42,
    lokasiDestinasi: "lokasiDestinasi 2",
    namaDestinasi: "NamaDestinasi 2",
  },
  {
    gambar: Frame42,
    lokasiDestinasi: "lokasiDestinasi 3",
    namaDestinasi: "NamaDestinasi 3",
  },
];

const SarmiTourism = () => {
  return (
    <div className="flex sm:flex-row gap-4 flex-col sm:justify-between ">
      {gallery.map((item, index) => (
        <div className="relative" key={index}>
          <Image
            src={item.gambar}
            width={450}
            className="object-cover"
            alt=""
          />
           <div className="flex flex-col absolute bottom-4 sm:bottom-[38px] left-4 sm:left-[44px] z-10 text-white">
            <p className="-mb-2 text-[14px] sm:text-base">
              {item.lokasiDestinasi}
            </p>
            <p className="font-semibold text-[20px] sm:text-[30px]">
              {item.namaDestinasi}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SarmiTourism;
