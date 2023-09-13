import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayBold } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <aside className="py-12 border border-black/30 rounded-br-[45px] rounded-tr-[45px] w-[20vw]">
      {/* Logo and Home Link */}
      <Link to={`/`} className="flex gap-x-2 xl:pl-16 lg:pl-10 pl-0 mb-16 items-center">
        <img src={logo} alt="website logo" className="md:w-12 w-8 md:h-12 h-8 lg:mx-0 mx-auto"/>
        <h1 className="text-[#333] text-2xl font-home font-bold xl:block hidden">MovieBox</h1>
      </Link>

      {/* Navigation Menu */}
      <ul className="font-detail text-xl text-[#666] font-semibold">
        {/* Home */}
        <Link to={`/`}>
        <li className="flex items-center xl:pl-16 lg:pl-10 pl-2 gap-x-4 mx-auto text-center w-full py-7">
          <span><GoHome className="text-3xl lg:block sm:hidden block ml-4" /></span>
          <span className="sm:block hidden sm:mx-0 mx-auto">Home</span>
        </li>
        </Link>

        {/* Movies */}
        <li className="flex items-center xl:pl-16 lg:pl-10 pl-2 gap-x-4 mx-auto text-center w-full py-7 bg-[#BE123C]/20 border border-r-[6px] border-[#BE123C] border-y-0 border-l-0 text-[#BE123C]">
          <span><BiCameraMovie className="text-3xl lg:block sm:hidden block ml-4" /></span>
          <span className="sm:block hidden sm:mx-0 mx-auto">Movies</span>
        </li>

        {/* TV Series */}
        <li className="flex items-center xl:pl-16 lg:pl-10 pl-2 gap-x-4 mx-auto text-center w-full py-7">
          <span><PiMonitorPlayBold className="text-3xl lg:block sm:hidden block ml-4" /></span>
          <span className="sm:block hidden sm:mx-0 mx-auto">TV Series</span>
        </li>

        {/* Upcoming */}
        <li className="flex items-center xl:pl-16 lg:pl-10 pl-2 gap-x-4 mx-auto text-center w-full py-7">
          <span><CgCalendarDates className="text-3xl lg:block sm:hidden block ml-4" /></span>
          <span className="sm:block hidden sm:mx-0 mx-auto">Upcoming</span>
        </li>
      </ul>

      {/* Play Games Section (with media query) */}
      <div className="border border-[#BE123C] rounded-[20px] bg-[#666]/10 mx-auto w-[60%] text-left px-5 pt-10 pb-4 flex-col gap-y-2 mt-10 lg:flex hidden">
        <p className="w-[85%] font-semibold text-zinc-800 text-opacity-80 text-[15px]">Play movies quizzes and earn free tickets</p>
        <p className="text-stone-500 text-xs font-medium">50k people are playing now</p>
        <button type="button" className="px-4 py-1.5 mx-auto w-full rounded-3xl border border-[#BE123C] bg-[#BE123C]/20 text-[#BE123C] text-xs font-medium">Start Playing</button>
      </div>

      {/* Logout Button */}
      <button type="button" className="w-full flex items-center justify-center mt-11 gap-x-2 text-stone-500 text-xl font-semibold">
        <span className="text-3xl lg:block sm:hidden block ml-4"><TbLogout className="w-7 h-7"/></span>
        <span className="sm:block hidden sm:mx-0 mx-auto">Log out</span>
      </button>
    </aside>
  );
}
