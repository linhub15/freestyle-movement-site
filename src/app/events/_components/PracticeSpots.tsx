import Link from "next/link";
import { EventCard } from "./EventCard";

export default function PracticeSpots() {
  return (
    <div className="py-12 space-y-8">
      <EventCard
        day="Mon"
        time="7:30-9:30 pm"
        heading="Aldergrove Session • West"
        location="8535 182 St NW, Edmonton"
        description={
          <>
            Public and open practice spot for all ages and skill levels.
            <br />
            Purchase{" "}
            <Link className="underline" href="/memberships">membership</Link>
            {" "}
            or $10 drop-in.
          </>
        }
      />

      <EventCard
        day="Tue"
        time="7-9 pm"
        heading="Brookview Session • South"
        location="280 Bulyea Rd NW, Edmonton"
        description={
          <>
            Public and open practice spot for all ages and skill levels.
            <br />
            Purchase{" "}
            <Link className="underline" href="/memberships">membership</Link>
            {" "}
            or $10 drop-in.
          </>
        }
      />

      <EventCard
        day="Wed"
        time="7:30-9:30 pm"
        heading="Ottewell Session • East"
        location="9435 73 St NW, Edmonton"
        description={
          <>
            Public and open practice spot for all ages and skill levels.
            <br />
            Purchase{" "}
            <Link className="underline" href="/memberships">membership</Link>
            {" "}
            or $10 drop-in.
          </>
        }
      />

      <EventCard
        day="Fri"
        time="7-10 pm"
        heading="The Code Session • North"
        location="11602 119 St NW, Edmonton"
        description={
          <>
            The main Edmonton breaking practice spot.
            <br />
            Public, and open for all ages and skill levels.
            <br />
            Purchase{" "}
            <Link className="underline" href="/memberships">membership</Link>
            {" "}
            or $10 drop-in.
          </>
        }
      />
    </div>
  );
}
