import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handle = () => setNav(!nav);
  return (
    <div className="w-full h-[90px] drop-shadow-lg bg-black sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff]">Defi</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Plateforms</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] px-7 py-3 rounded-3xl">Use Defi</button>
          </ul>
        </div>
        <div className="block md:hidden" onClick={handle}>
          {!nav ? (
            <FiAlignJustify size={30} className="text-white" />
          ) : (
            <VscChromeClose size={30} className="text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center md:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Plateforms</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] px-7 py-3 rounded-3xl">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
