import { EventCard } from "./EventCard";

export default function Classes() {
  return (
    <div className="py-12 space-y-8">
      <EventCard
        day="Mon"
        time="6:00 pm"
        heading="Beginner Breaking Aldergrove • Ages 6 - 17"
        location="8535 182 St NW, Edmonton"
        description={
          <>
            Contact{" "}
            <a className="underline" href="mailto:jin@freestylemovement.ca">
              Jin Lee
            </a>{" "}
            for registration and inquiries.
          </>
        }
      />

      <EventCard
        day="Tue"
        time="6:00 pm"
        heading="Brookview Breaking Class • Ages 11 - 17"
        location="280 Bulyea Rd NW, Edmonton"
        description={
          <>
            1-hour youth breaking class. Contact{" "}
            <a className="underline" href="mailto:hubert@freestylemovement.ca">
              Hubert Lin
            </a>{" "}
            for registration and inquiries.
            <br />
            This is an intermediate class. Beginners will need to contact Hubert
            for a trial.
          </>
        }
      />

      <EventCard
        day="Wed"
        time="6:30 pm"
        heading="Beginner Break Dance Ottewell • Ages 8 - 17"
        location="9435 73 St NW, Edmonton"
        description={
          <>
            Check out{" "}
            <a
              className="underline"
              href="https://www.streetstyles780.com/courses/beginner-break-dance-ottewell"
            >
              Street Style 780
            </a>{" "}
            for more information
          </>
        }
      />
    </div>
  );
}
