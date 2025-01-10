import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Link from "next/link";
import { type DanceClass, winter2025Classes } from "./class.data";

export const metadata: Metadata = {
  title: "Edmonton breaking classes",
  description: "Beginner breaking (break dance) classes for youth in Edmonton.",
};

export default function LearnPage() {
  return (
    <Container>
      <div className="flex justify-between">
        <h1 className="text-3xl text-zinc-300 tracking-tight">
          Edmonton breaking classes
        </h1>
      </div>

      <p className="text-zinc-400">
        Winter 2025 classes go from January to April.
        <br />
        Registration opens on December 08, 2024.
      </p>

      <div className="py-12">
        <h2 className="py-8 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
          Winter 2025 Schedule
        </h2>
        <div className="space-y-16">
          {winter2025Classes.map((item) => (
            <div key={item.dayOfWeek}>
              <div className="mb-2 text-2xl">{item.dayOfWeek}</div>
              <div className="gap-x-4 sm:flex">
                <div className="w-full max-w-xs">
                  <div>{item.location.name}</div>
                  <div className="text-zinc-400">{item.location.address}</div>

                  <div className="w-fit py-6">
                    {item.href && (
                      <Link href={item.href}>
                        <div className="flex w-fit items-center rounded-md bg-gray-700 px-3 py-1 text-sm text-zinc-200 hover:bg-gray-600">
                          Class Details
                          <ArrowRightIcon className="ml-1.5 inline-block size-3" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  {item.classes.map((danceClass) => (
                    <div
                      key={danceClass.title}
                      className="relative flex overflow-hidden pb-6"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full ">
                        <div className="size-1.5 rounded-full ring-1 ring-zinc-500" />
                      </div>
                      <div
                        className="-ml-px absolute top-8 left-4 h-full border-zinc-500 border-l border-dashed"
                        aria-hidden="true"
                      />
                      <ClassCard {...danceClass} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function ClassCard(props: DanceClass) {
  return (
    <div>
      <Link href={props.href}>
        <h3 className="text-lg">{props.title}</h3>
        <div className="text-zinc-400">
          <div>{props.time}</div>
          <div className="flex gap-3 py-2">
            {props.ageRange && <Pill>{props.ageRange}</Pill>}
            {props.canRegister === true && (
              <Pill variant="success">Registration Open</Pill>
            )}
            {props.canRegister === false && <Pill>Registration Closed</Pill>}
          </div>
        </div>
      </Link>
    </div>
  );
}
