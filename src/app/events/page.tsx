import { Container } from "@/components/Container";
import { Tabs } from "./_components/Tabs";

export default function Events() {
  return (
    <Container>
      <div>
        <h1 className="text-3xl tracking-tight text-zinc-300">
          Events
        </h1>
        <p className="text-zinc-400 py-2">
          A collection of{" "}
          <span className="text-zinc-300 font-medium">
            classes, practices spots, and community events
          </span>.
        </p>

        <div className="py-8">
          <div className="h-[2px] bg-zinc-700 rounded-md"></div>
        </div>

        <Tabs />
      </div>
    </Container>
  );
}

function ICalDownloadLink() {
  return (
    <a
      className="flex justify-center rounded-lg px-3 py-2 gap-2 bg-blue-600 hover:bg-blue-500 w-fit"
      href="https://calendar.google.com/calendar/ical/c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382%40group.calendar.google.com/public/basic.ics"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
      <div>Download .ics</div>
    </a>
  );
}

function LinkToGoogleCalendar() {
  return (
    <a
      className="justify-center rounded-lg px-3 py-2 border border-gray-500 hover:bg-gray-500 hover:text-black visited:text-gray-300"
      href="https://calendar.google.com/calendar/embed?src=c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382%40group.calendar.google.com&ctz=America%2FEdmonton"
    >
      📅 Gooogle Calendar
    </a>
  );
}
