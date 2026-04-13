import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white h-16 border-b-2 border-gray-200">
      <h1 className="pl-15 font-bold text-3xl">
        Keen<span className="text-[#244D3F]">Keeper</span>
      </h1>
      <div className="flex gap-4 pr-15 font-semibold text-xl">
        <Link to="/">
          <i class="fa-regular fa-house"></i> Home
        </Link>
        <Link to="/">
          <i class="fa-regular fa-clock"></i> Timeline
        </Link>
        <Link to="/">
          <i class="fa-solid fa-chart-line"></i> Stats
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
