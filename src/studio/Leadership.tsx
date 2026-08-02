import { LEADERSHIP } from "../data/history";
import { Page } from "./Shell";
import { SectionHeading } from "./Parts";
import { History } from "./History";
import { usePageMeta } from "../lib/usePageMeta";
import { ROUTE_META } from "../data/meta";

export default function Leadership() {
  usePageMeta(ROUTE_META.leadership);

  return (
    <Page>
      <section>
        <SectionHeading title="Leadership" meta={`${LEADERSHIP.length} roles`} />
        <History entries={LEADERSHIP} />
      </section>
    </Page>
  );
}
