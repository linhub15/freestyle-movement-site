import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="text-2xl text-zinc-300" />,
    p: (props) => <p {...props} className="my-8 text-zinc-400 leading-7" />,
    ul: (props) => (
      <ul {...props} className="ml-4 list-disc text-zinc-400 leading-7" />
    ),
    a: (props) => <a {...props} className="text-teal-400 hover:underline" />,
    ...components,
  };
}
