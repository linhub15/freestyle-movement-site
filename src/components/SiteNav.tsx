"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils/cn";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { Route } from "next";

function MobileNavItem({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover> & { links: NavItem[] },
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-zinc-800/90 px-4 py-2 font-medium text-sm text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur-sm hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 size-2 stroke-zinc-500 group-hover:stroke-zinc-400" />
      </PopoverButton>
      <Transition>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <PopoverBackdrop className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs" />
        </TransitionChild>
        <TransitionChild
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-6 w-6 text-zinc-400" />
              </PopoverButton>
              <h2 className="font-medium text-sm text-zinc-400">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 divide-zinc-100/5 text-base text-zinc-300">
                {props.links.map((link) => (
                  <MobileNavItem href={link.href} key={link.title}>
                    {link.title}
                  </MobileNavItem>
                ))}
              </ul>
            </nav>
          </PopoverPanel>
        </TransitionChild>
      </Transition>
    </Popover>
  );
}

function NavItem({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "relative block px-3 py-2 transition",
          isActive ? "text-teal-400" : "hover:text-teal-400",
        )}
      >
        {children}
        {isActive && (
          <span className="-bottom-px absolute inset-x-1 h-px bg-linear-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<"nav"> & { links: NavItem[] },
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-zinc-800/90 px-3 font-medium text-sm text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur-sm">
        {props.links.map((link) => (
          <NavItem href={link.href} key={link.title}>
            {link.title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}

function clamp(number: number, a: number, b: number) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

type NavItem = { title: string; href: Route };

export function SiteNav({ links = [] }: { links?: NavItem[] }) {
  const isHomePage = usePathname() === "/";
  const headerRef = useRef<React.ElementRef<"div">>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    const downDelay = 0;
    const upDelay = 64;

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }

      const { top, height } = headerRef.current.getBoundingClientRect();
      const scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        const offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
      } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
      }
    }

    function updateStyles() {
      updateHeaderStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles);
      window.removeEventListener("resize", updateStyles);
    };
  }, []);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <Container
            className="top-(--header-top,--spacing(6)) w-full"
            style={{
              position:
                "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation
                  className="pointer-events-auto md:hidden"
                  links={links}
                />
                <DesktopNavigation
                  className="pointer-events-auto hidden md:block"
                  links={links}
                />
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && (
        <div
          className="flex-none"
          style={{ height: "var(--content-offset)" }}
        />
      )}
    </>
  );
}
