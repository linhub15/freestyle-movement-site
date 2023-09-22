export const layout = "base_layout.jsx";

export default function ({ children }) {
  return (
    <>
      <div class="flex w-full py-4 justify-center items-center">
        <a
          class="flex gap-2 text-lg px-2 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:invert items-center"
          href="/"
        >
          <ArrowBackIcon />
          <span>Go home</span>
        </a>
      </div>
      <div class="mx-4 lg:mx-0">{children}</div>
    </>
  );
}

function ArrowBackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}
