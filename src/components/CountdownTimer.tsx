import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-11-18T23:59:59").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-10">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {pad(u.value)
              .split("")
              .map((digit, i) => (
                <div
                  key={i}
                  className="flex h-20 w-16 items-center justify-center rounded-md bg-[#6b4ef2] text-4xl font-bold text-[#00ffff] shadow-lg sm:h-24 sm:w-20 sm:text-5xl"
                >
                  {digit}
                </div>
              ))}
          </div>
          <span className="text-sm font-medium text-[#00ffff] sm:text-base">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
