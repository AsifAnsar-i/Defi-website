import React from "react";
import ImgDev from "../assets/terminal.png"

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>SuperPower of Defi Developers.</h1>
          <p className="py-3">
            <span className="text-[#00d8ff]">Power of Defi Developers </span> Power <span className="text-[#00d8ff]"> of Defi Developers Power of Defi </span>
            Developers Power of Defi Developers Power of of Defi Developers Power of Defi Developers Power
            of Defi Developers  Power of Defi Developers Power of of Defi Developers Power
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
            <img className="max-w-[330px] shadow-lg shadow-cyan-500/50 text-center" src={ImgDev} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default Developers;
