import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useTheme } from "./theme/ThemeProvider";

import { Arena } from "./components/Arena";
import { Nav } from "./components/Nav";
import ArcadeHome from "./pages/Home";
import ArcadeExperience from "./pages/Experience";
import ArcadeProjectDetail from "./pages/ProjectDetail";
import ArcadeLeadership from "./pages/Leadership";
import ArcadeAchievements from "./pages/Achievements";
import ArcadeAbout from "./pages/About";

import { Shell } from "./studio/Shell";
import StudioLanding from "./studio/Landing";
import StudioHome from "./studio/Home";
import StudioExperience from "./studio/Experience";
import StudioProjectDetail from "./studio/ProjectDetail";
import StudioLeadership from "./studio/Leadership";
import StudioAchievements from "./studio/Achievements";
import StudioAbout from "./studio/About";

/**
 * A router swap only exchanges components — the browser keeps the old scroll
 * position, so opening a project from the foot of the index would otherwise
 * land mid-page. Renders nothing; the effect is the whole point.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * The two worlds share these six routes and every fact behind them, and share
 * no presentation at all. Each tree names its own components explicitly rather
 * than passing a theme down, so nothing in the studio world can reach an
 * arcade module by accident. See DESIGN.md → Theme switching.
 */
/** Every studio route except the landing, which owns the whole viewport. */
function StudioShell() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}

function StudioApp() {
  return (
    <Routes>
      {/* The dial is the door: no header, no footer, nothing to scroll past. */}
      <Route path="/" element={<StudioLanding />} />
      <Route element={<StudioShell />}>
        <Route path="/projects" element={<StudioHome />} />
        <Route path="/experience" element={<StudioExperience />} />
        <Route path="/projects/:slug" element={<StudioProjectDetail />} />
        <Route path="/leadership" element={<StudioLeadership />} />
        <Route path="/achievements" element={<StudioAchievements />} />
        <Route path="/about" element={<StudioAbout />} />
        {/* Any unknown path lands on the index rather than a dead end. */}
        <Route path="*" element={<StudioHome />} />
      </Route>
    </Routes>
  );
}

function ArcadeApp() {
  return (
    <>
      <Arena />
      <Nav />
      <Routes>
        <Route path="/" element={<ArcadeHome />} />
        {/* The studio dial sends "Projects" here; the arcade calls the same
            screen the roster, and a theme switch must not drop the visitor. */}
        <Route path="/projects" element={<ArcadeHome />} />
        <Route path="/experience" element={<ArcadeExperience />} />
        <Route path="/projects/:slug" element={<ArcadeProjectDetail />} />
        <Route path="/leadership" element={<ArcadeLeadership />} />
        <Route path="/achievements" element={<ArcadeAchievements />} />
        <Route path="/about" element={<ArcadeAbout />} />
        <Route path="*" element={<ArcadeHome />} />
      </Routes>
    </>
  );
}

export default function App() {
  const { theme } = useTheme();

  return (
    <>
      {/* World-neutral: both trees render a <main id="content">, and each
          theme file says what this looks like in its own vocabulary. */}
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <ScrollToTop />
      {theme === "arcade" ? <ArcadeApp /> : <StudioApp />}
    </>
  );
}
