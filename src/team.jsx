export const layout = "navbar_layout.jsx";
export const title = "Our Team";

export default function ({ team_members }) {
  return (
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-medium py-8">{title}</h1>
      <p class="text-2xl tracking-tight">
        Get connected with our members and volunteers.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-12">
        {team_members.map((item) => (
          <div class="">
            <h2 class="text-lg font-semibold">{item.name}</h2>
            <p class="text-gray-600 dark:text-gray-500">{item.roles}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
