import { cn } from "@/lib/utils/cn";
import type { JSX, PropsWithChildren } from "react";

type Props = {
  term: string;
  details: string;
  /** Pass in an Icon, or  `KeyValueIcon` */
  Icon?: JSX.Element;
};

export function Description(props: Props) {
  return (
    <div className="flex gap-4">
      {props.Icon && (
        <div className="mt-1 flex size-10 flex-col items-center justify-center overflow-hidden rounded-lg border border-zinc-700 text-zinc-300">
          {props.Icon}
        </div>
      )}
      <div className="flex flex-col">
        <dt>{props.term}</dt>
        <dd className="font-light text-sm">{props.details}</dd>
      </div>
    </div>
  );
}

export function DescriptionList(
  props: { className?: string } & PropsWithChildren,
) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-12 gap-y-4 sm:gap-y-8",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

/**
 * Can be passed into `<Description Icon={<KeyValueIcon />}/>`
 * Commonly used for Month + Day of month.
 */
export function KeyValueIcon(props: { label: string; value: string }) {
  return (
    <>
      <div className="w-full bg-zinc-700 pb-0.5 text-center font-semibold text-xs uppercase">
        {props.label}
      </div>
      <div className="size-full text-center text-sm">{props.value}</div>
    </>
  );
}
