import { EventCard } from "@/components/ui/EventCard";

export default function PracticeSpots() {
  return (
    <div className="space-y-8">
      <EventCard
        day="Mon"
        time="7:30-9:30 pm"
        heading="Aldergrove Session • West"
        location="8535 182 St NW, Edmonton"
        description={
          <>
            Public and open practice spot for all ages.
            <br />
            Purchase membership or $10 drop-in.
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
            Public and open practice spot for all ages.
            <br />
            Purchase Purchase membership or $10 drop-in.
          </>
        }
      />

      {/* <EventCard
        day="Wed"
        time="7:30-9:30 pm"
        heading="Ottewell Session • East"
        location="9435 73 St NW, Edmonton"
        description={
          <>
            Public and open practice spot for all ages.
            <br />
                        Purchase membership or $10 drop-in.

          </>
        }
      /> */}

      <EventCard
        day="Fri"
        time="7-10 pm"
        heading="The Code Session • North"
        location="11602 119 St NW, Edmonton"
        description={
          <>
            Public, and open for all ages.
            <br />
            Purchase membership or $10 drop-in.
          </>
        }
      />
    </div>
  );
}
