export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span className="font-bold text-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Dev Stack
        </span>
      </div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-3">
        <button className="text-gray-700">Sign In</button>
        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
