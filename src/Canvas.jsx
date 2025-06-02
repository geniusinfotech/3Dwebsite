import React, { use, useEffect, useRef } from "react";
import canvasimages from "./canvasimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = React.useState({ value: startIndex });

  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1, // infinite loop
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  }, []); // empty dependency to avoid retriggering

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasimages[index.value];
    img.onload = () => {
      canvas.width = img.offsetWidth * scale;
      canvas.height = img.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth +
      ctx.drawImage(img, 0, 0);
    };
  }, [index]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: `${size}px`, height: `${size}px` }}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
