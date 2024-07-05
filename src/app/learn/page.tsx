import { Container } from "@/components/ui/Container";
import { Classes } from "./Classes";

export default function LearnPage() {
  return (
    <Container>
      <div className="flex justify-between">
        <h1 className="text-3xl text-zinc-300 tracking-tight">
          Learn
        </h1>
      </div>

      <div className="text-zinc-400">
        <p>
          Registration for fall 2024 breaking classes will be available soon.
        </p>
      </div>

      <div className="py-12">
        <h2 className="py-4 text-lg text-zinc-300 leading-5 sm:truncate sm:text-xl sm:tracking-tight">
          Ongoing Classes
        </h2>
        <Classes />
      </div>
    </Container>
  );
}
