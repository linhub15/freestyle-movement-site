import { Stripe } from "@/components/widgets/Stripe";
import { Container } from "@/components/ui/Container";
import PracticeSpots from "./PracticeSpots";
import { Hr } from "@/components/ui/Divider";

export default function Memberships() {
  return (
    <Container>
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl text-zinc-300 tracking-tight">
            Practice Sessions
          </h1>
        </div>

        <div className="grid gap-x-2 gap-y-16 py-8 lg:grid-cols-2">
          <PracticeSpots />
          <div className="w-full">
            <div className="px-14">
              <a
                className="block w-full rounded-md bg-gray-700 py-3 text-center font-medium text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
                href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
              >
                Manage my membership
              </a>

              <p className="py-2 text-center text-sm text-zinc-400">
                For issues with memberships{" "}
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
              <Hr />
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
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/25Y1MXtwDDzogxh97"
                      >
                        Aldergrove Community League
                      </a>{" "}
                      session, Tuesday{" "}
                      <a
                        className="underline"
                        href="https://maps.app.goo.gl/qj14QES7gk65wWSNA"
                      >
                        Brookview Community League
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