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
import { ContentCard } from "../../../components/ContentCard";
import { ETransferInfo } from "../../../components/ETransferInfo";
import { NoClass } from "../../../components/NoClass";
import { StripePayButton } from "../../../components/StripePayButton";

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
            term="Renand Fulgueras"
            details="renand@freestylemovement.ca"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-400">
          Aldergrove youth breaking classes are taught by Renand and run from
          May to August 2025.
        </p>
        <p>
          Register through the payment link below and include the dancer's name.
          Or send e-transfer to pay@freestylemovement.ca and include the
          dancer's name in the e-transfer message.
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
                Icon={<KeyValueIcon label="2025" value="Mon" />}
                term="Mondays"
                details="6:30 PM - 7:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginner"
                details="Ages 8+"
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
              title="2025 Spring/Summer Schedule (Mondays)"
            >
              <ul>
                <li>
                  May 5, 12, <NoClass reason="Victoria Day">19</NoClass>, 26
                </li>
                <li>Jun 2, 9, 16, 23, 30</li>
                <li>Jul 7, 14, 21, 28</li>
                <li>
                  Aug <NoClass reason="Heritage Day">4</NoClass>, 11, 18, 25
                </li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/4gw8xagE7bV8fW83ci"
                  action="Pay with Credit Card"
                  amount="$5"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$5" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Intro to Breaking with Renand is a 30-minute foundational
                  class where students will learn the basics of breaking through
                  repetition, conditioning, and simple choreography. This class
                  is designed to build muscle memory, improve coordination, and
                  support the development of gross motor skills in a fun and
                  engaging environment.
                </p>
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
            <h2 className="text-xl">
              Beginner Youth Breaking - Registered class
            </h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2025" value="Mon" />}
                term="Mondays"
                details="7:00 PM - 8:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginner"
                details="Ages 8+"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Full semester - 15 classes"
                details="$240"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2025 Winter Schedule (Mondays)"
            >
              <ul>
                <li>
                  May 5, 12, <NoClass reason="Victoria Day">19</NoClass>, 26
                </li>
                <li>Jun 2, 9, 16, 23, 30</li>
                <li>Jul 7, 14, 21, 28</li>
                <li>
                  Aug <NoClass reason="Heritage Day">4</NoClass>, 11, 18, 25
                </li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/8wM28MfA3cZc8tGdQY"
                  action="Pay with Credit Card"
                  amount="$240"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$240" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Beginner Breaking with Renand is a 1-hour class designed to
                  help students expand their foundational knowledge of breaking.
                  Through fun and engaging lessons, students will build and
                  refine their dance vocabulary, with each class focusing on a
                  specific aspect of breaking. Each class will build on the
                  previous one, allowing students to progress steadily
                  throughout the term. Students will also learn and practice
                  choreography, giving them a structured approach to movement
                  and boosting their confidence. Every class wraps up with an
                  inclusive dance cypher or battle, giving students the
                  opportunity to apply what they've learned in a supportive and
                  creative space.
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </Container>
  );
}
