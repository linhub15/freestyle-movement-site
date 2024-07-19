import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/ui/Container";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import type { PropsWithChildren } from "react";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <ContainerOuter>
        <div className="space-y-16 border-zinc-700/40 border-t pt-10 pb-16 lg:pt-16">
          <ContainerInner>
            <div className="grid grid-cols-2 gap-8">
              <LinkGroup title="Freestyle Movement">
                <LinkItem title="Home" href="/" />
                <LinkItem title="Learn" href="/learn" />
                <LinkItem title="Practice" href="/practice" />
                <LinkItem title="About" href="/about" />
              </LinkGroup>

              <div className="space-y-8">
                <LinkGroup title="Resources">
                  <LinkItem title="Code of conduct" href="/code-of-conduct" />
                  <LinkItem
                    title="Event Calendar (Luma)"
                    href="https://lu.ma/freestyle.movement"
                  />
                </LinkGroup>

                <LinkGroup title="Partners">
                  <LinkItem
                    title="Street Styles 780"
                    href="https://www.streetstyles780.com/"
                  />
                </LinkGroup>
              </div>
            </div>
          </ContainerInner>

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
                    href="https://www.facebook.com/freestylemovement.ca"
                    aria-label="Follow on Facebook"
                    icon={FacebookIcon}
                    target="_blank"
                  />
                  <SocialLink
                    href="https://www.youtube.com/@freestyle.movement"
                    aria-label="Follow on YouTube"
                    icon={YouTubeIcon}
                    target="_blank"
                  />
                </div>
              </div>

              <p className="text-sm text-zinc-400">
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
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-teal-400" />
    </Link>
  );
}

function LinkGroup(props: { title: string } & PropsWithChildren) {
  return (
    <div>
      {props.title && (
        <h3 className="font-semibold text-sm text-zinc-100 leading-6">
          {props.title}
        </h3>
      )}
      <ul className="mt-4 space-y-4">{props.children}</ul>
    </div>
  );
}

function LinkItem({
  title,
  ...linkProps
}: React.ComponentPropsWithoutRef<typeof Link> & {
  title: string;
}) {
  const isExternalLink = linkProps.href.toString().startsWith("http");

  return (
    <li>
      <Link
        className="text-sm text-zinc-400 leading-6 hover:text-teal-400"
        {...linkProps}
      >
        {title}
        {isExternalLink && (
          <ArrowTopRightOnSquareIcon className="ml-1 inline-block size-3" />
        )}
      </Link>
    </li>
  );
}
