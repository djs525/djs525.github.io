import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_THEME,
  THEME_FONTS,
  THEME_ICONS,
  THEME_STORAGE_KEY,
  readStoredTheme,
  type Theme,
} from "./theme";

interface ThemeState {
  readonly theme: Theme;
  readonly setTheme: (next: Theme) => void;
}

const ThemeContext = createContext<ThemeState | null>(null);

const FONT_LINK_ID = "theme-fonts";
const ICON_LINK_ID = "favicon";

function swapLink(id: string, href: string) {
  const link = document.getElementById(id);
  if (link instanceof HTMLLinkElement && link.href !== href) link.href = href;
}

/**
 * Owns which world is on screen.
 *
 * The attribute on <html> is the single switch: it selects the token set, and
 * App reads the same value to pick which component tree to render. The two
 * trees share data and hooks and share no presentation, which is what keeps
 * the studio world free of arcade material.
 */
export function ThemeProvider({ children }: { readonly children: ReactNode }) {
  // Initialised from storage rather than from the constant, so the first
  // render already matches what the boot script painted.
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === "undefined" ? DEFAULT_THEME : readStoredTheme(),
  );

  useEffect(() => {
    document.documentElement.dataset["theme"] = theme;
    swapLink(FONT_LINK_ID, THEME_FONTS[theme]);
    swapLink(ICON_LINK_ID, THEME_ICONS[theme]);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // A browser that refuses storage still gets the switch for this visit.
    }
  }, []);

  const value = useMemo<ThemeState>(
    () => ({ theme, setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeState {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside <ThemeProvider>");
  return value;
}
