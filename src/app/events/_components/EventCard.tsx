import { ComponentProps, ReactNode } from "react";

type Props = {
  day: string;
  time: string;
  heading: string;
  location: string;
  description: ReactNode;
};

export function EventCard(props: Props) {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 gap-2 md:gap-4 rounded-xl ring-1 ring-white/15">
      <div className="flex md:flex-col gap-2 md:gap-0 size-fit py-1 px-4 md:px-0 md:size-20 rounded text-zinc-800 bg-zinc-300 md:place-self-center items-center justify-center">
        <span className="font-medium md:text-xl">{props.day}</span>
        <span className="text-sm">{props.time}</span>
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="md:text-xl font-medium">
            {props.heading}
          </h3>
          <p className="text-sm text-zinc-400">{props.location}</p>
        </div>

        <p className="text-sm text-zinc-300">
          {props.description}
        </p>
      </div>
    </div>
  );
}
