import bg from "../assets/bg.webp";
import img1 from "../assets/corner.webp";
import naqsh from "../assets/naqsh.webp";
import words from "../assets/words.webp";
import line from "../assets/line.webp";
const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-cover bg-center  relative p-4 overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={img1} alt="" className="w-[96px] h-[96px] absolute top-4" />
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
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <img
          src={naqsh}
          loading="lazy"
          className="animate-[spin_15s_linear_infinite] opacity-10 absolute"
          alt=""
        />
      </div>
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
        <img src={words} alt="arabic word" />
        <h1 className=" font-semibold text-orange-300 font-serif uppercase tracking-widest">
          Assalomu alaykum
        </h1>
        <img src={line} className="w-40 h-1" alt="" />
        <p className=" font-serif italic text-orange-300 text-4xl sm:text-7xl">
          Taklifnoma
        </p>
      </div>
    </section>
  );
};
export default Hero;
