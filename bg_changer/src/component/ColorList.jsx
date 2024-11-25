import React from "react";

function ColorList({ colors = [], onClick }) {
  return (
    <div className="scrollBar overflow-x-scroll rounded-full min-[544px]:mx-auto">
      <ul className="inline-flex gap-2 rounded-full bg-white p-1 shadow-md">
        {colors?.map((color) => (
          <li key={color?.id} title={color?.color} className="size-10">
            <button
              type="button"
              className={`size-full rounded-full ${color?.shades[500]}`}
              data-id={color?.id}
              onClick={onClick}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
