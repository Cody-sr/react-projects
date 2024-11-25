import React from "react";

function ShadesColors({ color, onClick }) {
  return (
    <div className="mx-auto space-y-2 rounded-xl bg-white p-4 shadow-md">
      <h2 className="font-semibold capitalize">{color?.color} shades :</h2>
      <ul className="inline-flex gap-2 p-1">
        {Object.entries(color?.shades).map(([shadeKey, shadeValue]) => (
          <li key={shadeKey} className={`relative size-10`}>
            <button
              type="button"
              className={`group/shadeKey size-full rounded-full ${shadeValue}`}
              data-shade={shadeKey}
              onClick={onClick}
            >
              <span className="absolute top-[100%] z-10 -translate-x-1/2 rounded-full bg-white px-3 text-xs opacity-0 ring-1 ring-gray-400 transition-opacity group-hover/shadeKey:opacity-100">
                {shadeKey}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShadesColors;
