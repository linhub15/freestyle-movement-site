import {
  AcademicCapIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Description, DescriptionList } from "@/components/ui/Description";
import { PLACES } from "@/data/places";
import { ContentCard } from "../../../components/ContentCard";

export const metadata: Metadata = {
  title: "Brookview breaking class — Fall 2026",
  description:
    "Tuesday breaking classes at Brookview Community League in Edmonton return in fall 2026.",
};

export default function Page() {
  return (
    <Container>
      <section className="mb-16">
        <h1 className="text-3xl font-light">Brookview Breaking Class</h1>
        <p className="font-extralight">Fall 2026</p>

        <DescriptionList className="py-4">
          <Description
            Icon={<MapPinIcon className="size-6" />}
            term={PLACES.brookview.name}
            details={PLACES.brookview.address}
          />

          <Description
            Icon={<CalendarDaysIcon className="size-6" />}
            term="Tuesdays"
            details="Dates and time to be announced"
          />

          <Description
            Icon={<AcademicCapIcon className="size-6" />}
            term="Hubert Lin"
            details="hubert@freestylemovement.ca"
          />
        </DescriptionList>
      </section>

      <ContentCard
        className="max-w-2xl rounded-lg bg-zinc-800 px-4 py-2"
        title="Fall 2026 schedule"
      >
        <p className="text-zinc-300">
          We are still arranging the fall dates. The full schedule and
          registration details will be posted here soon.
        </p>
      </ContentCard>
    </Container>
  );
}
