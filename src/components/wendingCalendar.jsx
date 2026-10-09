import { Clock } from "lucide-react";

export const WeddingCalendar = () => {
  const blanks = 2; // 1-dekabr 2026 — seshanba; hafta dushanbadan boshlanadi.
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="mx-auto max-w-sm border border-[#bba36a55] p-5 sm:p-7">
      <div className="mb-5 flex justify-between border-b border-[#bba36a55] pb-4 text-sm tracking-widest">
        <span>Noyabr</span>
        <span className="gold">2026</span>
      </div>

      <div className="grid grid-cols-7 gap-y-3 text-center">
        {["DU", "SE", "CH", "PA", "JU", "SH", "YA"].map((day) => (
          <span key={day} className="text-[10px] gold">
            {day}
          </span>
        ))}

        {Array.from({ length: blanks }, (_, i) => (
          <span key={`blank-${i}`} />
        ))}

        {days.map((day) => (
          <span
            key={day}
            className={`mx-auto grid h-8 w-8 place-items-center text-xs ${
              day === 2
                ? "rounded-full bg-[#c8a96a] font-bold text-[#10271c]"
                : "text-[#e5dece]"
            }`}
          >
            {day}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 border-t border-[#bba36a55] pt-5">
        <Clock size={18} className="gold" />
        <div>
          <p className="serif text-2xl">18:00</p>
          <p className="text-xs text-[#c3bdad]">Boshlanish vaqti</p>
        </div>
      </div>
    </div>
  );
};
