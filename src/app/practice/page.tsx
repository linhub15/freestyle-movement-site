import { Container } from "@/components/ui/Container";

export default function Practice() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl py-8 sm:py-16">
        <h1 className="text-3xl tracking-tight text-zinc-300">
          Practice in Edmonton
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-400">
          Freestyle Movement no longer hosts practice sessions, but there are
          other places to practice breaking in Edmonton.
        </p>

        <div className="mt-10 rounded-xl p-6 ring-1 ring-white/15 sm:p-8">
          <h2 className="text-xl font-semibold text-zinc-200">
            New Roots Breaking
          </h2>
          <p className="mt-3 leading-7 text-zinc-400">
            New Roots Breaking hosts Open Breaking Sessions. Visit their events
            page for current dates, times, and session details.
          </p>
          <a
            className="mt-6 inline-flex rounded-md bg-zinc-200 px-4 py-2.5 font-medium text-zinc-900 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-200"
            href="https://newrootsbreaking.com/events/"
            target="_blank"
            rel="noreferrer"
          >
            View open breaking sessions
          </a>
        </div>
      </div>
    </Container>
  );
}
