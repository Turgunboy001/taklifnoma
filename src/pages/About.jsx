import React from "react";
import img1 from "../assets/corner.webp";
import naqsh from "../assets/naqsh.webp";
import words from "../assets/words.webp";
import line from "../assets/line.webp";
import bg from "../assets/bg.webp";

const About = () => {
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

        {/* line image  */}
        <img src={line} className="w-full" alt="" />

        <div
          className=" w-full h-100 flex items-center justify-center bg-cover bg-center flex-col gap-5 relative z-20   "
          style={{ backgroundImage: `url(${bg})` }}
        >
          <p className="script gold text-xl">Kelin & Kuyov</p>
          <h1 className="margarin  text-4xl sm:text-7xl text-orange-300">Asadbek</h1>
          <h1 className="margarin text-7xl text-orange-300">&</h1>
          <h1 className="margarin text-4xl sm:text-7xl text-orange-300">Asadbek</h1>
        </div>

        {/* line image  */}
        <img src={line} className="w-full" alt="" />

        {/* border images  */}
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

        {/* naqsh image  */}

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

export default About;
