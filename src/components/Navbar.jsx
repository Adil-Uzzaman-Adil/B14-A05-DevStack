import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left: Hamburger (mobile) + Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger — visible only on mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <img
              src="/hamburger.png"
              alt="Menu"
              className="w-7 h-7"
            />
          </button>

          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo-text.png"
              alt="Dev Stack"
              className="h-9 w-auto"
            />
          </a>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-pink-500 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-medium text-gray-700 hover:text-pink-500">
            Sign In
          </button>
          <button className="brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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