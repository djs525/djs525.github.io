import { Route, Routes } from "react-router-dom";
import { Arena } from "./components/Arena";
import { Nav } from "./components/Nav";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Leadership from "./pages/Leadership";
import Achievements from "./pages/Achievements";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Arena />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/about" element={<About />} />
        {/* Any unknown path lands on the roster rather than a dead end. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
