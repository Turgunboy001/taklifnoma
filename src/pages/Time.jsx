import React from "react";
import bg from "../assets/bg.webp";
import Countdown from "../components/Countdown";
import naqsh from "../assets/naqsh.webp";
import img1 from "../assets/corner.webp";

const Time = () => {
  return (
    <section
      id="time"
      className=" w-full bg-[#18392B] h-screen overflow-hidden  flex flex-col sm:flex-row "
    >
      <div
        className="sm:w-1/3 border-b sm:border-r flex items-center justify-center p-3 sm:p-10 bg-cover bg-center border-orange-300"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img
          src={naqsh}
          alt=""
          className="animate-[spin_15s_linear_infinite]"
        />
      </div>
      <div className="grid place-content-center sm:w-2/3  relative h-full" >
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute top-4 sm:top-14 left-5 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute top-4 sm:top-14 right-5 rotate-90 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute bottom-4 sm:bottom-14 left-5 -rotate-90 z-20"
        />
        <img
          src={img1}
          alt=""
          className="w-[70px] h-[70px] absolute bottom-4 sm:bottom-14 right-5 rotate-180 z-20"
        />

        <h1 className=" text-center mb-4 sm:mb-10 script text-3xl sm:text-5xl text-orange-300">
          Baxtli onlargacha...
        </h1>
        <Countdown />
      </div>
    </section>
  );
};

export default Time;
