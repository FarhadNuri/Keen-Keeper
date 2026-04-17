import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  {
    label: "Home",
    path: "/",
    iconClass: "fa-regular fa-house",
  },
  {
    label: "Timeline",
    path: "/timeline",
    iconClass: "fa-regular fa-clock",
  },
  {
    label: "Stats",
    path: "/stats",
    iconClass: "fa-solid fa-chart-line",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link 
          to="/" 
          className="text-2xl font-bold text-gray-800 hover:opacity-80 transition-opacity cursor-pointer"
        >
          Keen<span className="text-[#244D3F]">Keeper</span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-gray-700 hover:bg-white sm:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        <nav className="hidden items-center gap-2 text-sm font-medium sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-2 rounded-md px-3 py-2 ${
                isActive(item.path)
                  ? "bg-[#244D3F] text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <i className={item.iconClass}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-gray-200 px-4 pb-4 pt-3 sm:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 ${
                  isActive(item.path)
                    ? "bg-[#244D3F] text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <i className={item.iconClass}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
