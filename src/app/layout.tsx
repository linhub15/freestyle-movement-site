import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { SiteNav } from "@/components/SiteNav";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Freestyle Movement",
  description: "an Edmonton non-profit supporting breaking and freestyle dance",
  keywords:
    "edmonton, breakdance, practice, session, bboy, bgirl, breakdancer, break,dance, hiphop, hip hop, yeg, choreography, freestyle, movement, art, culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const url = new URL("https://freestylemovement.ca");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={metadata.title?.toString() ?? ""}
          key="title"
        />
        <link
          rel="icon"
          href="/images/icon_black.svg"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="icon"
          href="/images/icon_white.svg"
          media="(prefers-color-scheme: dark)"
        />

        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:url" content={url.toString()} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title?.toString() ?? ""} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta property="og:image" content="/images/og_image.png" />

        <meta name="twitter:card" content="Freestyle Movement Landing Image" />
        <meta property="twitter:domain" content={url.host} />
        <meta property="twitter:url" content={url.toString()} />
        <meta name="twitter:title" content={metadata.title?.toString() ?? ""} />
        <meta name="twitter:description" content={metadata.description ?? ""} />
        <meta name="twitter:image" content="/images/og_image.png" />
      </head>
      <body className="flex h-full bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-FJCGDSSNVE" />
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-zinc-900 ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <SiteNav
          links={[
            { title: "Home", href: "/" },
            { title: "Learn", href: "/learn" },
            { title: "Practice", href: "/practice" },
            { title: "About", href: "/about" },
          ]}
        />
        <main className="flex-auto pt-10 text-zinc-100">{children}</main>
        <Footer />
      </div>
    </>
  );
}
