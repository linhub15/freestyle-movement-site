import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";
import { Leadership } from "./Leadership";
import { Team } from "./Team";

export const metadata: Metadata = {
  title: "About",
  description: "Our team at Freestyle Movement",
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <h1 className="text-3xl text-zinc-300 tracking-tight">
          What are we about?
        </h1>

        <div className="max-w-2xl space-y-8 py-4 text-zinc-400">
          <p>
            Freestyle Movement is about enabling the local breaking and
            freestyle dance community to grow and thrive. Our founding
            objectives are based on three key pillars. Teaching dance classes,
            hosting dance events, and providing practice space.
          </p>

          <p>
            We are a registered non-profit private company founded in August 26,
            2016. Since then we have taught hundreds of hours of dance class,
            hosted events annualy and provided consistent practice space. All of
            our profits go into supporting our three key pillars to build the
            community.
          </p>
        </div>
      </Container>

      <Team />

      <Leadership />
    </>
  );
}
