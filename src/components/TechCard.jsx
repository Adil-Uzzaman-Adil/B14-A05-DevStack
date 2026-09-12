export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col">
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between mb-4">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      {/* Name + description */}
      <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 flex-1">{tech.description}</p>

      {/* Meta chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
          {tech.category}
        </span>
        <span className="text-gray-500">{tech.difficulty}</span>
        <span className="ml-auto text-yellow-500 font-semibold">
          ⭐ {tech.rating}
        </span>
      </div>

      {/* Add button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full py-2 rounded-lg font-semibold text-sm transition ${
          isAdded
            ? "bg-green-100 text-green-700 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}