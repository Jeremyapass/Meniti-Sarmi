import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SarmiTourism from "@/components/sarmiTourism";
import TulisanAtauArtikel from "@/components/tulisanAtauArtikel";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="bg-drone1 bg-cover  p-6 h-[70%] flex flex-col  bg-no-repeat bg-center justify-between">
        <Navbar />
        <h1 className="text-white font-josefinsans text-[28px]  sm:text-[71px] w-[70%] bg font-bold  ">
          Jelajahi Keindahan Sarmi Kota Seribu Ombak
        </h1>
      </div>

      <div className="flex flex-col py-8 px-4 sm:px-12" name="Sarmi Tourism">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full mb-3">
        <div className="flex flex-col w-full sm:w-[40%]">
          <h2 className="text-[20px] sm:text-[40px] text-[#676767] -mb-3 sm:-mb-5">
            Discover new destination
          </h2>
          <h1 className="text-[34px] sm:text-[70px] font-bold">Sarmi Tourism</h1>
        </div>
        <p className="text-[18px] sm:text-[25px] w-full sm:w-[60%] tracking-wider text-[#676767] self-center">
          Embark on a remarkable journey with us. Discover captivating
          destinations, create lifelong memories, and experience the
          friendliness of the local people.
        </p>
      </div>
      <SarmiTourism />
    </div>

      <div name="Tulisan atau Artikel">
        <h1 className=" sm:px-12 px-4 text-[20px] sm:text-[70px] font-bold">Tulisan atau Artikel</h1>
        <TulisanAtauArtikel/>
        <hr  className="mb-16"/>
      <Footer/>
      </div>
    </main>
  );
}
