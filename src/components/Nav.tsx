import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const SCREENS = [
  { to: "/", label: "Roster" },
  { to: "/experience", label: "Experience" },
  { to: "/leadership", label: "Leadership" },
  { to: "/achievements", label: "Achievements" },
  { to: "/about", label: "Get to know me" },
] as const;

/** The menu bar. Each screen is a real route, so every one is linkable. */
export function Nav() {
  return (
    <nav className={styles.bar} aria-label="Screens">
      {SCREENS.map((screen) => (
        <NavLink
          key={screen.to}
          to={screen.to}
          end={screen.to === "/"}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ""}`
          }
        >
          {screen.label}
        </NavLink>
      ))}
    </nav>
  );
}
