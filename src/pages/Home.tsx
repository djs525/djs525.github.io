/**
 * DIRECTION CONTRACT — roster screen
 *
 * THESIS: A roster screen, not a portfolio. Four units, each built from the
 * same four strata, each with its own log. Refuses the résumé-as-webpage and
 * the document metaphor entirely.
 *
 * OWN-WORLD: Modern handheld-game UI. Lit arena sky, warm panels with 3px ink
 * outlines and hard unblurred offset shadows, hand-authored sprites, a heavy
 * rounded display face over a rounded UI face, type badges in
 * magenta/cyan/green, gold for action and achievement, one reserved colour for
 * genuinely live values.
 *
 * STORY: A visitor recognises the format instantly, reads four units at a
 * glance, and opens the one that interests them.
 *
 * FIRST VIEWPORT: Menu bar, then the profile plate — sprite portrait left, name
 * in display, claim, credential chips, and the primary action.
 *
 * FORM: Pixel-game roster — pinned by the user over three rolls (seeds
 * b9400214, d62d9584, 2c72463b). Staging: separate screens behind a menu bar;
 * units settle in on scroll, nothing snaps.
 */

import { Banner, Screen } from "../components/Screen";
import { PixelSprite } from "../components/PixelSprite";
import { UnitCard } from "../components/UnitCard";
import { PROJECTS } from "../data/projects";
import { SPRITE_PLAYER } from "../data/sprites";
import styles from "./Home.module.css";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

export default function Home() {
  usePageMeta(ROUTE_META.home);

  return (
    <Screen>
      <section className={styles.profile}>
        <div className={styles.avatar}>
          <PixelSprite sprite={SPRITE_PLAYER} size={160} />
        </div>

        <div>
          <h1 className={styles.name}>DEV SHAH</h1>

          <p className={styles.blurb}>
            I build products end to end. Every project here started as something
            I wanted to exist, and I built every layer of it — the interface you
            touch, the service behind it, the data underneath, and the model
            that decides.
          </p>

          <div className={styles.specRow}>
            <span className={styles.chip}>
              B.S. CS · Data Sci minor · Rutgers 2026
            </span>
            <span className={`${styles.chip} ${styles.chipGold}`}>
              GPA 3.80
            </span>
            <span className={`${styles.chip} ${styles.chipGold}`}>
              Dean&rsquo;s List ×7
            </span>
          </div>

          <div className={styles.actions}>
            <a className={styles.primary} href="mailto:djshah2903@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>

      <Banner title="ROSTER" count={`${PROJECTS.length} units`} />

      <div className={styles.roster}>
        {PROJECTS.map((project) => (
          <UnitCard key={project.slug} project={project} />
        ))}
      </div>
    </Screen>
  );
}
