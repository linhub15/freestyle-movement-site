export default function ({ links, comp }) {
  return (
    <>
      {links.map((item, idx) => (
        item?.enabled && (
          <comp.link href={item.link} key={idx}>
            {item.title}
          </comp.link>
        )
      ))}
    </>
  );
}
