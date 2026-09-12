import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
import { toast } from "react-toastify";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Failed to load technologies"))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${removed?.name} removed from stack`);
  };


  const removeAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Stack cleared");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Explore the{" "}
          <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 mb-8">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 🃏 Tech Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={addToStack}
                    isAdded={stack.some((item) => item.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 🧰 Stack Panel */}
          <StackPanel
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}