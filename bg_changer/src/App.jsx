import React, { useState, useEffect } from "react";
import { bgColorClasses } from "./data/colors";
import { ColorList, ShadesColors } from "./component";

function App() {
  const [id, setId] = useState(6);
  const [shade, setShade] = useState(400);
  const [color, setColor] = useState(bgColorClasses?.find((c) => c?.id === id));

  useEffect(() => {
    setColor(bgColorClasses?.find((c) => c?.id === id));
  }, [id]);

  return (
    <>
      <main
        className={`h-dvh w-full transition-colors duration-500 ${color.shades[shade]}`}
      >
        <section
          aria-label="colors"
          className="fixed inset-x-0 bottom-4 flex flex-col gap-4 p-2"
        >
          <ShadesColors
            color={color}
            onClick={(e) => {
              setShade(parseInt(e.target.getAttribute("data-shade")));
            }}
          />
          <ColorList
            colors={bgColorClasses}
            onClick={(e) => {
              setId(parseInt(e.target.getAttribute("data-id")));
            }}
          />
        </section>
      </main>
    </>
  );
}

export default App;
