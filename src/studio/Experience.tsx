import { EXPERIENCE } from "../data/history";
import { Page } from "./Shell";
import { SectionHeading } from "./Parts";
import { History } from "./History";

export default function Experience() {
  return (
    <Page>
      <section>
        <SectionHeading title="Experience" meta={`${EXPERIENCE.length} roles`} />
        <History entries={EXPERIENCE} />
      </section>
    </Page>
  );
}
