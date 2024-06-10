import { Container } from "@/components/Container";
import { Schedule } from "./schedule";

import Image from "next/image";

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
          DJ Carry On | MC Teio | MC Miracle
        </p>

        <p>
          West Edmonton Mall South Parkade -{" "}
          <a className="underline font-medium" href="#map">View Map</a>
        </p>

        <ul className="list-disc px-4">
          <li>$200 - 1v1 Open Styles (Judged by AJ)</li>
          <li>$200 - 1v1 Footwork (Judged by Eazy)</li>
          <li>$100 - 2v2 Youth Breaking (Judged by Eazy)</li>
        </ul>

        <Schedule />

        <div id="map">
          <a href="https://maps.app.goo.gl/o3LtfiF3NGUNh8Sa7" target="_blank">
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
