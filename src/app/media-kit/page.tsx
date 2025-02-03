import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "Digital identity and brand media",
};

export default function MediaKit() {
  return (
    <>
      <Container>
        <h1 className="text-3xl text-zinc-300 tracking-tight">Media Kit</h1>
        <p className="mt-4 text-zinc-400">
          Designed by{" "}
          <a className="underline" href="https://paulporras.com">
            Paul Porras
          </a>{" "}
          December 2024.
        </p>

        <div className="space-y-16 py-16">
          <div className="flex w-full flex-wrap justify-evenly gap-4 rounded-xl bg-zinc-800 py-8">
            <Image
              className="rounded-sm bg-zinc-300 p-4"
              src="/images/icon_black.svg"
              alt="Black icon"
              width={100}
              height={100}
            />

            <Image
              className="rounded-sm bg-zinc-100 p-4"
              src="/images/icon_color.svg"
              alt="Colored icon"
              width={100}
              height={100}
            />

            <Image
              className="rounded-sm bg-zinc-900 p-4"
              src="/images/icon_white.svg"
              alt="White icon"
              width={100}
              height={100}
            />
          </div>

          <div className="flex w-full flex-wrap justify-evenly gap-4 rounded-xl bg-zinc-800 py-8">
            <Image
              className="rounded-sm bg-zinc-300 p-4"
              src="/images/logo_black.svg"
              alt="Black icon"
              width={200}
              height={100}
            />

            <Image
              className="rounded-sm bg-zinc-100 p-4"
              src="/images/logo_color.svg"
              alt="Colored icon"
              width={200}
              height={100}
            />

            <Image
              className="rounded-sm bg-zinc-900 p-4"
              src="/images/logo_white.svg"
              alt="White icon"
              width={200}
              height={100}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
