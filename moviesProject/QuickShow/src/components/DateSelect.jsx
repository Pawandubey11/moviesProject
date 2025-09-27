import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const DateSelect = ({ dates = [], onBook }) => {
  const [start, setStart] = useState(0); // index of first visible date
  const visible = 4; // show 4 dates at a time
  const [selected, setSelected] = useState(null);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(dates.length - visible, s + 1));

  return (
    <div
      className="relative bg-gradient-to-r from-[#2b0f14] to-[#1a0a0d]
                    rounded-xl p-6 flex items-center justify-between
                    text-white shadow-2xl"
    >
      {/* arrows */}
      <button
        onClick={prev}
        disabled={start === 0}
        className="disabled:opacity-30"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* date list */}
      <div className="flex gap-8">
        {dates.slice(start, start + visible).map((d) => (
          <button
            key={d.day}
            onClick={() => setSelected(d.day)}
            className={`flex flex-col items-center 
                        ${
                          selected === d.day
                            ? "text-pink-400 font-bold"
                            : "text-gray-200"
                        }`}
          >
            <span className="text-lg">{d.day}</span>
            <span className="text-sm">{d.month}</span>
          </button>
        ))}
      </div>

      {/* book now */}
      <button
        onClick={() => onBook?.(selected)}
        disabled={!selected}
        className="bg-pink-600 hover:bg-pink-700 px-4 py-2
                   rounded-md font-semibold disabled:opacity-40"
      >
        Book Now
      </button>

      {/* right arrow */}
      <button
        onClick={next}
        disabled={start + visible >= dates.length}
        className="disabled:opacity-30"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default DateSelect;
