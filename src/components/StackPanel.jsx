export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sticky top-24">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <p className="text-sm text-gray-500 mb-4">
          {stack.length} Technology Selected
        </p>

        {/* Empty state */}
        {stack.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm border-2 border-dashed rounded-xl">
            Your stack is empty. <br />
            Add technologies to get started.
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100"
              >
                <img src={item.icon} alt={item.name} className="w-7 h-7" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 text-lg leading-none"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Remove All */}
        <button
          onClick={onRemoveAll}
          disabled={stack.length === 0}
          className={`mt-5 w-full py-2 rounded-lg text-sm font-semibold border-2 transition ${
            stack.length === 0
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-red-200 text-red-500 hover:bg-red-50"
          }`}
        >
          Remove All
        </button>
      </div>
    </aside>
  );
}