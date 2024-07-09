import { Container } from "@/components/ui/Container";
import type { StaticImageData } from "next/image";

type Member = {
  name: string;
  image?: StaticImageData;
  roles: string;
};

const members: Member[] = [
  {
    name: "Kevin Carreon",
    roles: "DJ",
  },
  {
    name: "Sarah Trawick",
    roles: "Dance Instructor, Event Planner",
  },
  {
    name: "Phil De Castro",
    roles: "Graphic Designer, Videographer",
  },
  {
    name: "Teio Suyal",
    roles: "Emcee",
  },
  {
    name: "Sion Kim",
    roles: "Event Planner, Dance Instructor, Photographer",
  },
  {
    name: "Ralphy Miracle",
    roles: "Emcee",
  },
  {
    name: "Randall Liew",
    roles: "DJ",
  },
  {
    name: "Gerry Dai",
    roles: "Dance Instructor",
  },
  {
    name: "Chris Shabbits",
    roles: "Event Planner",
  },
  {
    name: "Sabine Shabbits",
    roles: "Event Planner, Grant Writer",
  },
  {
    name: "Kit Dohaylo",
    roles: "Dance Instructor",
  },
  {
    name: "Paul Porras",
    roles: "Graphic Designer",
  },
];

export function Team() {
  return (
    <Container>
      <div className="mt-16">
        <h2 className="py-4 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
          Recognizing our community
        </h2>
        <p className="max-w-2xl text-zinc-400">
          We'd like to thank these individuals for their contributions in
          helping with our goals to support Edmonton breaking and freestyle
          dance. We are always looking for help, so please reach out if you'd
          like to be help out in any way.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-3 md:grid-cols-2 md:gap-12">
        {members.map((item) => (
          <div key={item.name}>
            <h3 className="text-xl text-zinc-300 leading-8 tracking-tight">
              {item.name}
            </h3>
            <p className="font-light text-zinc-400 leading-7">{item.roles}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
