import { useAppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { darkMode } = useAppContext();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default App;