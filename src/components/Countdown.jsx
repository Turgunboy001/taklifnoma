import { useEffect, useState } from "react";

const weddingDate = new Date("2026-11-02T18:00:00+05:00");

const Countdown = () => {
  const [time, setTime] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, weddingDate.getTime() - Date.now());

      setTime([
        Math.floor(diff / 86400000),
        Math.floor(diff / 3600000) % 24,
        Math.floor(diff / 60000) % 60,
        Math.floor(diff / 1000) % 60,
      ]);
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto grid max-w-md grid-cols-2 gap-5">
      {["Kun", "Soat", "Daq", "Son"].map((label, i) => (
        <div
          className="bg-[#0D291D] flex sm:flex-col items-center p-4 sm:p-10 rounded-2xl text-center gap-3"
          key={label}
        >
          <span className="text-orange-300 serif text-3xl sm:text-7xl">
            {String(time[i]).padStart(2, "0")}
          </span>
          <small className="text-white/40 font-semibold sm:text-2xl margarin">
            {label}
          </small>
        </div>
      ))}
    </div>
  );
};
export default Countdown;
