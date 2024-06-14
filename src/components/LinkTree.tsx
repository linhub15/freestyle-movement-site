import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

type Props = {
  links: { enabled: boolean; title: string; href: string; external?: true }[];
};

export default function LinkTree({ links }: Props) {
  return (
    <>
      {links.map(
        (item) =>
          item?.enabled && (
            <a
              className="flex w-full max-w-2xl justify-center gap-2 rounded-2xl bg-gray-700 px-8 py-4 text-center shadow-gray-800 hover:bg-gray-600 hover:shadow-gray-800 hover:shadow-lg"
              href={item.href}
              key={item.title}
            >
              {item.title}
              {item.external && <ArrowTopRightOnSquareIcon className="size-4"/>}
            </a>
          ),
      )}
    </>
  );
}
