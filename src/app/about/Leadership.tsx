import { Container } from "@/components/ui/Container";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import elaineHeadshot from "./images/elaine-headshot.webp";
import hubertHeadshot from "./images/hubert-headshot.jpeg";
import jeffHeadshot from "./images/jeff-headshot.jpeg";
import jinHeadshot from "./images/jin-headshot.jpeg";
import joshHeadshot from "./images/josh-headshot.jpeg";
import patriciaHeadshot from "./images/patricia-headshot.jpeg";
import pranayaHeadshot from "./images/pranaya-headshot.jpeg";

type Leader = {
  name: string;
  image?: StaticImageData;
  role: string;
  bio: string;
};

const leaders: Leader[] = [
  {
    name: "Jeff Baglinit",
    image: jeffHeadshot,
    role: "Community Leader",
    bio: "Jeff has built his reputation as a community leader in Edmonton starting from his presidency of multiple university dance clubs to organizing large provincial dance events.",
  },
  {
    name: "Jin Lee",
    image: jinHeadshot,
    role: "Community Leader",
    bio: "Jin is a respected community leader and one of the top competitive breakers in Edmonton. He has hosted numerous events and teaches breaking to the new generation.",
  },
  {
    name: "Josh Kearney",
    image: joshHeadshot,
    role: "Community Leader",
    bio: "Josh is the former co-president of the Open Styles Dance club at the University of Alberta and is now their breaking director. He has been a key part in organizing Unrivaled 2024 and is stepping up to teach classes in Edmonton.",
  },
  {
    name: "Patricia Limcangco",
    image: patriciaHeadshot,
    role: "Director",
    bio: "Patricia is a co-founder of Freestyle Movement. She built our first website, designed event posters and engaged with the community through social media and in-person",
  },
  {
    name: "Elaine Ho",
    image: elaineHeadshot,
    role: "Director",
    bio: "Elaine is a co-founder and finance executive of Freestyle Movement. She manages the books and is a key part of our annual programming.",
  },
  {
    name: "Pranaya Prajapati",
    image: pranayaHeadshot,
    role: "Director",
    bio: "Pranaya is a co-founder of Freestyle Movement. He has been a large part of organizing events and teaching classes in Edmonton. Sometimes he even picks up the mic to Emcee.",
  },
  {
    name: "Hubert Lin",
    image: hubertHeadshot,
    role: "Director",
    bio: "Hubert is a co-founder of Freestyle Movement. He helps out with event planning, practice space scheduling and website maintenance. He also teaches breaking classes.",
  },
];

export function Leadership() {
  return (
    <Container className="mt-16">
      <h2 className="py-4 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
        Our Leadership Team
      </h2>
      <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        {leaders.map((leader) => (
          <li className="flex flex-col gap-6 xl:flex-row" key={leader.name}>
            {leader.image && (
              <Image
                className="aspect-[4/5] h-52 w-full max-w-80 flex-none rounded-2xl object-cover grayscale sm:h-auto sm:w-52"
                src={leader.image}
                alt={leader.name}
                width={320}
                height={260}
              />
            )}
            <div className="flex-auto">
              <h3 className="text-xl text-zinc-300 leading-8 tracking-tight">
                {leader.name}
              </h3>
              <p className="font-light text-base text-zinc-400 leading-7">
                {leader.role}
              </p>
              <p className="mt-6 text-base text-zinc-400 leading-7">
                {leader.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
