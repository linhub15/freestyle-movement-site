import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";
import { Leadership } from "./Leadership";
import { Team } from "./Team";

export const metadata: Metadata = {
  title: "About | Freestyle Movement",
  description: "About Freestyle Movement",
};

export default function AboutPage() {
  return (
    <>
      <Container>
        <h1 className="text-3xl text-zinc-300 tracking-tight">
          What are we about?
        </h1>
      </Container>

      <Team />

      <Leadership />
    </>
  );
}
