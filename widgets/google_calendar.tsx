/** @jsxImportSource preact */
import { useEffect, useState } from "preact/hooks";

type GoogleCalendar = {
  summary: string;
  description: string;
  items: GoogleCalendarEvent[];
};

type GoogleCalendarEvent = {
  summary: string;
  description: string;
  location: string;
  start: Instant;
  end: Instant;
};

type Instant = {
  dateTime: string;
};

type Event = {
  summary: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
};

type GroupedEvent = {
  date: string;
  events: Event[];
};

export default function GoogleCalendar(props: { calendarId: string }) {
  const [events, setEvents] = useState<GroupedEvent[]>([]);

  const load = async () => {
    const url = buildUrl(props.calendarId);
    const response = await fetch(url);
    const json = await response.json() as GoogleCalendar;

    const sorted = json.items.sort((a, b) => {
      const aDate = new Date(a.start.dateTime);
      const bDate = new Date(b.start.dateTime);
      return aDate.getTime() - bDate.getTime();
    });

    const events: Event[] = sorted.map((e) => ({
      summary: e.summary,
      description: e.description,
      location: e.location,
      start: new Date(e?.start.dateTime),
      end: new Date(e?.end.dateTime),
    }));

    const grouped = groupByDate(events);

    setEvents(grouped);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div class="event-list flex flex-col gap-8 py-8">
      {events.map((group) => (
        <div class="">
          <time class="font-mono border-l-2 border-gray-300 text-gray-300 pl-2">
            {group.date}
          </time>
          <div class="flex flex-col gap-4 py-4">
            {group.events.map((event) => <Event event={event} />)}
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

    if (hours > 12) {
      hours -= 12;
    }

    const formattedTime = `${hours}${
      minutes > 0 ? `:${minutes}` : ""
    }${period}`;

    return formattedTime;
  };

  const maskLocation = (location: string) => location.split(",")[0];

  return (
    <>
      <div class="text-lg font-bold inline">{event.summary}</div>
      <div class="font-mono text-sm">
        <div>
          {maskTime(event.start)}-{maskTime(event.end)}
          {" • "}
          {maskLocation(event.location)}
          <pre
            class="py-4 leading-6 whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: event.description,
            }}
          ></pre>
        </div>
      </div>
    </>
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
  const result = events.reduce((acc, event) => {
    const date = maskDate(event.start);

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(event);

    return acc;
  }, {} as { [date: string]: Event[] });

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
