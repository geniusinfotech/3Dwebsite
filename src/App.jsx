import React, { useEffect } from "react";
import Canvas from "./Canvas";
import data from "./data.js";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className="w-full relative min-h-screen">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>

      <div className="w-full relative min-h-screen">
        {data[2].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>


    </>
  );
};

export default App;
