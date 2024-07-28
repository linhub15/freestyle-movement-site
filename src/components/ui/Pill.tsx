import { type VariantProps, cva } from "@/lib/utils/cva";
import type { Prettify } from "@/lib/utils/prettify";
import type { PropsWithChildren } from "react";

type Props = Prettify<PillVariants & PropsWithChildren>;

export function Pill(props: Props) {
  return (
    <span className={pillVariants({ variant: props.variant })}>
      {props.children}
    </span>
  );
}

export type PillVariants = VariantProps<typeof pillVariants>;

const pillVariants = cva({
  base: "inline-flex items-center rounded-full px-3 py-1 font-medium text-xs",
  variants: {
    variant: {
      default: "bg-zinc-600 text-zinc-200",
      success: "bg-green-700 text-green-200",
      warning: "",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});
