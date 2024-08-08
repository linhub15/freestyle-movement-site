type Props = {
  href: string;
};

export function RegisterButton(props: Props) {
  return (
    <a
      className="block w-full rounded-lg bg-emerald-700 px-4 py-3 text-center transition ease-in-out hover:bg-emerald-600"
      href={props.href}
    >
      Register
    </a>
  );
}
