import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

/* One rule travels between the links instead of a separate marker blinking on
   and off under each one. The travel is a pull-back toy car: the rule loads a
   few pixels against the direction it is about to go, then launches and settles
   just past the mark. Every number here is deliberately small — five pixels of
   load, six percent of squash — so it reads as weight, not as an effect. */
const PULL_PX = 5;
const LOAD_MS = 130;
const LAUNCH_MS = 340;

/**
 * Drives the active-route rule under the nav. Returns the two refs the header
 * has to hang on the nav element and on the rule itself.
 */
function useSlingshotIndicator() {
  const navRef = useRef<HTMLElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);
  /** Where the rule currently sits, so the next route knows where it came from. */
  const restRef = useRef<{ left: number; width: number } | null>(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const nav = navRef.current;
    const rule = ruleRef.current;
    if (!nav || !rule) return;

    // NavLink already decided which route won, so read its answer rather than
    // matching the path a second time here — a project page matches no link at
    // all, and this way that case needs no special rule.
    const active = nav.querySelector<HTMLElement>('[aria-current="page"]');
    if (!active) {
      rule.style.opacity = "0";
      restRef.current = null;
      return;
    }

    const to = { left: active.offsetLeft, width: active.offsetWidth };
    const from = restRef.current;
    restRef.current = to;

    // The resting state is plain inline style, so the rule stays where it
    // belongs whether or not the animation below ever runs.
    rule.style.opacity = "1";
    rule.style.transform = `translateX(${to.left}px)`;
    rule.style.width = `${to.width}px`;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!from || still || from.left === to.left) return;

    const direction = Math.sign(to.left - from.left);
    const loaded = from.left - direction * PULL_PX;
    const total = LOAD_MS + LAUNCH_MS;

    rule.animate(
      [
        {
          transform: `translateX(${from.left}px)`,
          width: `${from.width}px`,
          // Wind-up: slow out of the old link, quick into the loaded position.
          easing: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        {
          transform: `translateX(${loaded}px)`,
          width: `${from.width * 0.94}px`,
          offset: LOAD_MS / total,
          // Release: a hair of overshoot past the new link, then it settles.
          easing: "cubic-bezier(0.22, 1.12, 0.36, 1)",
        },
        { transform: `translateX(${to.left}px)`, width: `${to.width}px` },
      ],
      { duration: total },
    );
  }, [pathname]);

  // The links move under the rule whenever the header reflows — a resize, the
  // two-row breakpoint, a webfont landing late. Re-measure, but do not animate:
  // nobody navigated.
  useEffect(() => {
    const nav = navRef.current;
    const rule = ruleRef.current;
    if (!nav || !rule) return;

    const observer = new ResizeObserver(() => {
      const active = nav.querySelector<HTMLElement>('[aria-current="page"]');
      if (!active) return;
      restRef.current = { left: active.offsetLeft, width: active.offsetWidth };
      rule.style.transform = `translateX(${active.offsetLeft}px)`;
      rule.style.width = `${active.offsetWidth}px`;
    });
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  return { navRef, ruleRef };
}

/**
 * Flips `data-scrolled` on the header the moment the top of the document
 * leaves the viewport. Returns the ref for the header and the one for the 1px
 * sentinel that has to sit above it in the flow.
 */
function useScrolledHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const sentinel = sentinelRef.current;
    if (!header || !sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      header.dataset["scrolled"] = String(!entry?.isIntersecting);
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return { headerRef, sentinelRef };
}

function Header({ headerRef }: { readonly headerRef: RefObject<HTMLElement | null> }) {
  const { navRef, ruleRef } = useSlingshotIndicator();

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerInner}>
        <Link className={styles.wordmark} to="/">
          <span className={styles.wordmarkName}>Dev Shah</span>
          <span className={styles.wordmarkRole}>Software · Data · Product</span>
        </Link>

        <nav className={styles.nav} aria-label="Sections" ref={navRef}>
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
          <span className={styles.navRule} ref={ruleRef} aria-hidden="true" />
        </nav>

        <a
          className={styles.headerAction}
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
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
            <a
              className={styles.contactLink}
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMAIL}
            </a>
            <a
              className={styles.contactLink}
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
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
  const { headerRef, sentinelRef } = useScrolledHeader();

  return (
    <div className={styles.shell}>
      <div className={styles.sentinel} ref={sentinelRef} aria-hidden="true" />
      <Header headerRef={headerRef} />
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
