import { CountUp } from "../components/CountUp";
import { ACHIEVEMENTS, TROPHY_COUNTS } from "../data/achievements";
import type { Achievement } from "../data/achievements";
import { Page } from "./Shell";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Parts";
import styles from "./Achievements.module.css";

function Row({
  item,
  index,
}: {
  readonly item: Achievement;
  readonly index: number;
}) {
  return (
    <Reveal as="li" delay={index * 60} className={styles.row}>
      <div className={styles.rowBody}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.detail}>{item.detail}</p>
      </div>
      <span className={styles.when}>{item.when}</span>
    </Reveal>
  );
}

export default function Achievements() {
  return (
    <Page>
      <section className={styles.section}>
        <SectionHeading
          title="Achievements"
          meta={`${ACHIEVEMENTS.length} total`}
        />

        <dl className={styles.tally}>
          {TROPHY_COUNTS.map((count) => (
            <div key={count.label} className={styles.cell}>
              <dt className={styles.cellLabel}>{count.label}</dt>
              <dd className={styles.cellValue}>
                <CountUp value={count.value} />
              </dd>
            </div>
          ))}
        </dl>

        <ol className={styles.list}>
          {ACHIEVEMENTS.map((item, index) => (
            <Row key={item.id} item={item} index={index} />
          ))}
        </ol>
      </section>
    </Page>
  );
}
