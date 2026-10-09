import React from "react";
import img1 from "../assets/corner.webp";
import naqsh from "../assets/naqsh.webp";
import words from "../assets/words.webp";

const Taklif = () => {
  return (
    <section
      id="taklif"
      className="h-screen w-full bg-[#18392B] flex justify-center flex-col items-start overflow-hidden  relative  p-5 "
    >
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <img
          src={naqsh}
          loading="lazy"
          className="animate-[spin_20s_linear_infinite] opacity-10 absolute  "
          alt=""
        />
        <h1 className="text-white w-[200px] sm:w-[350px]  italic text-center text-2xl">
          Sizni hayotimizdagi eng baxtli kun — to'yimizga taklif qilamiz
        </h1>
      </div>
      <div className=" border w-full h-full relative border-orange-300/30">
        <img
          src={img1}
          alt=""
          className="w-[96px] h-[96px] absolute left-4 top-4"
        />
        <img
          src={img1}
          alt=""
          className="w-[96px] h-[96px] absolute top-4 right-4 rotate-90"
        />
        <img
          src={img1}
          alt=""
          className="w-[96px] h-[96px] absolute bottom-4 left-4 -rotate-90"
        />
        <img
          src={img1}
          alt=""
          className="w-[96px] h-[96px] absolute bottom-4 right-4 rotate-180"
        />
      </div>{" "}
    </section>
  );
};

export default Taklif;
