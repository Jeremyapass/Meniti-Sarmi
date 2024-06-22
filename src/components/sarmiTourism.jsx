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
    <div className="flex justify-between bg-red-500">
      {gallery.map((item, index) => (
        <div className="relative" key={index}>
          <Image
            src={item.gambar}
            width={450}
            className="object-cover"
            alt=""
          />
          <div className="flex flex-col absolute bottom-[38px] left-[44px] z-10 text-white ">
            <p className="-mb-2">
              {item.lokasiDestinasi}
            </p>
            <p className="font-semibold text-[30px]">
              {item.namaDestinasi}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SarmiTourism;
