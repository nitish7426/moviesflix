import React from "react";
import logo from "../assets/movieflix.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 px-4 py-3 border-t border-white/20">
      <img className="h-5" src={logo} alt="" />
      <p className="text-sm text-stone-400 font-medium">
        &copy; copyright @nitishmahawar
      </p>
    </footer>
  );
};

export default Footer;
