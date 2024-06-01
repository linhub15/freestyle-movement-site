export function Schedule() {
  const schedule = [
    { time: "1:00", event: "Doors open (cyphers & warmup)" },
    { time: "1:50", event: "Event starts - opening remarks" },
    { time: "2:00", event: "Prelims (showcase battles)" },
    { time: "3:00", event: "Top 8" },
    { time: "4:00", event: "Top 4" },
    { time: "4:30", event: "Finals" },
    { time: "4:45", event: "Awards & photos" },
    { time: "5:00", event: "End" },
  ];

  return (
    <div className="py-4">
      <h3 className="font-semibold text-lg">Schedule</h3>
      <p>Open styles 1v1 | Footwork 1v1 | Youth breaking 2v2.</p>
      <p>
        Your showcase rounds will determine your
        tournament bracket position. Only top 8 will advance.
      </p>

      <dl className="pl-2 py-2 space-y-0.5">
        {schedule.map(({ time, event }) => (
          <div className="flex space-x-4" key={time}>
            <dt className="">{time}</dt>
            <dd>{event}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
