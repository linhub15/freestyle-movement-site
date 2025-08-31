import { NoClass } from "@/app/learn/components/NoClass";
import { Container } from "@/components/ui/Container";
import {
  Description,
  DescriptionList,
  KeyValueIcon,
} from "@/components/ui/Description";
import { Stripe } from "@/components/widgets/Stripe";
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
      <div className="space-y-16 md:space-y-32">
        <section>
          <h1 className="font-light text-3xl">The Code Breaking Classes</h1>
          <p className="font-extralight">Fall 2025 semester</p>
          <DescriptionList className="py-4">
            <Description
              Icon={<MapPinIcon className="size-6" />}
              term={PLACES.thecode.name}
              details={PLACES.thecode.address}
            />

            <Description
              Icon={<AcademicCapIcon className="size-6" />}
              term="Renand Fulgueras"
              details="renand@freestylemovement.ca"
            />
          </DescriptionList>

          <p className="py-4 text-zinc-300">
            Classes begin in September 2025 and run to December 2025.
          </p>
          <p>
            Register through the payment link below and include the dancer's
            name. Or send e-transfer to pay@freestylemovement.ca and include the
            dancer's name in the e-transfer message.
          </p>
        </section>

        <section>
          <Stripe
            pricingTableId="prctbl_1S1yz4J1kSEluvIzqxKhoU77"
            publishableKey="pk_live_51OJll2J1kSEluvIzvRDs6akU2WNo5RQ2xUNd5MQ92CAyA4J7CpOTdFm15g4jqoKPm9ip9hc9CR3KTXv0CBEVFa1I00VKExIAPZ"
          />
        </section>

        <section
          className="relative overflow-hidden pl-6 sm:pl-8"
          id="youth-beginner-breaking"
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
              <h2 className="text-xl">Youth Beginner Breaking Class</h2>
              <DescriptionList>
                <Description
                  Icon={<KeyValueIcon label="2025" value="Fri" />}
                  term="Fridays"
                  details="7:00 PM - 8:00 PM"
                />

                <Description
                  Icon={<CheckBadgeIcon className="size-6" />}
                  term="Beginner"
                  details="Ages 10+"
                />

                <Description
                  Icon={<CurrencyDollarIcon className="size-6" />}
                  term="Drop-in rate"
                  details="$20"
                />

                <Description
                  Icon={<CurrencyDollarIcon className="size-6" />}
                  term="4-class package"
                  details="$64"
                />
              </DescriptionList>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
              <ContentCard
                className="h-fit rounded-lg bg-zinc-800 px-4 py-2"
                title="2025 Fall Schedule (Fridays)"
              >
                <ul>
                  <li>Sep 12, 19, 26</li>
                  <li>
                    Oct 3, 10, 17, 24, <NoClass reason="Halloween">31</NoClass>
                  </li>
                  <li>Nov 7, 14, 21, 28</li>
                  <li>Dec 5, 12</li>
                </ul>

                <div className="pt-8 pb-4">
                  <ETransferInfo amount="" />
                </div>
              </ContentCard>

              <ContentCard className="py-2" title="About the class">
                <div className="space-y-2 text-zinc-300">
                  <p>
                    This class is for complete beginners to learn the basics of
                    breaking.
                  </p>
                  <p>
                    We will focus on building foundation movements such as
                    Toprock, footwork, freezes and basic power moves.
                  </p>
                  <p>
                    We also learn about musicality, form, freestyling and
                    battling.
                  </p>
                </div>
              </ContentCard>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
