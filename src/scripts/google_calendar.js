/**
 * @typedef {Object} GoogleCalendar
 * @property {string} summary
 * @property {string} description
 * @property {GoogleCalendarEvent[]} items
 */

/**
 * @typedef {Object} GoogleCalendarEvent
 * @property {string} summary
 * @property {string} description
 * @property {string} location
 * @property {Instant} start
 * @property {Instant} end
 */

/**
 * @typedef {Object} Instant
 * @property {string} dateTime
 */

/**
 * @typedef {Object} Event
 * @property {string} summary
 * @property {string} description
 * @property {string} location
 * @property {Date} start
 * @property {Date} end
 */

/**
 * @param {string} calendar_id
 */
// deno-lint-ignore no-unused-vars
async function init_calendar(calendar_id) {
  const url = buildUrl(calendar_id);
  const response = await fetch(url);

  /** @type {GoogleCalendar} */
  const json = await response.json();

  const sorted = json.items.sort((a, b) => {
    const aDate = new Date(a.start.dateTime);
    const bDate = new Date(b.start.dateTime);
    return aDate - bDate;
  });

  /** @type {Event} */
  const events = sorted.map((e) => ({
    summary: e.summary,
    description: e.description,
    location: e.location,
    start: new Date(e?.start.dateTime),
    end: new Date(e?.end.dateTime),
  }));

  const groupedByDate = groupByDate(events);
  for (const key of Object.keys(groupedByDate)) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("p-4", "border-white", "border-2");
    const timeElement = document.createElement("time");
    timeElement.classList.add(
      "font-mono",
      "border-l-2",
      "border-gray-300",
      "text-gray-300",
      "pl-2",
    );
    timeElement.innerHTML = key;
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("flex", "flex-col", "gap-4", "py-4");

    for (const div of groupedByDate[key].map(buildEvent)) {
      eventDiv.appendChild(div);
    }

    dateDiv.appendChild(timeElement);
    dateDiv.appendChild(eventDiv);
    document.querySelector(".event-list").appendChild(dateDiv);
  }
}

function buildUrl(calendar_id) {
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
    maxResults: maxResults,
    singleEvents: true,
    timeZone: timeZone,
    timeMin: timeMin,
    timeMax: timeMax,
    key: key,
  }).toString();
  return url;
}

/**
 * @param {Event[]} events
 * @returns {Object.<string, Event[]>}
 */
function groupByDate(events) {
  const result = events.reduce((acc, event) => {
    const date = maskDate(event.start);

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(event);

    return acc;
  }, {});
  return result;
}

/**
 * @param {Event} event
 */
function buildEvent(event) {
  const start = event.start;
  const end = event.end;

  const div = document.createElement("div");
  const html = /*html*/`
    <div class="text-lg font-bold inline">${event.summary}</div>
    <div class="font-mono text-sm">
      <div>${maskTime(start)}-${maskTime(end)} • ${maskLocation(event.location)}
      <pre class="py-4 leading-6 text-slate-700 whitespace-pre-wrap">${event.description}</pre>
    </div>
  </div>
  `;
  div.innerHTML = html.trim();
  return div;
}

/**
 * @param {Date} date
 * @returns
 */
function maskDate(date) {
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

/**
 * @param {Date} date
 * @returns
 */
function maskTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours -= 12;
  }

  const formattedTime = `${hours}${minutes > 0 ? `:${minutes}` : ""}${period}`;

  return formattedTime;
}

/**
 * @param {string} location
 * @returns
 */
function maskLocation(location) {
  return location.split(",")[0];
}
