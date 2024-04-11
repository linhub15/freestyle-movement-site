"use client";

import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Classes from "./Classes";
import PracticeSpots from "./PracticeSpots";
import GoogleCalendar from "@/components/GoogleCalendar";
import { Route } from "next";

const tabs = [
  { name: "Classes", id: "classes", content: <Classes /> },
  { name: "Practices Spots", id: "practices", content: <PracticeSpots /> },
  {
    name: "Community Events",
    id: "events",
    content: (
      <GoogleCalendar calendarId="c_55f824ce3f7c0b678d69eaa3ee663fbbd97a1e981f4f198207400b02707af382@group.calendar.google.com" />
    ),
  },
];

export function Tabs() {
  const searchKey = "tab";
  const router = useRouter();
  const activeTabId = useSearchParams().get(searchKey);

  const activeTab = tabs.find((t) => t.id === activeTabId) ?? tabs[0];
  const pathname = (tabId: string): Route => `/events?${searchKey}=${tabId}`;
  const isActive = (tabId: string) => tabId === activeTab.id;

  return (
    <>
      {/* Tabs */}
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-0 bg-zinc-800/90 px-4 py-2 text-sm  font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 backdrop-blur hover:ring-white/20"
            onChange={(e) => router.push(pathname(e.target.value))}
            value={activeTab.id}
          >
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.id}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={pathname(tab.id)}
                className={cn(
                  isActive(tab.id)
                    ? "bg-zinc-100 text-teal-900"
                    : "text-zinc-400 hover:text-teal-400",
                  "rounded-md px-3 py-2 text-sm font-medium",
                )}
                aria-current={isActive(tab.id) ? "page" : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab.content}
      </div>
    </>
  );
}
