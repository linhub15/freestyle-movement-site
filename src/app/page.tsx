import Image from "next/image";

import { Container } from "../components/Container";
import LinkTree from "../components/LinkTree";
import logo from "../images/logo.png";

const links = [
  {
    title: "Unrivaled 2024 (Driven Battle)",
    href: "/events/unrivaled-2024",
    enabled: true,
  },
  {
    title: "West Edmonton classes - accepting students",
    href: "https://jinhyunglee.org/dance-classes/",
    enabled: true,
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          <Image
            className="w-48 mx-auto invert"
            src={logo}
            alt="Freestyle Movement"
          />
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-center text-zinc-100">
            Freestyle Movement
          </h1>

          <p className="py-8 text-base text-zinc-400 ">
            Freestyle Movement is an Edmonton non-profit that creates
            opportunities for bboys, bgirls, choreographers and freestyle
            dancers to grow. We teach classes, organize competitions and run
            regular open practice sessions.
          </p>

          <div className="flex flex-col items-center gap-6">
            <LinkTree links={links} />
          </div>
        </div>
      </Container>
    </>
  );
}
