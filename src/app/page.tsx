import Image from "next/image";

import { Container } from "../components/Container";
import LinkTree from "../components/LinkTree";
import logo from "../images/logo.png";

export default function Home() {
  return (
    <>
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <Image
            className="mx-auto w-48 invert"
            src={logo}
            alt="Freestyle Movement"
          />
          <h1 className="text-center font-bold text-4xl text-zinc-100 tracking-tight md:text-5xl">
            Freestyle Movement
          </h1>

          <p className="py-8 text-base text-zinc-400 ">
            Freestyle Movement is an Edmonton non-profit that creates
            opportunities for bboys, bgirls, choreographers and freestyle
            dancers to grow. We teach classes, organize competitions and run
            regular open practice sessions.
          </p>

          <div className="flex flex-col items-center gap-6">
            <LinkTree
              links={[
                {
                  title: "Unrivaled 2024 Video Playlist",
                  href: "https://www.youtube.com/playlist?list=PLcWvW4pP19bv27WCUckTDnup-lcjhP5cU",
                  enabled: true,
                  external: true,
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
