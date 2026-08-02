import { Banner, Screen } from "../components/Screen";
import { HistorySection } from "../components/HistorySection";
import { EXPERIENCE } from "../data/history";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

export default function Experience() {
  usePageMeta(ROUTE_META.experience);

  return (
    <Screen>
      <Banner title="EXPERIENCE" count={`${EXPERIENCE.length} campaigns`} />
      <HistorySection entries={EXPERIENCE} />
    </Screen>
  );
}
