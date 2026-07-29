import type { ReactNode } from "react";
import styles from "./Screen.module.css";

export function Screen({ children }: { readonly children: ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

interface BannerProps {
  readonly title: string;
  readonly count: string;
}

export function Banner({ title, count }: BannerProps) {
  return (
    <div className={styles.banner}>
      <h2 className={styles.bannerTitle}>{title}</h2>
      <span className={styles.bannerCount}>{count}</span>
    </div>
  );
}
