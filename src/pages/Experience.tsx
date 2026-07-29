import { Banner, Screen } from "../components/Screen";
import { HistorySection } from "../components/HistorySection";
import { EXPERIENCE } from "../data/history";

export default function Experience() {
  return (
    <Screen>
      <Banner title="EXPERIENCE" count={`${EXPERIENCE.length} campaigns`} />
      <HistorySection entries={EXPERIENCE} />
    </Screen>
  );
}
