import React from 'react';
import FramePanjang from "/public/images/framePanjang.png";
import Image from 'next/image';

const gallery = [
  {
    gambar: FramePanjang,
    tanggal: "tanggal 1",
    judul: "Judul 1",
    tulisan: "Tulisan 1",
  },
  {
    gambar: FramePanjang,
    tanggal: "tanggal 2",
    judul: "Judul 2",
    tulisan: "Tulisan 2",
  },
  {
    gambar: FramePanjang,
    tanggal: "tanggal 3",
    judul: "Judul 3",
    tulisan: "Tulisan 3",
  }
];

const TulisanAtauArtikel = () => {
  return (
    <div className="flex w-full gap-9 bg-gray-500" name="bungkusan">
        {gallery.map((item, index) => (
          <div key={index} className="bg-red-500 " name="boleh lebih">
              <Image src={item.gambar} alt={item.judul}  width={1000} className="rounded-lg" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.tanggal}</p>
              <p className="font-bold text-lg">{item.judul}</p>
              <p className="text-sm text-gray-800">{item.tulisan}</p>
            </div>
          </div>
        ))}
   
    </div>
  );
};

export default TulisanAtauArtikel;
