import { Container } from "../../components/Container";
import Stripe from "./Stripe";

export default function Memberships() {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl tracking-tight text-zinc-300">
            Memberships
          </h1>
          <p className="text-zinc-400">
            Prices for drop-in and recurring practice sessions
          </p>
          <p className="text-zinc-400">
            For questions or issues with payment please{" "}
            <a
              className="underline"
              href="mailto:hubert@freestylemovement.ca"
            >
              email Hubert
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="py-4 text-lg leading-5 text-zinc-300 sm:truncate sm:text-xl sm:tracking-tight">
            Already have a membership?
          </h2>

          <a
            className="w-fit h-fit flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
          >
            Manage membership
          </a>
        </div>

        <div className="py-8">
          <div className="h-[2px] bg-zinc-700 rounded-md"></div>
        </div>

        <div className="w-full">
          <Stripe />
        </div>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-7"></p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                <div>
                  <dt className="text-base font-semibold leading-7 text-zinc-300">
                    Do I need a membership to attend practice sessions?
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-zinc-400">
                    No, the practice sessions are open for everyone at all skill
                    levels. Drop-in price is $10 per session. We also offer a
                    10-session punch card for $75.{" "}
                  </dd>
                </div>
                <div>
                  <dt className="text-base font-semibold leading-7 text-zinc-300">
                    How do I view and manage my membership?
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-zinc-400">
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
                  <dt className="text-base font-semibold leading-7 text-zinc-300">
                    Which session locations are included in the membership?
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-zinc-400">
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
                    <p>
                      For detailed dates and times check the{"  "}
                      <a
                        className="font-semibold text-indigo-500 hover:text-indigo-400"
                        href="/events"
                      >
                        event calendar
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
