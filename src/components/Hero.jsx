export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Text */}
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build Your Ideal <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="brand-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Explore Technologies
          </a>
          <button className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-pink-400 hover:text-pink-500 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: Image (replace with your own) */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
          alt="Dev Stack illustration"
          className="w-72 md:w-96 drop-shadow-xl"
        />
      </div>
    </section>
  );
}