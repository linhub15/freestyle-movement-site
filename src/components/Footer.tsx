import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/ui/Container";
import type { Route } from "next";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./SocialIcons";

function NavLink({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="transition hover:text-teal-400">
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-zinc-700/40 border-t pt-10 pb-16">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex gap-6">
                  <SocialLink
                    href="https://www.instagram.com/freestyle.movement"
                    aria-label="Follow on Instagram"
                    icon={InstagramIcon}
                    target="_blank"
                  />
                  <SocialLink
                    href="https://www.youtube.com/@freestyle.movement"
                    aria-label="Follow on YouTube"
                    icon={YouTubeIcon}
                    target="_blank"
                  />
                  <SocialLink
                    href="https://www.facebook.com/freestylemovement.ca"
                    aria-label="Follow on Facebook"
                    icon={FacebookIcon}
                    target="_blank"
                  />
                </div>
              </div>

              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Freestyle Movement Dance
                Company Ltd.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-zinc-300" />
    </Link>
  );
}
