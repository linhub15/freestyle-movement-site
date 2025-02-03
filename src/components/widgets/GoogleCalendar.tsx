"use client";

import { useEffect, useState } from "react";

type GoogleCalendar = {
  summary: string;
  description: string;
  items: GoogleCalendarEvent[];
};

type GoogleCalendarEvent = {
  summary: string;
  description?: string;
  location?: string;
  start: Instant;
  end: Instant;
};

type Instant = {
  dateTime?: string;
} & { date?: string };

type Event = {
  summary: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
};

type GroupedEvent = {
  date: string;
  events: Event[];
};

export default function GoogleCalendar(props: { calendarId: string }) {
  const [events, setEvents] = useState<GroupedEvent[]>([]);

  useEffect(() => {
    const load = async () => {
      const url = buildUrl(props.calendarId);
      const response = await fetch(url);
      const json = (await response.json()) as GoogleCalendar;

      const sorted = json.items.sort((a, b) => {
        const aDate = new Date(a.start.dateTime ?? a.start.date ?? "");
        const bDate = new Date(b.end.dateTime ?? b.end.date ?? "");
        return aDate.getTime() - bDate.getTime();
      });

      const events: Event[] = sorted.map((e) => ({
        summary: e.summary,
        description: e.description,
        location: e.location,
        start: new Date(e.start.dateTime ?? e.start.date ?? ""),
        end: new Date(e.end.dateTime ?? e.end.date ?? ""),
      }));

      const grouped = groupByDate(events);

      setEvents(grouped);
    };
    load();
  }, [props.calendarId]);

  return (
    <div className="event-list flex flex-col gap-8 py-8">
      {events.map((group) => (
        <div key={group.date}>
          <h2 className="inline-block select-none rounded-sm bg-gray-200 p-2 text-gray-900 text-lg">
            <time>{group.date}</time>
          </h2>
          <div className="flex flex-col gap-5 py-6">
            {group.events.map((event, idx) => (
              <Event
                event={event}
                key={event.summary.trim().replaceAll(" ", "-")}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Event({ event }: { event: Event }) {
  const maskTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    if (!minutes) return;

    if (hours > 12) {
      hours -= 12;
    }

    const formattedTime = `${hours}${
      minutes > 0 ? `:${minutes}` : ""
    }${period}`;

    return formattedTime;
  };

  const maskLocation = (location?: string) => location?.split(",")[0];
  const hasRange = maskTime(event.start) && maskTime(event.end);
  const timeRange = `${maskTime(event.start)}-${maskTime(event.end)}`;
  return (
    <div>
      <h3 className="inline font-bold">{event.summary}</h3>
      <div>
        <div className="py-1 font-mono text-gray-400 text-sm">
          {hasRange ? timeRange : "All Day"}
          {event.location && (
            <>
              {" • "}
              <a href={`https://www.google.com/maps/search/${event.location}`}>
                {maskLocation(event.location)}
              </a>
            </>
          )}
        </div>
        {event.description && (
          <pre
            className="whitespace-pre-wrap font-sans leading-6"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{
              __html: event.description,
            }}
          />
        )}
      </div>
    </div>
  );
}

function buildUrl(calendar_id: string) {
  const today = new Date();
  const maxResults = 250;
  const timeZone = "America/Edmonton";
  const timeMin = today.toISOString();
  const timeMax = new Date(today.setDate(today.getDate() + 30)).toISOString();
  const key = "AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs";
  const url = new URL(
    `https://clients6.google.com/calendar/v3/calendars/${calendar_id}/events`,
  );
  /** https://developers.google.com/calendar/api/v3/reference/events/list */
  url.search = new URLSearchParams({
    maxResults: maxResults.toString(),
    singleEvents: "true",
    timeZone: timeZone,
    timeMin: timeMin,
    timeMax: timeMax,
    key: key,
  }).toString();
  return url;
}

function groupByDate(events: Event[]) {
  console.log(events);
  const result = events.reduce(
    (acc, event) => {
      const date = maskDate(event.start);

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(event);

      return acc;
    },
    {} as { [date: string]: Event[] },
  );

  const asArray = Object.keys(result).map((date) => ({
    date: date,
    events: result[date],
  }));

  return asArray;
}

function maskDate(date: Date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const day = date.getDate();

  return `${dayOfWeek}, ${month} ${day}`;
}
