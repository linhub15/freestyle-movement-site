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
import { ETransferInfo } from "../components/ETransferInfo";
import { NoClass } from "../components/NoClass";
import { RegisterButton } from "../components/RegisterButton";
import { StripePayButton } from "../components/StripePayButton";

export default function Page() {
  return (
    <Container>
      <section className="mb-16 md:mb-32">
        <h1 className="font-light text-3xl">Brookview Breaking Classes</h1>
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
          Classes begin in September 2024 and run until December 2024.
        </p>

        <div className="max-w-sm">
          <RegisterButton href="https://forms.gle/DC34aMjXn6BibNMe8" />
        </div>
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
        <div className="space-y-12" id="intro-to-breaking">
          <div className="space-y-6">
            <h2 className="text-xl">Intro to Breaking</h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2024" value="Fall" />}
                term="Tuesdays"
                details="5:30 PM - 6:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Beginners"
                details="Ages 10 to 17"
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
              title="2024 Fall Schedule (Tuesdays)"
            >
              <ul>
                <li>Sep 3, 10, 17, 24</li>
                <li>
                  Oct 1, 8, 15, 22, <NoClass>29</NoClass>
                </li>
                <li>Nov 5, 12, 19, 26</li>
                <li>Dec 3, 10</li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/4gw8xagE7bV8fW83ci"
                  amount="$5.00"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$5.00" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  If you're new to breaking, this is the class for you! I will
                  be teaching foundation moves, and what breaking is all about.
                </p>
                <p>
                  We will learning top rock, footwork, freezes and various
                  transitions. There will be some movements with floor work but
                  no inverting.
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden pl-6 sm:pl-8"
        id="intermediate-youth-breaking"
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
            <h2 className="text-xl">Intermediate Youth Breaking</h2>
            <DescriptionList>
              <Description
                Icon={<KeyValueIcon label="2024" value="Fall" />}
                term="Tuesdays"
                details="6:00 PM - 7:00 PM"
              />

              <Description
                Icon={<CheckBadgeIcon className="size-6" />}
                term="Intermediate"
                details="Ages 10+ or with approval"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Full semester - 14 classes"
                details="$210"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2024 Fall Schedule (Tuesdays)"
            >
              <ul>
                <li>Sep 3, 10, 17, 24</li>
                <li>
                  Oct 1, 8, 15, 22, <NoClass>29</NoClass>
                </li>
                <li>Nov 5, 12, 19, 26</li>
                <li>Dec 3, 10</li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/cN2dRu0F91gu6lydQV"
                  amount="$210"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$210" />
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
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </Container>
  );
}
