export const layout = "navbar_layout.jsx";
export const title = "Our Team";

export default function ({ team_members }) {
  return (
    <>
      <p class="text-xl tracking-tight">
        Get connected with our members and volunteers.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-12">
        {team_members.map((item) => (
          <div class="">
            <h2 class="text-lg font-semibold">{item.name}</h2>
            <p class="text-gray-500">{item.roles}</p>
          </div>
        ))}
      </div>
    </>
  );
}
