import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";
import styles from "./Shell.module.css";

const ROUTES = [
  { to: "/", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/leadership", label: "Leadership" },
  { to: "/achievements", label: "Achievements" },
  { to: "/about", label: "About" },
] as const;

const EMAIL = "djshah2903@gmail.com";
const GITHUB = "https://github.com/djs525";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.wordmark} to="/">
          <span className={styles.wordmarkName}>Dev Shah</span>
          <span className={styles.wordmarkRole}>Software · Data · Product</span>
        </Link>

        <nav className={styles.nav} aria-label="Sections">
          {ROUTES.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              end={route.to === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <a className={styles.headerAction} href={`mailto:${EMAIL}`}>
          Email me
        </a>
      </div>
    </header>
  );
}

/**
 * The arcade invitation. It sits at the very bottom of every page on purpose:
 * the professional read gets the whole surface first, and the second world is
 * offered only once there is nothing left to read.
 */
function ArcadeInvite() {
  const { setTheme } = useTheme();

  return (
    <div className={styles.invite}>
      <p className={styles.inviteText}>
        <span className={styles.inviteLead}>Now the fun side.</span> The same
        four projects, rebuilt as a game roster screen.
      </p>
      <button
        type="button"
        className={styles.inviteAction}
        onClick={() => setTheme("arcade")}
      >
        Play the arcade version
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.contact}>
          <h2 className={styles.contactLead}>Get in touch</h2>
          <div className={styles.contactLinks}>
            <a className={styles.contactLink} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className={styles.contactLink} href={GITHUB}>
              github.com/djs525
            </a>
          </div>
        </div>

        <ArcadeInvite />
      </div>
    </footer>
  );
}

export function Shell({ children }: { readonly children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Header />
      <main id="content" tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

/** One route's content column, with the standard section rhythm. */
export function Page({ children }: { readonly children: ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}
