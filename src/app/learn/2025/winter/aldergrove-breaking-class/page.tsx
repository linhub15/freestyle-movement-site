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
            term="Ralphy Miracle"
            details="ralphymiracle1@gmail.com"
          />
        </DescriptionList>

        <p className="py-4 text-zinc-400">
          Aldergrove youth breaking classes are taught by Ralphy and run from
          January to April 2025.
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
                term="Beginners"
                details="Ages 5+"
              />

              <Description
                Icon={<CurrencyDollarIcon className="size-6" />}
                term="Drop-in"
                details="Free"
              />
            </DescriptionList>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-10">
            <ContentCard
              className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
              title="2025 Winter Schedule (Mondays)"
            >
              <ul>
                <li>Jan 6, 13, 20, 27</li>
                <li>
                  Feb 3, 10, <NoClass reason="Family Day">17</NoClass>, 24
                </li>
                <li>Mar 3, 10, 17, 24, 31</li>
                <li>
                  Apr 7, 14, <NoClass reason="Easter">21</NoClass>, 28
                </li>
              </ul>

              <div className="pt-8 pb-4">
                <div className="rounded-lg border border-zinc-700 py-2 text-center text-zinc-300">
                  <div className="text-sm">
                    <span>
                      Donation of any amount would help support our programs
                    </span>
                  </div>
                  <div>e-Transfer pay@freestylemovement.ca</div>
                </div>
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Intro to Breaking with Ralphy is a 30 minute class where your
                  kids will learn the Foundations of Breaking through{" "}
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
                <li>Jan 6, 13, 20, 27</li>
                <li>
                  Feb 3, 10, <NoClass reason="Family Day">17</NoClass>, 24
                </li>
                <li>Mar 3, 10, 17, 24, 31</li>
                <li>
                  Apr 7, 14, <NoClass reason="Easter">21</NoClass>, 28
                </li>
              </ul>

              <div className="pt-8 pb-4">
                <StripePayButton
                  href="https://buy.stripe.com/8wM28MfA3cZc8tGdQY"
                  action="Register for"
                  amount="$240"
                />
                <div className="py-2 text-center text-sm text-zinc-300">OR</div>
                <ETransferInfo amount="$240" />
              </div>
            </ContentCard>

            <ContentCard className="py-2" title="About the class">
              <div className="space-y-2 text-zinc-300">
                <p>
                  Beginner Breaking Ralphy is 1 hour class every Monday where
                  your kids will{" "}
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
