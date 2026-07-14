import type { Route } from "next";
import { PLACES, type Place } from "@/data/places";

export type DanceClass = {
  title: string;
  time: string;
  canRegister?: boolean;
  ageRange?: string;
  href?: Route;
};

type ClassLocation = {
  dayOfWeek: string;
  location: Place;
  href?: Route;
  instructor: string;
  classes: DanceClass[];
};

type Semester = {
  [key: string]: { label: string; locations: ClassLocation[] };
};
export const classes: Semester = {
  "2026_fall": {
    label: "Fall 2026",
    locations: [
      {
        href: "/learn/2026/fall/brookview-breaking-class",
        dayOfWeek: "Tuesday",
        location: PLACES.brookview,
        instructor: "Hubert Lin",
        classes: [
          {
            title: "Brookview Breaking Class",
            time: "Dates and time to be announced",
            href: "/learn/2026/fall/brookview-breaking-class",
          },
        ],
      },
    ],
  },
};
