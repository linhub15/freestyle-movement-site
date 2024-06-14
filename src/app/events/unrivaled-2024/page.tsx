import { Container } from "@/components/Container";
import { Schedule } from "./schedule";

import Image from "next/image";

export default function Unrivaled2024() {
  return (
    <Container>
      <h1 className="text-3xl text-zinc-300 tracking-tight">Unrivaled 2024</h1>

      <div className="space-y-2 py-8 text-zinc-400">
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
        <p className="font-semibold text-lg">Saturday June 8, 2024</p>
        <p className="">DJ Carry On | MC Teio | MC Miracle</p>

        <p>
          West Edmonton Mall South Parkade -{" "}
          <a className="font-medium underline" href="#map">
            View Map
          </a>
        </p>

        <ul className="list-disc px-4">
          <li>$200 - 1v1 Open Styles (Judged by AJ)</li>
          <li>$200 - 1v1 Footwork (Judged by Eazy)</li>
          <li>$100 - 2v2 Youth Breaking (Judged by Eazy)</li>
        </ul>

        <Schedule />

        <div id="map">
          <a
            href="https://maps.app.goo.gl/o3LtfiF3NGUNh8Sa7"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mx-auto rounded-lg"
              src="/images/unrivaled-2024/map.png"
              alt="Map of event"
              width="900"
              height="530"
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
