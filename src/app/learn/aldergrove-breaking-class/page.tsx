import { Container } from "@/components/ui/Container";
import {
  Description,
  DescriptionList,
  KeyValueIcon,
} from "@/components/ui/Description";
import { PLACES } from "@/data/places";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ContentCard } from "../components/ContentCard";
import { NoClass } from "../components/NoClass";

export default function Page() {
  return (
    <Container>
      <section className="mb-16 md:mb-32">
        <h1 className="font-light text-3xl">Aldergrove Breaking Classes</h1>
        <DescriptionList className="py-4">
          <Description
            Icon={<MapPinIcon className="size-6" />}
            term={PLACES.aldergrove.name}
            details={PLACES.aldergrove.address}
          />

          <Description
            Icon={<AcademicCapIcon className="size-6" />}
            term="Josh Kearney"
            details="josh@freestylemovement.ca"
          />

          <Description
            Icon={<AcademicCapIcon className="size-6" />}
            term="Ralphy Miracle"
            details="Dance Instructor"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-400">
          Aldergrove youth breaking classes are taught by Josh and Ralphy and
          run from September to December 2024.
          <br />
          Registration will open in August.
        </p>
      </section>

      <section
        className="relative overflow-hidden pb-16 pl-6 sm:pb-32 sm:pl-8"
        id="intro-to-breaking"
      >
        <div className="absolute top-2 left-0 flex size-4 items-center justify-center rounded-full">
          <div className="size-1.5 rounded-full ring-1 ring-zinc-500" />
        </div>
        <div
          className="absolute top-8 left-2 h-full w-px border-zinc-500 border-l border-dashed"
          aria-hidden="true"
        />
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl">Intro to Breaking</h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2024" value="Fall" />}
                term="Mondays"
                details="6:30 PM - 7:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginners"
                details="Kids all ages"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Drop-in"
                details="$5 per class"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2024 Fall Schedule (Mondays)"
            >
              <ul>
                <li>
                  Sep <NoClass reason="Labour Day">2</NoClass>, 9, 16, 23,{" "}
                  <NoClass reason="Truth and Reconciliation">30</NoClass>
                </li>
                <li>
                  Oct 7, <NoClass reason="Thanksgiving">14</NoClass>, 21, 28
                </li>
                <li>
                  Nov 4, <NoClass reason="Remembrance">11</NoClass>, 18, 25
                </li>
                <li>Dec 2, 9, 16</li>
              </ul>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>More info coming soon.</p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden pl-6 sm:pl-8"
        id="beginner-youth-breaking"
      >
        <div className="absolute top-2 left-0 flex size-4 items-center justify-center rounded-full">
          <div className="size-1.5 rounded-full ring-1 ring-zinc-500" />
        </div>
        <div
          className="absolute top-8 left-2 h-full w-px border-zinc-500 border-l border-dashed"
          aria-hidden="true"
        />

        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xl">Beginner Youth Breaking</h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2024" value="Fall" />}
                term="Mondays"
                details="7:00 PM - 8:30 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginner"
                details="Ages 8+"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Full semester - 12 classes"
                details="$180"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2024 Fall Schedule (Mondays)"
            >
              <ul>
                <li>
                  Sep <NoClass reason="Labour Day">2</NoClass>, 9, 16, 23,{" "}
                  <NoClass reason="Truth and Reconciliation">30</NoClass>
                </li>
                <li>
                  Oct 7, <NoClass reason="Thanksgiving">14</NoClass>, 21, 28
                </li>
                <li>
                  Nov 4, <NoClass reason="Remembrance">11</NoClass>, 18, 25
                </li>
                <li>Dec 2, 9, 16</li>
              </ul>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>More info coming soon.</p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </Container>
  );
}
