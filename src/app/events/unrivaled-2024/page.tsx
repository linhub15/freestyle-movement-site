import { Container } from "@/components/Container";
import { Stripe } from "@/components/Stripe";

export default function Unrivaled2024() {
  return (
    <Container>
      <h1 className="text-3xl tracking-tight text-zinc-300">
        Unrivaled 2024
      </h1>

      <div className="space-y-2 text-zinc-400 py-8">
        <p>
          Follow us on Instagram{" "}
          <a
            className="text-zinc-300 underline"
            href="https://instagram.com/freestyle.movement"
          >
            @freestyle.movement
          </a>{" "}
          for updates.
        </p>
        <p className="text-lg font-semibold">Saturday June 8, 2024</p>
        <p className="">
          DJ Carry ON | MC Teio | MC Miracle
        </p>

        <p>West Edmonton Mall South Parkade</p>

        <ul className="list-disc px-4">
          <li>$200 - 1v1 Footwork (Judged by Eazy)</li>
          <li>$200 - 1v1 Open Styles (Judged by AJ)</li>
          <li>$100 - 2v2 Youth Breaking (Judged by Eazy & Link)</li>
        </ul>

        <div className="py-4">
          <h3 className="font-semibold text-lg">Schedule</h3>
          <p>coming soon...</p>
        </div>

        <div className="py-4">
          <h3 className="font-semibold text-lg">Tickets</h3>
          <p>
            Spectator tickets are purchased through Driven{" "}
            <a
              className="text-zinc-300 underline"
              href="https://www.showpass.com/drivenedmonton2024/"
              target="_blank"
            >
              https://www.showpass.com/drivenedmonton2024/
            </a>
          </p>
          <div className="w-full">
            <Stripe
              pricingTableId="prctbl_1PDGFVJ1kSEluvIzlrItRLy6"
              publishableKey="pk_live_51OJll2J1kSEluvIzvRDs6akU2WNo5RQ2xUNd5MQ92CAyA4J7CpOTdFm15g4jqoKPm9ip9hc9CR3KTXv0CBEVFa1I00VKExIAPZ"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
