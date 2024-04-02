type Props = {
  links: { enabled: boolean; title: string; href: string }[]
}

export default function LinkTree({ links }: Props) {
  return (
    <>
      {links.map(
        (item, idx) =>
          item?.enabled && (
            <a
              className="flex w-full max-w-2xl justify-center gap-2 rounded-2xl bg-gray-700 px-8 py-4 text-center shadow-gray-800 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-800"
              href={item.href}
              key={idx}
            >
              {item.title}
            </a>
          ),
      )}
    </>
  )
}
