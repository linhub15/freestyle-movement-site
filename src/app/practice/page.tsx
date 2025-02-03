import { Container } from "@/components/ui/Container";
import { Hr } from "@/components/ui/Hr";
import { Stripe } from "@/components/widgets/Stripe";
import { PLACES } from "@/data/places";
import { ETransferInfo } from "../learn/components/ETransferInfo";
import PracticeSpots from "./PracticeSpots";

export default function Memberships() {
  return (
    <Container>
      <div>
        <div>
          <h1 className="text-3xl text-zinc-300 tracking-tight">
            Practice Sessions
          </h1>
          <p className="max-w-lg py-8 text-zinc-400">
            Are you looking to practice breaking in Edmonton? Here are some of
            our open practice spots for all ages and skill levels.
          </p>
        </div>

        <div className="grid gap-x-2 gap-y-16 py-8 lg:grid-cols-2">
          <PracticeSpots />

          <div className="px-14">
            <ETransferInfo amount="drop-in $10" />
          </div>

          <div className="w-full">
            <div className="px-14">
              <a
                className="block w-full rounded-md bg-gray-700 py-3 text-center font-medium text-white shadow-xs hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
                href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
              >
                Subscription Login
              </a>

              <p className="py-2 text-center text-sm text-zinc-400">
                View and manage subscription with Stripe. For issues with
                memberships{" "}
                <a
                  className="underline"
                  href="mailto:hubert@freestylemovement.ca"
                >
                  email Hubert
                </a>
                .
              </p>
            </div>

            <div className="px-14">
              <Hr className="my-8" />
            </div>

            <Stripe
              pricingTableId="prctbl_1OJmUqJ1kSEluvIzLYyAqLOG"
              publishableKey="pk_live_51OJll2J1kSEluvIzvRDs6akU2WNo5RQ2xUNd5MQ92CAyA4J7CpOTdFm15g4jqoKPm9ip9hc9CR3KTXv0CBEVFa1I00VKExIAPZ"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-bold text-2xl leading-10 tracking-tight">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-7" />
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                <div>
                  <dt className="font-semibold text-base text-zinc-300 leading-7">
                    Do I need a membership to attend practice sessions?
                  </dt>
                  <dd className="mt-2 text-base text-zinc-400 leading-7">
                    No, the practice sessions are open for everyone at all skill
                    levels. Drop-in price is $10 per session. We also offer a
                    10-session punch card for $75.{" "}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-base text-zinc-300 leading-7">
                    How do I view and manage my membership?
                  </dt>
                  <dd className="mt-2 text-base text-zinc-400 leading-7">
                    You can manage your membership by logging in to Stripe with
                    the email you used for your subscription. Here you can view
                    your payment history, and cancel your subscription.{" "}
                    <a
                      className="font-semibold text-indigo-500 hover:text-indigo-400"
                      href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
                    >
                      Manage my membership
                    </a>
                    .
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-base text-zinc-300 leading-7">
                    Which session locations are included in the membership?
                  </dt>
                  <dd className="mt-2 text-base text-zinc-400 leading-7">
                    <p>
                      Monday{" "}
                      <a className="underline" href={PLACES.aldergrove.mapUrl}>
                        {PLACES.aldergrove.name}
                      </a>{" "}
                      session, Tuesday{" "}
                      <a className="underline" href={PLACES.brookview.mapUrl}>
                        {PLACES.brookview.name}
                      </a>{" "}
                      session, and Friday at{" "}
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/qEE9yfbEuzzS6THi9"
                      >
                        The Code YEG
                      </a>
                      .
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
