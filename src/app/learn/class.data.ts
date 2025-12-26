import { PLACES, type Place } from "@/data/places";
import type { Route } from "next";

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
  "2026_january_to_april": {
    label: "January to April 2026 Schedule",
    locations: [
      {
        href: "/learn/2026/january-to-april/lymburn-breaking-class",
        dayOfWeek: "Monday",
        location: PLACES.lymburn,
        instructor: "Renand Fulgueras",
        classes: [
          {
            title: "Beginner Youth Breaking",
            time: "7:00 - 8:00 PM",
            canRegister: true,
            ageRange: "Ages 8+",
            href: "/learn/2026/january-to-april/lymburn-breaking-class",
          },
        ],
      },
      {
        href: "/learn/2026/january-to-april/brookview-breaking-class",
        dayOfWeek: "Tuesday",
        location: PLACES.brookview,
        instructor: "Hubert Lin",
        classes: [
          {
            title: "Intermediate Breaking",
            time: "6:00 - 7:00 PM",
            canRegister: true,
            ageRange: "Ages 10+",
            href: "/learn/2026/january-to-april/brookview-breaking-class",
          },
        ],
      },
      {
        href: "/learn/2026/january-to-april/thecode-breaking-class",
        dayOfWeek: "Friday",
        location: PLACES.thecode,
        instructor: "Renand Fulgueras",
        classes: [
          {
            title: "Beginner Youth Breaking",
            time: "6:00 - 7:00 PM",
            canRegister: true,
            ageRange: "Ages 8+",
            href: "/learn/2026/january-to-april/thecode-breaking-class",
          },
        ],
      },
    ],
  },
};
