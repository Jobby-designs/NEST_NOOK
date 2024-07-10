import React from "react";
import '../index.css';

function Hero() {
  return (
    <div className="flex md:w-full mx-auto justify-center">
      <div className="object-contain items-center heroPic w-auto md:w-[100%] h-full flex flex-col justify-center content-center bg-center bg-auto bg-no-repeat  ">
        <h1 className="md:px-44 md:py-10 md:text-7xl text-xl font-semibold text-center text-white">
          Timeless Beauty for <br /> Every Home
        </h1>
        <p className="text-center font-light md:text-[30px] text-[16px] text-white  max-w-5xl">
          Discover elegant designs that elevate your living spaces, blending
          classic sophistication with modern comfort for an inviting and stylish
          home
        </p>
      </div>
    </div>
  );
}

export default Hero;
