import Image from "next/image";

import LinkTree from "@/components/LinkTree";
import { Container } from "@/components/ui/Container";
import { LumaCalendar } from "@/components/widgets/Luma";
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
            opportunities for bboys, bgirls and freestyle dancers to grow. We
            teach classes, organize competitions and run practice sessions for
            all ages and skill levels.
          </p>

          <div className="flex flex-col items-center gap-6">
            <LinkTree
              links={[
                {
                  title: "Unity in Motion (Foosh) videos",
                  href: "https://youtube.com/playlist?list=PLcWvW4pP19bvJIqIZwYDrSqNthE_v-Aan&si=a-1V8KzzxhxtVRQ6",
                  enabled: true,
                  external: true,
                },
                {
                  title: "Breakmont July 1 Videos",
                  href: "https://www.youtube.com/watch?v=k9Og6yFDBzs&list=PLcWvW4pP19bulBthPZ-NccDSxRoEoCQWf",
                  enabled: true,
                  external: true,
                },
                {
                  title: "Unrivaled 2024 Video",
                  href: "https://www.youtube.com/playlist?list=PLcWvW4pP19bv27WCUckTDnup-lcjhP5cU",
                  enabled: true,
                  external: true,
                },
              ]}
            />
          </div>

          <div className="py-6">
            <LumaCalendar />
          </div>
        </div>
      </Container>
    </>
  );
}
