export const layout = "layout.jsx";

export default function ({ comp }) {
  return (
    <div class="flex flex-col gap-6 max-w-2xl mx-auto">
      <img
        class="w-48 mx-auto dark:invert"
        src="/imgs/logo.png"
        alt="Freestyle Movement"
      />
      <h1 class="text-4xl lg:text-5xl text-center">Freestyle Movement</h1>
      <p class="py-8 text-lg">
        Freestyle Movement is an Edmonton non-profit that creates opportunities
        for bboys, bgirls, choreographers and freestyle dancers to grow and
        build the Breaking and freestyle dance community in Edmonton. We teach
        classes, organize competitions and run regular open practice sessions.
      </p>
      <div class="flex flex-col items-center gap-6">
        <comp.linktree />
      </div>
      <div class="flex flex-wrap justify-center gap-6 py-8">
        <comp.socials />
      </div>
    </div>
  );
}
