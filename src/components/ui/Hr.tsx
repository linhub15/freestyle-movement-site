import { cn } from "@/lib/utils/cn";

export function Hr(props: { className?: string }) {
  return (
    <hr className={cn("h-px w-full border-0 bg-zinc-600", props.className)} />
  );
}
