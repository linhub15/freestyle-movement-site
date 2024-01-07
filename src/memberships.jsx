export const layout = "navbar_layout.jsx";

export default function ({ comp }) {
  return (
    <>
      <div class="py-10 mx-1 text-center rounded-xl outline outline-1 outline-gray-500 bg-[#29303d]">
        <h2 class="py-4 text-xl font-bold leading-7 text-white sm:truncate sm:text-2xl sm:tracking-tight">
          Already have a membership?
        </h2>
        <div class="py-3">
          <a
            class="ml-3 inline-flex items-center rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="https://billing.stripe.com/p/login/28o3fwari7UtfHadQQ"
          >
            Manage my membership
          </a>
        </div>
      </div>
      <div class="text-center py-12">
        <h2 class="py-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Membership Options
        </h2>
        <comp.stripe />
      </div>

      <div class="">
        <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
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
                    Tuesday night Brookview Community League session, Friday
                    night at The Code YEG and more locations to come in the
                    future. <a
                      class="font-semibold text-indigo-500 hover:text-indigo-400"
                      href="/events"
                    >
                      Event calendar
                    </a>.
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
