export const layout = "navbar_layout.jsx";

export default function ({ comp }) {
  return (
    <>
      <div class="py-10 text-center rounded-lg outline outline-1 outline-gray-500">
        <h2 class="py-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
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
    </>
  );
}
