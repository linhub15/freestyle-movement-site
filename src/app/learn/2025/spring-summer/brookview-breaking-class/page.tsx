import { NoClass } from "@/app/learn/components/NoClass";
import { Container } from "@/components/ui/Container";
import {
  Description,
  DescriptionList,
  KeyValueIcon,
} from "@/components/ui/Description";
import { Hr } from "@/components/ui/Hr";
import { PLACES } from "@/data/places";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ContentCard } from "../../../components/ContentCard";
import { ETransferInfo } from "../../../components/ETransferInfo";
import { StripePayButton } from "../../../components/StripePayButton";

export default function Page() {
  return (
    <Container>
      <section className="mb-16 md:mb-32">
        <h1 className="font-light text-3xl">Brookview Breaking Classes</h1>
        <p className="font-extralight">Spring & Summer 2025 semester</p>
        <DescriptionList className="py-4">
          <Description
            Icon={<MapPinIcon className="size-6" />}
            term={PLACES.brookview.name}
            details={PLACES.brookview.address}
          />

          <Description
            Icon={<AcademicCapIcon className="size-6" />}
            term="Hubert Lin"
            details="hubert@freestylemovement.ca"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-300">
          Classes begin in May 2025 and run to August 2025.
        </p>
        <p>
          Register through the payment link below and include the dancer's name.
          Or send e-transfer to pay@freestylemovement.ca and include the
          dancer's name in the e-transfer message.
        </p>
      </section>

      <section
        className="relative overflow-hidden pl-6 sm:pl-8"
        id="intermediate-breaking"
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
              Intermediate Breaking - Freestyle & Choreo
            </h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2025" value="Tue" />}
                term="Tuesdays"
                details="6:00 PM - 7:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Intermediate"
                details="Ages 10+"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Full semester - 16 classes"
                details="$256"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2025 Winter Schedule (Tuesdays)"
            >
              <ul>
                <li>May 6, 13, 20, 27</li>
                <li>Jun 3, 10, 17, 24</li>
                <li>
                  Jul <NoClass reason="Canada Day">1</NoClass>, 8, 15, 22, 29
                </li>
                <li>Aug 5, 12, 19, 26</li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/7sI5kYcnR5wKfW83cj"
                  action="Register for"
                  amount="$256"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$256" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Students in this class already have an understanding of
                  breaking foundation and are able to freestyle independantly.
                </p>
                <p>
                  In this class, we focus on developing the dancer's ability to
                  combine moves and create their own sequences called "sets".
                </p>
                <p>
                  We also, build on the existing foundation moves by increasing
                  the strength, speed and quality of movement.
                </p>
                <Hr />
                <p>
                  We will be creating a choreography to perform at West Edmonton
                  Mall for August 9, 2025
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </Container>
  );
}
