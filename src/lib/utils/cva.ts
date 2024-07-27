import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export type { VariantProps } from "cva";

export const { cva, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
