import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { AnimatedTimelineItem } from "./AnimatedTimelineItem";

type Event = {
  year?: number;
  dateStart: string | null;
  dateEnd: string | null;
  name: string;
  types: string[];
  venue: string | null;
  municipality: string;
  organizers?: string[];
  collaborators?: string[];
  sources: string[];
  image?: { src: string; href: string };
};

function formatSingleDate(date: string) {
  if (/^\d{4}-\d{2}$/.test(date)) {
    return new Intl.DateTimeFormat("en-CA", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}-01T00:00:00Z`));
  }

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function formatDate(event: Event) {
  if (!event.dateStart) return String(event.year);
  if (event.dateEnd === null) {
    return `${formatSingleDate(event.dateStart)} – ongoing`;
  }
  if (!event.dateEnd || event.dateEnd === event.dateStart) {
    return formatSingleDate(event.dateStart);
  }

  const start = new Date(`${event.dateStart}T00:00:00Z`);
  const end = new Date(`${event.dateEnd}T00:00:00Z`);

  if (start.getUTCFullYear() === end.getUTCFullYear()) {
    if (start.getUTCMonth() === end.getUTCMonth()) {
      const startWithoutYear = new Intl.DateTimeFormat("en-CA", {
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }).format(start);
      const endDay = new Intl.DateTimeFormat("en-CA", {
        day: "numeric",
        timeZone: "UTC",
      }).format(end);

      return `${startWithoutYear} – ${endDay}, ${end.getUTCFullYear()}`;
    }

    const startWithoutYear = new Intl.DateTimeFormat("en-CA", {
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }).format(start);

    return `${startWithoutYear} – ${formatSingleDate(event.dateEnd)}`;
  }

  return `${formatSingleDate(event.dateStart)} – ${formatSingleDate(event.dateEnd)}`;
}

export function EventTimeline({ events }: { events: Event[] }) {
  return (
    <ol className="relative ml-2 border-l border-zinc-700/80 sm:ml-32">
      {events.map((event, index) => {
        const source = event.sources[0];
        const organizers = event.organizers ?? [];
        const collaborators = (event.collaborators ?? []).filter(
          (collaborator) =>
            collaborator !== "Hubert Lin" &&
            !collaborator.toLowerCase().includes("community league"),
        );
        const showOrganizers = organizers.length > 0;
        const location = [event.venue, event.municipality]
          .filter(Boolean)
          .join(" · ");

        return (
          <AnimatedTimelineItem
            key={`${event.name}-${event.dateStart ?? event.year}-${index}`}
          >
            <span className="absolute top-2 -left-[5px] size-[9px] rounded-full bg-teal-400 ring-4 ring-zinc-900" />
            <time className="mb-2 block text-sm font-medium tracking-wide whitespace-nowrap text-teal-400 sm:absolute sm:right-full sm:mr-8 sm:text-right">
              {formatDate(event)}
            </time>

            <article className="overflow-hidden rounded-2xl bg-zinc-800/55 ring-1 ring-white/10 transition hover:bg-zinc-800 hover:ring-teal-400/30 sm:flex sm:items-start">
              {event.image && (
                <a
                  href={event.image.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View the original event image for ${event.name}`}
                  className="group block aspect-square overflow-hidden bg-zinc-900 sm:order-2 sm:m-5 sm:ml-0 sm:size-36 sm:shrink-0 sm:rounded-xl"
                >
                  <Image
                    src={event.image.src}
                    alt={`${event.name} event artwork`}
                    width={960}
                    height={960}
                    className="size-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </a>
              )}

              <div className="flex items-start justify-between gap-4 p-5 sm:order-1 sm:min-w-0 sm:flex-1">
                <div>
                  <p className="mb-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">
                    {event.types[0]}
                  </p>
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {event.name}
                  </h2>
                  {location && (
                    <p className="mt-1 text-sm text-zinc-400">{location}</p>
                  )}
                  {showOrganizers && (
                    <p className="mt-3 text-sm text-zinc-300">
                      <span className="text-zinc-500">Presented by </span>
                      {organizers.join(", ")}
                    </p>
                  )}
                  {collaborators.length > 0 && (
                    <p className="mt-1 text-sm text-zinc-300">
                      <span className="text-zinc-500">
                        In collaboration with{" "}
                      </span>
                      {collaborators.join(", ")}
                    </p>
                  )}
                </div>

                {!event.image && source && (
                  <a
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source for ${event.name}`}
                    className="shrink-0 rounded-full p-2 text-zinc-400 ring-1 ring-white/10 transition hover:bg-teal-400/10 hover:text-teal-400 hover:ring-teal-400/30"
                  >
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                )}
              </div>
            </article>
          </AnimatedTimelineItem>
        );
      })}
    </ol>
  );
}
