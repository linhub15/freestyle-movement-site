import type { ReactNode } from "react";

type Props = {
  day: string;
  time: string;
  heading: string;
  location: string;
  description: ReactNode;
};

export function EventCard(props: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-4 ring-1 ring-white/15 md:flex-row md:gap-4 md:p-8">
      <div className="flex size-fit items-center justify-center gap-2 rounded bg-zinc-300 px-4 py-1 text-zinc-800 md:size-20 md:flex-col md:gap-0 md:place-self-center md:px-0">
        <span className="font-medium md:text-xl">{props.day}</span>
        <span className="text-xs">{props.time}</span>
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="font-medium md:text-xl">{props.heading}</h3>
          <p className="text-sm text-zinc-400">{props.location}</p>
        </div>

        <p className="text-sm text-zinc-300">{props.description}</p>
      </div>
    </div>
  );
}
