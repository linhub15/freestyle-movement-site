import { Hr } from "@/components/ui/Hr";
import type { PropsWithChildren } from "react";

type Props = {
  title: string;
  className?: string;
} & PropsWithChildren;
export function ContentCard(props: Props) {
  return (
    <div className={props.className}>
      <h3 className="text-sm text-zinc-300">{props.title}</h3>
      <Hr className="mt-2 mb-4" />
      {props.children}
    </div>
  );
}
