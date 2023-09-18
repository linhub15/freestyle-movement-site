export default function ({ href, children }) {
  return (
    <a
      class="flex rounded-2xl px-8 py-4 shadow dark:shadow-gray-800 w-full max-w-2xl justify-center gap-2
        hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 dark:hover:shadow-gray-800
        bg-gray-100 dark:bg-gray-700"
      href={href}
    >
      {children}
    </a>
  );
}
