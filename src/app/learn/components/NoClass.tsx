import type { PropsWithChildren } from "react";

export function NoClass(props: { reason?: string } & PropsWithChildren) {
  const reason = props.reason ? `No class - ${props.reason}` : "No class";
  return (
    <span className="cursor-help text-zinc-400 line-through" title={reason}>
      {props.children}
    </span>
  );
}
