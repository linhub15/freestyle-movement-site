import { Container } from "@/components/Container";
import { Hr } from "@/components/Divider";
import Link from "next/link";
import { Suspense } from "react";
import { EventPoster } from "./_components/EventPoster";
import { Tabs } from "./_components/Tabs";

export default function Events() {
  return (
    <Container>
      <div>
        <div>
          <h1 className="text-3xl text-zinc-300 tracking-tight">Events</h1>
          <p className="py-2 text-zinc-400">
            A collection of Edmonton&apos;s{" "}
            <span className="text-zinc-300">
              classes, practices spots, and community events
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-2">
            <LinkToGoogleCalendar />
            <ICalDownloadLink />
          </div>

          <div className="w-fit py-8">
            <Link href="/events/unrivaled-2024">
              <EventPoster src="/images/unrivaled-2024/teaser-poster.png" />
            </Link>
          </div>
        </div>

        <Hr />

        <Suspense>
          <Tabs />
        </Suspense>
      </div>
    </Container>
  );
}

function ICalDownloadLink() {
  return (
    <a
      className="flex h-9 w-fit items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-1 text-sm hover:bg-blue-500"
      href="https://calendar.google.com/calendar/ical/c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382%40group.calendar.google.com/public/basic.ics"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <title>Calendar</title>
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
      className="justify-center rounded-lg border border-gray-500 px-3 py-2 text-sm hover:bg-gray-500 hover:text-black visited:text-gray-300"
      href="https://calendar.google.com/calendar/embed?src=c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382%40group.calendar.google.com&ctz=America%2FEdmonton"
    >
      📅 Google Calendar
    </a>
  );
}
