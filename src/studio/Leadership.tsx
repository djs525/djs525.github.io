import { LEADERSHIP } from "../data/history";
import { Page } from "./Shell";
import { SectionHeading } from "./Parts";
import { History } from "./History";

export default function Leadership() {
  return (
    <Page>
      <section>
        <SectionHeading title="Leadership" meta={`${LEADERSHIP.length} roles`} />
        <History entries={LEADERSHIP} />
      </section>
    </Page>
  );
}
