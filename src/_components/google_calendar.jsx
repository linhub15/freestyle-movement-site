export default function () {
  const calendarId =
    "c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382@group.calendar.google.com";
  return (
    <>
      <div class="event-list flex flex-col gap-8 py-8"></div>
      <script src="/scripts/google_calendar.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            init_calendar("${calendarId}");
        `,
        }}
      />
    </>
  );
}
