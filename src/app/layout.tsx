import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Providers } from "./providers";
import { GoogleAnalytics } from '@next/third-parties/google'

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

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
      <GoogleAnalytics gaId="G-FJCGDSSNVE"/>
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
        <Header
          links={[
            { title: "Home", href: "/" },
            { title: "Memberships", href: "/memberships" },
            { title: "Events", href: "/events" },
            { title: "Team", href: "/team" },
          ]}
        />
        <main className="flex-auto pt-10 text-zinc-100">{children}</main>
        <Footer />
      </div>
    </>
  );
}
