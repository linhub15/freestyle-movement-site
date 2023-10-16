export const layout = "navbar_layout.jsx";
export const title = "Events";

export default function ({ comp }) {
  const linkToGoogleCalendar = () => (
    <a
      class="underline hover:text-gray-200 visited:text-gray-300"
      href="https://calendar.google.com/calendar/embed?src=c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382%40group.calendar.google.com&ctz=America%2FEdmonton"
    >
      📅 Google Calendar
    </a>
  );

  return (
    <>
      <p>
        A collection of classes, practices spots, and community events
      </p>

      <p>
        Let us know if you're hosting an event, practice or class and we can add
        it to our community Calendar.
      </p>

      <div class="py-8">
        {linkToGoogleCalendar()}
        <comp.google_calendar />
        <p>To see more upcoming events check our {linkToGoogleCalendar()}</p>
      </div>
    </>
  );
}
