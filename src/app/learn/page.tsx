import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { classes, type DanceClass } from "./class.data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function LearnPage() {
  return (
    <Container>
      <div className="flex justify-between">
        <h1 className="text-3xl text-zinc-300 tracking-tight">Learn</h1>
      </div>

      <div className="py-12">
        <h2 className="py-8 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
          Freestyle Movement Classes
        </h2>

        <div className="space-y-16">
          {classes.map((item) => (
            <div key={item.dayOfWeek}>
              <div className="mb-2 text-2xl">{item.dayOfWeek}</div>
              <div className="sm:flex">
                <div className="w-full max-w-xs">
                  <div>{item.location.name}</div>
                  <div className="text-zinc-400">{item.location.address}</div>

                  <div className="py-6">
                    {item.href && (
                      <Link href={item.href}>
                        <div className="flex w-fit items-center rounded-md bg-gray-700 px-3 py-1 text-sm hover:bg-gray-600">
                          Class Details
                          <ArrowRightIcon className="ml-1.5 inline-block size-3" />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  {item.classes.map((danceClass) => (
                    <ClassCard key={danceClass.title} {...danceClass} />
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
    </div>
  );
}
