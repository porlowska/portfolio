// components/Banner.tsx
"use Client";
import React, { useEffect } from "react";
import TextAnim from "./TextAnim";
import ImageAnim from "./ImageAnim";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-blackish flex items-center justify-center overflow-hidden relative">
      <ImageAnim />

      {/* Text Overlay */}
      <div className="relative z-10 text-center text-whiteish font-manrope opacity-100">
        <h1 className="hidden">
          Polly Orlowska - frontend development, web design
        </h1>
        <TextAnim
          text={"Polly"}
          className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold"
          slideDirection={"right"}
        />
        <TextAnim
          text="Orlowska"
          className="text-6xl md:text-8xl lg:text-9xl italic font-light"
          slideDirection={"left"}
        />
        <TextAnim
          text={[
            <span key="front-end" className="text-pink-500 font-serif italic">
              Front-end{" "}
            </span>,
            "Developer",
          ]}
          className="text-4xl md:text-6xl lg:text-8xl font-semibold"
          slideDirection={"right"}
        />
        <TextAnim
          text="& Web Designer"
          className="text-4xl md:text-6xl lg:text-9xl font-regular"
          slideDirection={"left"}
        />
      </div>
    </div>
  );
};

export default Banner;
