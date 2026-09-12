import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech) => {
    if (stack.find((item) => item.id === tech.id)) {
      toast.warn("Already added!");
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const removeFromStack = (id) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Removed from stack");
  };

  const clearStack = () => {
    setStack([]);
    toast.error("Stack cleared!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex flex-col md:flex-row p-6 gap-6 flex-grow">
        {loading ? (
          <p className="text-center w-full">Loading technologies...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  addToStack={addToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>
            <StackPanel
              stack={stack}
              removeFromStack={removeFromStack}
              clearStack={clearStack}
            />
          </>
        )}
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
