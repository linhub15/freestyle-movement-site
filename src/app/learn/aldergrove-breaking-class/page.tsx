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
            details="ralphymiracle1@gmail.com"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-400">
          Aldergrove youth breaking classes are taught by Josh and Ralphy and
          run from September to December 2024.
          <br />
        </p>

        <div className="max-w-sm">
          <RegisterButton href="https://forms.gle/mvPt1d1dr9ggU2DD9" />
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
                  Intro to Breaking with Josh and Ralphy is a 30 minute class
                  where your kids will be exposed to the Foundations of Breaking
                  through{" "}
                  <span className="font-medium">
                    Basic Breaking Conditioning
                  </span>{" "}
                  - whether that be basic workouts or breaking focused games -
                  as well as the{" "}
                  <span className="font-medium">
                    Breaking Move Fundamentals
                  </span>{" "}
                  of Toprock, Footwork, and Freezes.
                </p>
                <p>
                  After completing their time in this class, kids will have a
                  foundational understanding of the world of Breaking as well as
                  the way the different movements work to create the greater
                  dance style.
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

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/6oEbJm87BgbobFS004"
                  amount="$180"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$180" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Beginner Breaking with Josh and Ralphy is 1.5 hour class every
                  Monday where your kids will{" "}
                  <span className="font-medium">
                    Expand on their Foundational Knowledge of Breaking
                  </span>{" "}
                  and it's movements.
                </p>
                <p>
                  In this class, we will{" "}
                  <span className="font-medium">
                    Grow their Vocabulary of Breaking Moves
                  </span>{" "}
                  (Toprock, Footwork, Go-Downs, Freezes, and Power) through
                  teaching new moves, learning how to exist in group dancing
                  formats (known as Cyphers), and simulating Battle environments
                  in order to{" "}
                  <span className="font-medium">
                    Prepare them to Exist in the Greater Breaking Community
                  </span>{" "}
                  around Edmonton and the world.
                </p>
                <p>
                  By the end of their time in this class, kids will have grown
                  in their confidence to engage in different Breaking
                  environments as well as establish a strong base of Breaking
                  moves that will prepare them to continue to grow their
                  Breaking Move Dictionary.
                </p>
              </div>
            </ContentCard>
          </div>
        </div>
      </section>
    </Container>
  );
}
