import { Banner, Screen } from "../components/Screen";
import { HistorySection } from "../components/HistorySection";
import { LEADERSHIP } from "../data/history";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

export default function Leadership() {
  usePageMeta(ROUTE_META.leadership);

  return (
    <Screen>
      <Banner title="LEADERSHIP" count={`${LEADERSHIP.length} posts`} />
      <HistorySection entries={LEADERSHIP} />
    </Screen>
  );
}
