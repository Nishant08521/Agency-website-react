import "./App.css";

import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Social from "./components/Social/Social";
import Mains from "./Mains/Mains";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Mains />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Social />
      <Footer />
    </>
  );
}

export default App;
