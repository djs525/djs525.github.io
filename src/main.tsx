import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeProvider";
import "@theme";
import "./styles/base.css";

// Replay the route stashed by public/404.html before the bundle existed.
const stashed = sessionStorage.getItem("redirect-path");
if (stashed) {
  sessionStorage.removeItem("redirect-path");
  if (stashed !== "/") history.replaceState(null, "", stashed);
}

const container = document.getElementById("root");
if (!container) throw new Error("#root missing from index.html");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
