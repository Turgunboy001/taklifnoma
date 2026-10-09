import img1 from "../assets/corner.webp";
import naqsh from "../assets/naqsh.webp";
import words from "../assets/words.webp";
const Sart = () => {
  return (
    <section
      id="sart"
      className="h-screen w-full bg-[#18392B] flex justify-center flex-col items-start overflow-hidden relative "
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

      <div className="pointer-events-none absolute inset-0">
        <img
          src={naqsh}
          className="absolute left-1/2 top-1/2 md:h-[800px] md::w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 animate-[spin_15s_linear_infinite]"
          alt=""
        />
        <img
          src={naqsh}
          className="absolute left-1/2 top-1/2 sm:h-[500px]  sm:w-[500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse] opacity-50"
          alt=""
        />
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[300px] w-[300px] flex-col items-center justify-center gap-3 rounded-full bg-[#18392B]">
          <img src={words} className="w-[180px]" alt="" />
          <h1 className="w-[150px] text-center text-xl italic leading-relaxed text-white serif">
            "U sizlar uchun juftlar yaratdi, ular bilan taskin topishingiz
            uchun."
          </h1>
          <h1 className="leading-relaxed tracking-[1px] text-orange-300">
            Rum surasi, 21-oyat
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Sart;
