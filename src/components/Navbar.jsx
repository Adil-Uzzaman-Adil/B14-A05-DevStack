import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Hamburger (mobile) + Brand */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full brand-gradient flex items-center justify-center text-white font-bold text-sm">
              DS
            </div>
            <span className="text-lg font-bold brand-gradient-text">
              Dev Stack
            </span>
          </div>
        </div>

        {/* Center: Links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-pink-500 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-medium text-gray-700 hover:text-pink-500">
            Sign In
          </button>
          <button className="brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-gray-700 font-medium"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}