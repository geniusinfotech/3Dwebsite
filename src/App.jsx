import React from "react";
import Canvas from "./Canvas";
import data from "./data.js";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        {data.map((item, index) => (
          <div key={index}>
            {item.map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
