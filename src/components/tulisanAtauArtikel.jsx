import React from "react";
import FramePanjang from "/public/images/framePanjang.png";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  },
];

const TulisanAtauArtikel = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      <div className="flex space-x-4 p-4">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg bg-white w-[300px] sm:w-[500px] md:w-[700px] lg:w-[1000px]"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
              <Image
                src={item.gambar}
                alt={item.judul}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.tanggal}</p>
              <p className="font-bold text-lg">{item.judul}</p>
              <p className="text-sm text-gray-800">{item.tulisan}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default TulisanAtauArtikel;
