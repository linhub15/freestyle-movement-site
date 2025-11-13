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
        <h1 className="font-light text-3xl">Lymburn Breaking Classes</h1>
        <DescriptionList className="py-4">
          <Description
            Icon={<MapPinIcon className="size-6" />}
            term={PLACES.lymburn.name}
            details={PLACES.lymburn.address}
          />

          <Description
            Icon={<AcademicCapIcon className="size-6" />}
            term="Renand Fulgueras"
            details="renand@freestylemovement.ca"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-400">
          West Edmonton youth breaking classes are taught by Renand.
        </p>
        <p>
          Register through the payment link below and include the dancer's name.
          Or send e-transfer to pay@freestylemovement.ca and include the
          dancer's name in the e-transfer message.
        </p>

        <p className="pt-4">
          Pro-rated payment options available if you join after the initial
          registration. For example if there are only 3 classes left, then
          instead of paying $20 each class we can pro-rate to the $16/class
          price of $48.
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
            <h2 className="text-xl">Beginner youth breaking</h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2025" value="Mon" />}
                term="Mondays"
                details="7:00 PM - 8:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginner"
                details="Ages 10+"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Full semester - 12 classes"
                details="$192 ($16 per class)"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Drop-in"
                details="$20 per class"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2025 Fall Schedule (Mondays)"
            >
              <ul>
                <li>Sep 15, 22, 29</li>
                <li>
                  Oct 6, <NoClass>13</NoClass>, 20, 27
                </li>
                <li>Nov 3, 10, 17, <NoClass>24</NoClass></li>
                <li>Dec 1, 8</li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/7sY28sdXOfqz9O05Ti2B20a"
                  action="Pay with Credit Card"
                  amount="$192"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$192" />
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
