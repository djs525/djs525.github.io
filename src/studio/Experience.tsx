import { EXPERIENCE } from "../data/history";
import { Page } from "./Shell";
import { SectionHeading } from "./Parts";
import { History } from "./History";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

export default function Experience() {
  usePageMeta(ROUTE_META.experience);

  return (
    <Page>
      <section>
        <SectionHeading title="Experience" meta={`${EXPERIENCE.length} roles`} />
        <History entries={EXPERIENCE} />
      </section>
    </Page>
  );
}
