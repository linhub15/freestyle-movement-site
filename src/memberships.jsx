export const layout = "navbar_layout.jsx";

export default function ({ comp }) {
  return (
    <>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="w-full py-8 mx-1 text-center rounded-xl outline outline-1 outline-gray-500 bg-[#29303d]">
          <h2 class="py-4 text-xl font-semibold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
            Already have a membership?
          </h2>
          <div class="py-3">
            <a
              class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
            >
              Manage my membership
            </a>
          </div>
          <div class="px-8 text-sm py-4 text-gray-300">
            <p>
              For questions or issues with payment please{" "}
              <a class="underline" href="mailto:hubert@freestylemovement.ca">
                email Hubert
              </a>.
            </p>
          </div>
        </div>
        <div class="py-12 w-full">
          <h2 class="py-4 px-10 text-2xl font-bold leading-7 text-white text-center  sm:truncate sm:text-3xl sm:tracking-tight">
            Membership Options
          </h2>
          <comp.stripe />
        </div>
      </div>

      <div class="">
        <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="lg:col-span-5">
              <h2 class="text-2xl font-bold leading-10 tracking-tight">
                Frequently asked questions
              </h2>
              <p class="mt-4 text-base leading-7">
              </p>
            </div>
            <div class="mt-10 lg:col-span-7 lg:mt-0">
              <dl class="space-y-10">
                <div>
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    Do I need a membership to attend practice sessions?
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-400">
                    No, the practice sessions are open for everyone at all skill
                    levels. Drop-in price is $10 per session. We also offer a
                    10-session punch card for $75.{" "}
                  </dd>
                </div>
                <div>
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    How do I view and manage my membership?
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-400">
                    You can manage your membership by logging in to Stripe with
                    the email you used for your subscription. Here you can view
                    your payment history, and cancel your subscription.{" "}
                    <a
                      class="font-semibold text-indigo-500 hover:text-indigo-400"
                      href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
                    >
                      Manage my membership
                    </a>.
                  </dd>
                </div>
                <div>
                  <dt class="text-base font-semibold leading-7 text-gray-300">
                    Which session locations are included in the membership?
                  </dt>
                  <dd class="mt-2 text-base leading-7 text-gray-400">
                    <p>
                      Monday{" "}
                      <a
                        class="underline"
                        href="https://maps.app.goo.gl/25Y1MXtwDDzogxh97"
                      >
                        Aldergrove Community League
                      </a>{" "}
                      session, Tuesday{" "}
                      <a
                        class="underline"
                        href="https://maps.app.goo.gl/qj14QES7gk65wWSNA"
                      >
                        Brookview Community League
                      </a>{" "}
                      session, and Friday at{" "}
                      <a
                        class="underline"
                        href="https://maps.app.goo.gl/qEE9yfbEuzzS6THi9"
                      >
                        The Code YEG
                      </a>.
                    </p>
                    <p>
                      For detailed dates and times check the{"  "}
                      <a
                        class="font-semibold text-indigo-500 hover:text-indigo-400"
                        href="/events"
                      >
                        event calendar
                      </a>.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
