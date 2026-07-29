import { Banner, Screen } from "../components/Screen";
import { HistorySection } from "../components/HistorySection";
import { LEADERSHIP } from "../data/history";

export default function Leadership() {
  return (
    <Screen>
      <Banner title="LEADERSHIP" count={`${LEADERSHIP.length} posts`} />
      <HistorySection entries={LEADERSHIP} />
    </Screen>
  );
}
