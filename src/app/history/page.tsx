import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import history from "@/data/history.json";
import { EventTimeline } from "./EventTimeline";

export const metadata: Metadata = {
  title: "Our History | Freestyle Movement",
  description:
    "Explore how Freestyle Movement has fostered Edmonton's dance community through events, classes, performances, and collaboration.",
};

export default function HistoryPage() {
  const events = history.events.sort((a, b) => {
    return b.dateStart.localeCompare(a.dateStart);
  });

  return (
    <Container>
      <div className="mx-auto max-w-3xl pt-8 pb-20 sm:pt-14">
        <header className="mb-14 sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-teal-400 uppercase">
            Since 2016
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Our History
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Since 2016, we've created events, classes, and community gatherings
            that give freestyle dancers across Edmonton more ways to learn,
            connect, and share their craft. Through collaborations with local
            artists and organizations, we helped strengthen the breaking and
            freestyle dance community and built more accessible pathways for its
            next generation.
          </p>
        </header>

        <EventTimeline events={events} />
      </div>
    </Container>
  );
}
