import React from "react";
import img1 from "../assets/corner.webp";
import naqsh from "../assets/naqsh.webp";
import words from "../assets/words.webp";
import line from "../assets/line.webp";
import bg from "../assets/bg.webp";
import { CalendarDays, CalendarIcon, Heading } from "lucide-react";
import { WeddingCalendar } from "../components/wendingCalendar";

const Kalendar = () => {
  return (
    <section
      id="about"
      className="h-screen w-full bg-[#082418] flex justify-center flex-col items-start overflow-hidden"
    >
      <div className="w-full relative">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={naqsh}
            className=" absolute w-[500px] h-[500px] opacity-10  justify-center animate-[spin_15s_linear_infinite]  "
            alt=""
          />
        </div>
        <div className="relative w-full flex items-center justify-center">
          <img
            src={naqsh}
            className=" absolute w-[300px] h-[300px]  justify-center animate-[spin_15s_linear_infinite]  "
            alt=""
          />
        </div>
        <div className=" w-full  flex items-center justify-center z-10 bg-cover bg-center flex-col gap-5 relative  backdrop-blur-xs bg-white/10 ">
          <section className="section px-5 py-12">
            <div className="mb-5 text-center gold">
              <CalendarIcon className="mx-auto size-10 text-orange-300" />
            </div>
            <h1 className="script text-3xl text-center py-5 text-orange-300">
              To'y Sanasi
            </h1>
            <WeddingCalendar />
          </section>
        </div>
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute top-14 left-5 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute top-14 right-5 rotate-90 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute bottom-14 left-5 -rotate-90 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute bottom-14 right-5 rotate-180 z-20"
        />
        <div className="relative w-full flex items-center justify-center">
          <img
            src={naqsh}
            className=" absolute w-[300px] h-[300px]  justify-center animate-[spin_15s_linear_infinite]  "
            alt=""
          />
        </div>
        <div className="relative w-full flex items-center justify-center">
          <img
            src={naqsh}
            className=" absolute w-[500px] h-[500px] opacity-10  justify-center animate-[spin_15s_linear_infinite]  "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Kalendar;
